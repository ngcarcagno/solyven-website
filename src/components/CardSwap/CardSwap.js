import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import "./CardSwap.css";

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div ref={ref} {...rest} className={`card ${customClass ?? ""} ${rest.className ?? ""}`.trim()} />
));
Card.displayName = "Card";

const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});
const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

const CardSwap = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  onClickEffect = true,
  onHoverEffect = false,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  children,
}) => {
  const config =
    easing === "elastic"
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: "power1.inOut",
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));

  const tlRef = useRef(null);
  const intervalRef = useRef();
  const swapRef = useRef();
  const container = useRef(null);

  // Modular: autoplay siempre activo, pero click/hover resetean el timer y hacen swap si la prop lo permite
  // Flag para bloquear interacción durante animación
  const isAnimating = useRef(false);
  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount));

    const swap = () => {
      if (order.current.length < 2) return;
      if (isAnimating.current) return;
      isAnimating.current = true;
      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      const tl = gsap.timeline();
      tlRef.current = tl;
      tl.to(elFront, {
        y: "+=500",
        duration: config.durDrop,
        ease: config.ease,
      });
      tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${i * 0.15}`
        );
      });
      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        "return"
      );
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease,
        },
        "return"
      );
      tl.call(() => {
        order.current = [...rest, front];
        isAnimating.current = false;
      });
    };
    swapRef.current = swap;
    swap();
    // autoplay siempre activo
    intervalRef.current = window.setInterval(() => swapRef.current?.(), delay);
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardDistance, verticalDistance, delay, skewAmount, easing]);

  // swap y reset timer al click/hover según props
  const resetAutoplayAndSwap = () => {
    if (isAnimating.current) return;
    clearInterval(intervalRef.current);
    swapRef.current?.();
    intervalRef.current = window.setInterval(() => swapRef.current?.(), delay);
  };
  // Siempre la card frontal recibe el efecto, sin importar dónde se haga click/hover
  const handleCardClick = (i, e) => {
    if (isAnimating.current) return;
    e?.stopPropagation();
    if (onClickEffect) {
      resetAutoplayAndSwap();
    }
    if (onCardClick) onCardClick(order.current[0]); // siempre pasa el índice de la card frontal
  };
  const handleCardMouseEnter = (i, e) => {
    if (!onHoverEffect || isAnimating.current) return;
    clearInterval(intervalRef.current);
    const frontIdx = order.current[0];
    const frontEl = refs[frontIdx]?.current;
    if (frontEl) gsap.to(frontEl, { scale: 1.04, duration: 0.22, ease: "power2.out" });
  };
  const handleCardMouseLeave = (i, e) => {
    if (!onHoverEffect || isAnimating.current) return;
    intervalRef.current = window.setInterval(() => swapRef.current?.(), delay);
    const frontIdx = order.current[0];
    const frontEl = refs[frontIdx]?.current;
    if (frontEl) gsap.to(frontEl, { scale: 1, duration: 0.22, ease: "power2.out" });
  };
  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: handleCardClick,
          onMouseEnter: handleCardMouseEnter,
          onMouseLeave: handleCardMouseLeave,
        })
      : child
  );

  return (
    <div ref={container} className="card-swap-container" style={{ width, height }}>
      {rendered}
    </div>
  );
};

export default CardSwap;

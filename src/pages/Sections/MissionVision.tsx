import React, { useEffect, useState } from "react";
import CardSwap, { Card } from "../../components/CardSwap/CardSwap";
import MissionVisionContent from "../../content/MissionVisionContent.json";
// @ts-ignore: may not have types installed for lucide-react in this project
import { ShieldCheck, Globe } from "lucide-react";
import { MissionTitleOverride, ServicesContainer } from "./styles";

const iconMap: Record<string, React.FC<any>> = {
  ShieldCheck,
  Globe,
};

const MissionVision = () => {
  const cards = MissionVisionContent.missionVision.cards;
  const CardAny: any = Card;
  const sectionTitle = MissionVisionContent.missionVision.title;
  const sectionSubtitle = MissionVisionContent.missionVision.subtitle;

  // Track viewport width and height
  const [vw, setVw] = useState<number>(1200);
  const [vh, setVh] = useState<number>(800);

  // Track viewport width and height

  useEffect(() => {
    const handleResize = () => {
      setVw(window.innerWidth);
      setVh(window.innerHeight);
    };
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (typeof window !== "undefined") window.removeEventListener("resize", handleResize);
    };
  }, []);

  // (no title DOM measuring - keep previous layout logic)

  // Compute sizes using both width and height so we can reduce card sizes on short viewports
  const computeSizes = (width: number, height: number) => {
    const shortViewport = height <= 700;

    if (width <= 375) {
      const w = Math.max(260, Math.round(width * 0.86));
      const h = Math.round(w * 0.95);
      return {
        cardSwapWidth: w,
        cardSwapHeight: shortViewport ? Math.round(h * 0.88) : h,
        cardDistance: Math.max(8, Math.round(w * 0.06)),
        verticalDistance: Math.max(10, Math.round(w * 0.06)),
        paddingTop: Math.round(w * (shortViewport ? 0.045 : 0.06)) + "px",
        iconSize: 20,
        titleSize: "0.95rem",
        paragraphMaxWidth: Math.min(260, w - 24),
        paragraphSize: "0.85rem",
      };
    }

    if (width <= 480) {
      const w = Math.max(300, Math.round(width * 0.8));
      const h = Math.round(w * 0.92);
      return {
        cardSwapWidth: w,
        cardSwapHeight: shortViewport ? Math.round(h * 0.9) : h,
        cardDistance: Math.max(12, Math.round(w * 0.065)),
        verticalDistance: Math.max(14, Math.round(w * 0.07)),
        paddingTop: Math.round(w * (shortViewport ? 0.055 : 0.07)) + "px",
        iconSize: 22,
        titleSize: "1rem",
        paragraphMaxWidth: Math.min(320, w - 32),
        paragraphSize: "0.95rem",
      };
    }

    if (width <= 768) {
      const w = Math.max(420, Math.round(width * 0.7));
      const h = Math.round(w * 0.75);
      return {
        cardSwapWidth: w,
        cardSwapHeight: shortViewport ? Math.round(h * 0.9) : h,
        cardDistance: Math.max(16, Math.round(w * 0.06)),
        verticalDistance: Math.max(18, Math.round(w * 0.08)),
        paddingTop: Math.round(w * (shortViewport ? 0.06 : 0.08)) + "px",
        iconSize: 24,
        titleSize: "1.05rem",
        paragraphMaxWidth: Math.min(480, w - 40),
        paragraphSize: "0.95rem",
      };
    }

    const desktopW = Math.min(900, Math.round(width * 0.66));
    const desktopH = Math.round(desktopW * 0.6);
    return {
      cardSwapWidth: desktopW,
      cardSwapHeight: height <= 700 ? Math.round(desktopH * 0.85) : desktopH,
      cardDistance: Math.round(desktopW * 0.06),
      verticalDistance: Math.round(desktopW * 0.08),
      paddingTop: Math.round(desktopW * (height <= 700 ? 0.055 : 0.08)) + "px",
      iconSize: 28,
      titleSize: "1.0625rem",
      paragraphMaxWidth: 640,
      paragraphSize: "1rem",
    };
  };

  const sizes = computeSizes(vw, vh);
  const isMobile = vw <= 768;
  // New layout strategy: two full-width stacked blocks each 50vh. First block holds title/subtitle,
  // second block holds CardSwap. This gives us deterministic vertical space to size cards.

  // We'll rely on the project's ServicesContainer for consistent paddings/margins

  // Use the project's natural title flow (like Services): let the title occupy natural height
  // and compute available card area from the viewport minus header/title estimates. This mirrors
  // the Services layout where the title sits above and spacing/paddings come from ServicesContainer.
  const headerHeight = 64; // safe default; site exposes --header-height but use fallback here
  const titleEstimatedHeight = isMobile ? Math.max(88, Math.round(vh * 0.12)) : Math.max(120, Math.round(vh * 0.18));
  const cardsAvailableHeight = Math.max(220, vh - headerHeight - titleEstimatedHeight - 40); // reserve some margin

  const titleBlockStyle: React.CSSProperties = {
    display: "flex",
    width: "100%",
    height: `${titleEstimatedHeight}px`,
    position: "relative",
    alignItems: vw >= 1100 ? "flex-end" : "flex-start",
    justifyContent: "center",
    boxSizing: "border-box",
  };

  const cardsBlockStyle: React.CSSProperties = {
    minHeight: `${Math.max(220, Math.round(cardsAvailableHeight * (isMobile ? 0.9 : 1)))}px`,
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    paddingTop: isMobile ? "0.5rem" : undefined,
  };

  // Ajuste: en mobile, empujar el bloque de cards un 10% más abajo y subir el título/subtítulo un 10%
  if (isMobile) {
    cardsBlockStyle.marginTop = `${Math.round(vh * 0.1)}px`;
    titleBlockStyle.marginTop = `-${Math.round(vh * 0.1)}px`;
  }

  // Derive CardSwap dimensions from the available cardsHeight and vw
  const availableHeight = Math.max(220, Math.round(cardsAvailableHeight * (isMobile ? 0.9 : 1))) - 20; // small padding allowance
  const availableWidth = Math.round(vw * 0.94);

  // Cap the wrapper to the site's typical content width (mirrors Services/About) to avoid oversizing on wide screens
  const siteMaxWidth = 1100;
  const wrapperMaxWidth = Math.min(siteMaxWidth, availableWidth);

  // Compute a desired height based on available vertical space but cap it so cards don't become huge on large screens
  const desiredCardHeight = Math.min(Math.round(cardsAvailableHeight), Math.round(wrapperMaxWidth * 0.55));
  let cardSwapHeight = Math.max(220, Math.min(desiredCardHeight, 520)); // clamp between 220 and 520

  // Slightly increase card height on mobile to give body text more breathing room
  if (isMobile) {
    const increased = Math.round(cardSwapHeight * 1.14); // +14%
    cardSwapHeight = Math.min(520, Math.max(cardSwapHeight, increased));
  }

  // Width derived from height with different aspect ratio on mobile vs desktop; also limit to wrapper width
  const rawWidth = Math.round(cardSwapHeight * (isMobile ? 1.05 : 1.6));
  const cardSwapWidth = Math.max(280, Math.min(wrapperMaxWidth, rawWidth));

  // Compute header area height for cards (used both in header styles and to pad the content)
  const cardHeaderHeight = Math.max(44, Math.round(cardSwapHeight * 0.12));

  const wrapperStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: wrapperMaxWidth,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // Leave a little bottom padding on mobile so floating widgets (WhatsApp) don't cover cards
    paddingBottom: isMobile ? 36 : 0,
  };

  // Determine if the CardSwap area would intrude into the title visual area using computed sizes.
  // We'll toggle a class on the outer wrapper to reduce aggressive translations when needed.
  const shouldAvoidOverlap = () => {
    // Estimate title bottom (headerHeight + titleEstimatedHeight) and card top (header + title + small buffer)
    const titleEstimatedHeight = isMobile ? Math.max(88, Math.round(vh * 0.12)) : Math.max(120, Math.round(vh * 0.18));
    const titleBottom = headerHeight + titleEstimatedHeight;
    // CardSwap's visual top when anchored absolute at bottom: compute approximate top coordinate
    const cardVisualTop = vh - (Math.round(cardSwapHeight) + (isMobile ? 0 : Math.round(window.innerHeight * 0.06)));
    // If the cardVisualTop is less than titleBottom, it will intrude; use a small margin
    return cardVisualTop < titleBottom + 8;
  };
  const avoidOverlapClass = shouldAvoidOverlap() ? "avoid-overlap" : "";

  return (
    <section id="mission">
      <MissionTitleOverride />

      <ServicesContainer>
        <div style={titleBlockStyle}>
          <div
            style={{
              textAlign: "center",
              width: "100%",
              maxWidth: 900,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              // Position the title area absolutely inside the title block so it doesn't change the block height
              position: "absolute",
              top: isMobile ? "100%" : "100%",
              left: 0,
              boxSizing: "border-box",
            }}>
            <div className="services-title-container">
              <h6 className="about-title" style={{ margin: 0 }}>
                {sectionTitle}
              </h6>
            </div>
            {sectionSubtitle && (
              <div className="section-description">
                <p className="subtitle">{sectionSubtitle}</p>
              </div>
            )}
          </div>
        </div>

        <div style={cardsBlockStyle}>
          <div style={wrapperStyle}>
            <div
              className={`card-swap-outer shift-down ${avoidOverlapClass}`}
              style={{
                width: cardSwapWidth,
                height: cardSwapHeight,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 8,
              }}>
              <CardSwap
                width={cardSwapWidth}
                height={cardSwapHeight}
                cardDistance={Math.round(cardSwapWidth * 0.06)}
                verticalDistance={Math.round(cardSwapWidth * 0.15)}
                delay={6000}
                onClickEffect={true}
                onHoverEffect={vw > 900}
                onCardClick={() => {}}>
                {cards.map((c) => {
                  const Icon = iconMap[c.icon] ?? (() => null);
                  return (
                    <CardAny key={c.id}>
                      <div
                        className="flex flex-col items-center text-center rounded-2xl"
                        style={{
                          width: "100%",
                          minHeight: "100%",
                          background: "linear-gradient(180deg, rgba(20,20,20,0.95), rgba(36,36,36,0.95))",
                          color: "var(--color-text-primary)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          boxShadow: "0 18px 40px rgba(0,0,0,0.6), 0 0 40px rgba(247,88,0,0.06)",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          paddingTop: Math.max(12, Math.round(cardSwapHeight * 0.06)),
                          position: "relative",
                          overflow: "visible",
                        }}>
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: cardHeaderHeight,
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            padding: "0 1rem",
                            borderBottom: "1px solid rgba(255,255,255,0.04)",
                            background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.005))",
                            zIndex: 5,
                            overflow: "visible",
                          }}>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", zIndex: 6 }}>
                            <Icon
                              size={Math.max(18, Math.round(cardSwapHeight * 0.08))}
                              color="var(--color-secondary)"
                              strokeWidth={1.6}
                            />
                          </div>
                          <div style={{ textAlign: "left" }}>
                            <h3
                              style={{
                                fontSize: sizes.titleSize,
                                fontWeight: 700,
                                margin: 0,
                                textTransform: "uppercase",
                              }}>
                              {c.title}
                            </h3>
                          </div>
                        </div>

                        <div
                          style={{
                            padding: ` ${cardHeaderHeight + 12}px 1rem 0 1rem`,
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "center",
                          }}>
                          <p
                            style={{
                              maxWidth: Math.min(sizes.paragraphMaxWidth, cardSwapWidth - 32),
                              margin: "0 auto",
                              color: "rgba(255,255,255,0.95)",
                              textTransform: "none",
                              fontSize: sizes.paragraphSize,
                              lineHeight: 1.4,
                            }}>
                            {c.text}
                          </p>
                        </div>
                      </div>
                    </CardAny>
                  );
                })}
              </CardSwap>
            </div>
          </div>
        </div>
      </ServicesContainer>
    </section>
  );
};

export default MissionVision;

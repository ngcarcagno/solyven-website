import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";

type Props = {
  opacity?: number; // visual opacity of the canvas noise
  intensity?: number; // 0-1 how dense/strong the noise pixels alpha are
  speed?: number; // updates per second
  scanlines?: boolean;
  scanlineThickness?: number; // px
  scanlineOpacity?: number; // 0-1
  blendMode?: string;
  zIndex?: number;
};

const Wrapper = styled.div<{
  opacity: number;
  scanlines: boolean;
  scanlineThickness: number;
  scanlineOpacity: number;
  blendMode: string;
  zIndex: number;
}>`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: ${(p) => p.zIndex}; /* keep it above background but below interactive UI */
  opacity: ${(p) => p.opacity};
  mix-blend-mode: ${(p) => p.blendMode};
  display: block;
  overflow: hidden;
  /* scanlines implemented via CSS variables for dynamic thickness/opac */
  ${(p) =>
    p.scanlines &&
    css`
      --scanline-thickness: ${p.scanlineThickness}px;
      --scanline-opacity: ${p.scanlineOpacity};

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: linear-gradient(
          rgba(0, 0, 0, calc(var(--scanline-opacity) * 0.9)) 50%,
          rgba(255, 255, 255, calc(var(--scanline-opacity) * 0.4)) 51%
        );
        background-size: 100% var(--scanline-thickness);
        pointer-events: none;
        mix-blend-mode: overlay;
        opacity: 0.95;
      }
    `}/* no glitch - simplified component */
`;

const CanvasEl = styled.canvas`
  width: 100%;
  height: 100%;
  display: block;
`;

export default function NoiseOverlay({
  opacity = 0.08,
  intensity = 0.06,
  speed = 12,
  scanlines = true,
  scanlineThickness = 2,
  scanlineOpacity = 0.06,
  blendMode = "screen",
  zIndex = 5,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mounted = true;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const interval = 1000 / Math.max(1, speed);

    const render = (t: number) => {
      if (!mounted) return;
      rafRef.current = requestAnimationFrame(render);
      if (t - lastRef.current < interval) return;
      lastRef.current = t;

      const w = canvas.width;
      const h = canvas.height;
      if (w === 0 || h === 0) return;

      // Create imageData with random gray values, alpha determined by intensity
      const cols = w;
      const rows = h;
      const image = ctx.createImageData(cols, rows);
      const data = image.data;
      const alpha = Math.max(0, Math.min(1, intensity));
      const a = Math.floor(alpha * 255);

      // Fill with random grayscale noise
      for (let i = 0; i < data.length; i += 4) {
        const v = (Math.random() * 255) | 0;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = a;
      }

      // Paint with globalComposite to soften effect
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.putImageData(image, 0, 0);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      mounted = false;
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [intensity, speed]);

  return (
    <Wrapper
      opacity={opacity}
      scanlines={scanlines}
      scanlineThickness={scanlineThickness}
      scanlineOpacity={scanlineOpacity}
      blendMode={blendMode}
      zIndex={zIndex}
      aria-hidden>
      <CanvasEl ref={canvasRef} />
    </Wrapper>
  );
}

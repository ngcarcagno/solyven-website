import { Row } from "antd";
import styled from "styled-components";

export const ScrollSnapContainer = styled("div")`
  height: 100dvh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  @media (max-width: 768px) {
    /* Keep mandatory snapping behaviour; sections will be adapted to fit the viewport instead */
    scroll-snap-type: y mandatory;
    -webkit-overflow-scrolling: touch;
    touch-action: pan-y;
  }

  /* Provide a helper inner wrapper that sections can use to constrain inner content
     so it always fits the viewport minus header and CTA areas. Sections should wrap
     their content in a div.content-inner to enable this behavior. */
  .content-inner {
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 768px) {
    /* Cap inner content to fit the viewport minus header and a safe margin for CTA */
    .content-inner {
      /* Reserve bottom guard so fixed widgets (WhatsApp / promo) don't overlap inner scroll area */
      max-height: calc(100dvh - var(--header-height) - var(--section-bottom-guard));
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
  }

  /* Oculta scrollbars en algunos navegadores */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;

export const ContentSection = styled("section")`
  position: relative;
  min-height: 100dvh; /* allow full-viewport minimum but don't force fixed height */
  height: auto; /* let the section grow if its content needs more space */
  scroll-snap-align: start;
  display: flex;
  align-items: center; /* Centrado normal para desktop */
  justify-content: center;

  @media (max-width: 768px) {
    /* Comportamiento general para mobile - TODO se alinea al inicio */
    height: auto;
    min-height: 100dvh;
    align-items: flex-start;
    /* Compute padding so the section starts exactly after the fixed header bottom */
    padding-top: calc(var(--header-offset) + var(--header-height) + var(--section-top-guard));
    overflow-y: visible;
  }

  /* Padding universal basado en la altura del header */
  padding: var(--header-height) 2rem var(--header-height);
  box-sizing: border-box;
  overflow: visible; /* Permitir contenido visible */

  @media only screen and (max-width: 1024px) {
    padding: var(--header-height) 1rem var(--header-height);
  }

  /* Responsive para pantallas medianas-altas (ej: 1536x864) */
  @media only screen and (min-width: 1200px) and (max-height: 950px) {
    padding: calc(var(--header-height) * 0.7) 0.7rem calc(var(--header-height) * 0.7);
    font-size: 0.97em;
    .content-inner {
      max-width: 700px;
    }
  }
  @media only screen and (min-width: 1200px) and (max-height: 900px) {
    padding: calc(var(--header-height) * 0.6) 0.5rem calc(var(--header-height) * 0.6);
    font-size: 0.95em;
    .content-inner {
      max-width: 620px;
    }
  }
  @media only screen and (max-height: 950px) {
    height: 100dvh; /* Mantener altura fija */
    padding: calc(var(--header-height) * 1.5) 1rem calc(var(--header-height) * 1.5);
    align-items: center; /* Mantener centrado pero respetando padding */
    justify-content: center;
  }

  /* Para pantallas muy pequeñas de altura (iPhone SE landscape, etc) */
  @media only screen and (max-height: 500px) {
    padding: calc(var(--header-height) * 0.5) 1rem calc(var(--header-height) * 0.5);
    min-height: 100dvh;
  }

  @media only screen and (max-height: 400px) {
    padding: calc(var(--header-height) * 0.3) 0.5rem calc(var(--header-height) * 0.3);
    min-height: 100dvh;
  }

  /* Para pantallas pequeñas entre iPhone SE y mobile estándar */
  @media only screen and (max-width: 480px) {
    /* Compute padding for small phones to start after header */
    padding-top: calc(var(--header-offset) + var(--header-height) + var(--section-top-guard) * 0.5);
  }

  /* Para iPhone SE y pantallas ultra pequeñas de ancho */
  @media only screen and (max-width: 375px) {
    /* Compute padding for very small phones */
    padding-top: calc(var(--header-offset) + var(--header-height) + var(--section-top-guard) * 0.5);
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    padding-bottom: calc(var(--header-height) * 0.8);
    min-height: 100dvh; /* Mantener altura completa pero flexible */
    height: auto; /* Permitir altura dinámica */
    overflow: visible; /* Asegurar contenido visible */

    /* Forzar alineación vertical */
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
  }

  /* Prevent default top margins from first child elements (e.g. h1) from
     creating unexpected gaps below the fixed header */
  > *:first-child {
    margin-top: 0;
  }

  /* When ContentSection is used inside a real viewport wrapper (FullViewportSection)
     avoid duplicating 100dvh and reduce padding so inner content can fit inside the
     actual viewport element. The wrapper will set the real height. */
  &[data-full-viewport="true"] {
    height: auto !important;
    min-height: 0 !important;
    align-items: flex-start !important;
    padding-top: calc(var(--header-height) * 0.6) !important;
    padding-bottom: calc(var(--header-height) * 0.6) !important;
    overflow: hidden !important;

    @media only screen and (max-width: 768px) {
      padding-top: calc(var(--header-height) * 0.4) !important;
      padding-bottom: calc(var(--header-height) * 0.4) !important;
    }

    @media only screen and (max-width: 375px) {
      padding-top: calc(var(--header-height) * 0.25) !important;
      padding-bottom: calc(var(--header-height) * 0.25) !important;
    }
  }

  /* Responsive para pantallas medianas-altas (ej: 1536x864) */
  @media only screen and (min-width: 1200px) and (max-height: 950px) {
    padding: calc(var(--header-height) * 0.7) 0.7rem calc(var(--header-height) * 0.7);
    font-size: 0.97em;
    .content-inner {
      max-width: 700px;
    }
  }
  @media only screen and (min-width: 1200px) and (max-height: 900px) {
    padding: calc(var(--header-height) * 0.6) 0.5rem calc(var(--header-height) * 0.6);
    font-size: 0.95em;
    .content-inner {
      max-width: 620px;
    }
  }
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : direction === "right" ? "row-reverse" : "column"} !important;

  /* Asegurar que el contenido se adapte al espacio disponible */
  height: 100%;
  width: 100%;
  max-height: 100%; /* No exceder el contenedor padre */
  display: flex !important; /* Forzar flex para compresión */

  /* Deshabilitar propiedades de Ant Design Row que interfieren */
  && {
    flex-wrap: nowrap !important;
  }

  ${({ direction }: { direction: string }) =>
    direction === "center" &&
    `
      text-align: center;
      justify-content: center;
      align-items: center;
      min-height: 0; /* Permitir compresión */
    `}

  /* Para pantallas de altura limitada - forzar compresión */
  @media only screen and (max-height: 950px) {
    max-height: calc(100dvh - (var(--header-height) * 3)); /* Espacio disponible sin paddings */
    overflow: visible; /* Permitir que el contenido se vea */
  }

  /* Para iPhone SE y pantallas ultra pequeñas */
  @media only screen and (max-width: 375px) {
    flex-direction: column !important; /* Forzar layout vertical */
    gap: 1rem; /* Espaciado entre icono y contenido */
    padding: 0.5rem;

    /* Asegurar que los Col de Ant Design no interfieran */
    .ant-col {
      width: 100% !important;
      flex: none !important;
      max-width: 100% !important;
    }
  }

  /* Estilos para las columnas del icono y contenido */
  .content-block-icon {
    @media (max-width: 768px) {
      margin-bottom: 0.25rem !important;
    }

    @media only screen and (max-width: 480px) {
      margin-bottom: 0.125rem !important;
    }

    @media only screen and (max-width: 375px) {
      margin-bottom: 0 !important; /* Sin margin en iPhone SE */
    }
    /* Ensure icon halos are not clipped by parents */
    overflow: visible !important;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Estilos responsive para iconos PNG */
  .responsive-icon-img {
    width: min(150px, 20vh, 35vw);
    height: min(150px, 20vh, 35vw);
    object-fit: contain;

    @media (max-width: 768px) {
      width: min(120px, 16vh, 30vw);
      height: min(120px, 16vh, 30vw);
    }

    @media (max-width: 480px) {
      width: min(100px, 14vh, 28vw);
      height: min(100px, 14vh, 28vw);
    }

    @media only screen and (max-width: 375px) {
      width: min(80px, 12vh, 25vw);
      height: min(80px, 12vh, 25vw);
    }
  }
`;

/* ========================================
   WRAPPER DEL CONTENIDO
   Contiene: título principal (h6), contenido (p), botones/servicios
   
   NOTA IMPORTANTE: El título principal (h6) se estiliza 
   GLOBALMENTE en src/styles/styles.ts líneas 115-130
   No tiene estilos específicos aquí.
   ======================================== */
export const ContentWrapper = styled("div")<{ $centered?: boolean }>`
  position: relative;
  max-width: ${({ $centered }) => ($centered ? "min(95vw, 1200px)" : "var(--content-wrapper-max-width)")};

  /* Asegurar que el contenido se comprima dentro del área disponible */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden; /* Sin scroll visible */

  /* En mobile, alinear al inicio para evitar que se corte el contenido */
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-top: 1rem;
    height: auto;
    min-height: 100%;
  }

  /* Para iPhone SE - usar todo el ancho disponible */
  @media only screen and (max-width: 375px) {
    max-width: 100% !important;
    width: 100%;
    padding: 0 0.5rem;
    box-sizing: border-box;
  }

  ${(p) =>
    p.$centered &&
    `
    text-align: center;
    align-items: center;
  `}

  @media only screen and (max-width: 575px) {
    padding-top: 0; /* Eliminar padding extra ya que tenemos el del contenedor */
  }

  @media only screen and (max-width: 768px) {
    max-width: ${({ $centered }) => ($centered ? "95vw" : "var(--content-wrapper-max-width)")};
  }

  /* Para iPhone SE y pantallas ultra pequeñas */
  @media only screen and (max-width: 400px) {
    max-width: ${({ $centered }) => ($centered ? "98vw" : "var(--content-wrapper-max-width)")};
    padding: 0 0.5rem;
  }

  /* Para pantallas de altura limitada */
  @media only screen and (max-height: 950px) {
    min-height: 0; /* Permitir compresión total */
    max-height: calc(100dvh - (var(--header-height) * 3)); /* FORZAR altura máxima */
    gap: 0.75rem; /* Espaciado más compacto entre elementos */
    overflow-y: auto; /* Scroll si es necesario */
  }

  /* On small width viewports, cap height so CTA is reachable and allow internal scroll */
  @media only screen and (max-width: 480px) {
    max-height: calc(100dvh - var(--header-height) - 72px); /* leave room for CTA and some margin */
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  /* Para pantallas muy pequeñas de altura */
  @media only screen and (max-height: 500px) {
    justify-content: flex-start;
    padding-top: 0.5rem;
    gap: 0.5rem;
  }

  @media only screen and (max-height: 400px) {
    justify-content: flex-start;
    padding-top: 0.25rem;
    gap: 0.25rem;
    font-size: 0.9em;
  }
`;

/* ========================================
   SERVICE SECTIONS (cuando direction no es "right")
   ======================================== */
export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  gap: 2em; /* Proportional gap between services */
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
`;

/* ========================================
   PÁRRAFO PRINCIPAL DEL CONTENIDO
   Aparece debajo del título principal (h6)
   ======================================== */
export const Content = styled("p")`
  margin: 1.2em 0 1.6em 0; /* Proportional margins */
  font-size: var(--size-body);
  color: var(--color-text-primary);
`;

/* ========================================
   TÍTULOS PEQUEÑOS DE SERVICIOS
   Solo para elementos dentro de ServiceWrapper
   ======================================== */
export const MinTitle = styled("h6")`
  font-size: var(--size-min-title);
  line-height: 1.2; /* Proportional line height */
  padding: 0.4em 0; /* Proportional padding */
  text-transform: uppercase;
  color: var(--color-text-primary);
  font-family: var(--font-base);
`;

/* ========================================
   PÁRRAFOS PEQUEÑOS DE SERVICIOS
   Solo para elementos dentro de ServiceWrapper
   ======================================== */
export const MinPara = styled("p")`
  font-size: var(--size-min-para);
  color: var(--color-text-primary);
`;

/* ========================================
   WRAPPER DE BOTONES
   Solo aparece cuando direction === "right"
   Comportamiento:
   - Normal: space-between con max-width 80%
   - Centrado: center con max-width 100% y gap
   ======================================== */
export const ButtonWrapper = styled("div")<{ $centered?: boolean }>`
  display: flex;
  justify-content: ${({ $centered }) => ($centered ? "center" : "space-between")};
  max-width: 100%;
  gap: 1.5em; /* Proportional gap between buttons */

  @media screen and (min-width: 1024px) {
    max-width: ${({ $centered }) => ($centered ? "100%" : "85%")};
  }

  button:last-child {
    margin-left: 0; /* Remove fixed margin, using gap now */
  }

  ${({ $centered }) =>
    $centered &&
    `
    align-items: center;
  `}
`;

/* ========================================
   HALO ANIMADO PARA ÍCONOS PNG
   Efecto de pulsación con color secundario detrás del PNG
   ======================================== */
export const IconWithHalo = styled("div")`
  position: relative;
  display: inline-block;
  overflow: visible; /* Allow pseudo-elements to overflow for halo effect */
  z-index: 3;
  transform: none; /* ensure this element does not create a transformed stacking context */
  will-change: auto;

  /* Halo animado principal - más difuminado con color detail (azul) */
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* More conservative halo sizing to avoid large overflow on wide screens */
    width: clamp(120px, 14vh, 28vw);
    height: clamp(120px, 14vh, 28vw);
    border-radius: 50%;
    background: radial-gradient(
      ellipse 120% 80% at center,
      rgba(0, 53, 122, 0.06) 0%,
      rgba(0, 53, 122, 0.04) 20%,
      rgba(0, 53, 122, 0.02) 45%,
      rgba(0, 53, 122, 0.01) 70%,
      transparent 100%
    );
    filter: blur(8px);
    z-index: 1;
    animation: haloAnimation 4s ease-in-out infinite;
    pointer-events: none; /* ensure halos don't capture pointer events */
  }

  /* Segundo halo más amplio y sutil con color detail (azul) */
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: clamp(140px, 18vh, 34vw);
    height: clamp(140px, 18vh, 34vw);
    border-radius: 50%;
    background: radial-gradient(
      ellipse 140% 90% at center,
      rgba(0, 53, 122, 0.03) 0%,
      rgba(0, 53, 122, 0.015) 30%,
      rgba(0, 53, 122, 0.008) 60%,
      transparent 90%
    );
    filter: blur(12px);
    z-index: 0;
    animation: haloAnimation 4s ease-in-out infinite reverse;
    pointer-events: none;
  }

  /* Efecto de levitación para el PNG */
  img,
  svg {
    position: relative;
    z-index: 4; /* place icon above halos */
    /* disable levitation on small screens to prevent layout shift */
    animation: levitationFloat 3s ease-in-out infinite;
    transform-origin: center;
  }

  @keyframes haloAnimation {
    0%,
    100% {
      transform: translate(-50%, -50%) scale(0.92);
      opacity: 0.4;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.08);
      opacity: 0.8;
    }
  }

  /* Animación de levitación suave */
  @keyframes levitationFloat {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    33% {
      transform: translateY(-8px) rotate(1deg);
    }
    66% {
      transform: translateY(-4px) rotate(-0.5deg);
    }
  }
`;

/* Wrapper to allow per-section icon offsets and ensure overflow is visible */
export const SectionIconWrap = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible; /* Ensure halos are visible */
  z-index: 3;
  /* Allow sections to set a custom vertical offset, e.g. --section-icon-offset: 16px */
  margin-top: var(--section-icon-offset, 0px);
  position: relative; /* keep in normal flow */
  transform: none; /* avoid creating stacking context */
  will-change: auto;

  /* On small viewports, reset offsets so icon stays visually attached to content */
  @media only screen and (max-width: 480px) {
    margin-top: 0 !important;
  }

  /* Reduce halo size and disable animation on very small screens */
  @media only screen and (max-width: 375px) {
    &::before,
    &::after {
      display: none;
    }
    img,
    svg {
      animation: none !important;
    }
  }
`;

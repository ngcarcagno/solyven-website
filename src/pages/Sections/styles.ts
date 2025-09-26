import styled, { createGlobalStyle } from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  position: relative; /* stacking context for background dome */
  /* Allow the container to size based on content on small viewports to avoid forcing full height */
  height: auto;
  max-height: none;
  overflow: visible;

  /* El título h6 usa automáticamente los estilos globales - no necesita override */

  /* Padding superior en mobile - ahora mínimo ya que ContentSection maneja el espaciado */
  @media (max-width: 768px) {
    padding-top: 0.5rem; /* Mínimo ya que ContentSection tiene el padding principal */
  }

  @media (max-width: 480px) {
    padding-top: 0.25rem;
  }

  /* Para pantallas ultra pequeñas, ajustar el gap entre elementos */
  @media only screen and (max-width: 375px) {
    gap: 0.5rem;
    padding-top: 0; /* Sin padding adicional para iPhone SE */
  }

  /* Estilos para el contenedor del título */
  .about-title-container {
    text-align: center;
    margin-bottom: 1rem;

    /* Tighter title spacing on mobile so title and subtitle compress better */
    @media only screen and (max-width: 768px) {
      margin-bottom: 0.75rem;
      /* Responsive para pantallas medianas-altas (ej: 1536x864) */
      @media only screen and (min-width: 1200px) and (max-height: 950px) {
        font-size: 0.97em;
        .about-title {
          font-size: clamp(1.2rem, 2vw, 1.7rem);
        }
        .about-content-root .content-inner {
          max-width: 700px;
        }
      }
      @media only screen and (min-width: 1200px) and (max-height: 900px) {
        font-size: 0.95em;
        .about-title {
          font-size: clamp(1.1rem, 1.7vw, 1.5rem);
        }
        .about-content-root .content-inner {
          max-width: 620px;
        }
      }
    }

    @media only screen and (max-width: 480px) {
      margin-bottom: 0.5rem;
    }

    @media only screen and (max-width: 375px) {
      margin-bottom: 0.35rem;
    }
  }

  /* Reduce the h6 size for about titles on small viewports to try to keep it on one line */
  .about-title {
    font-family: var(--font-title);
    text-transform: uppercase;
    /* Keep title larger on desktop but allow it to shrink on narrow viewports */
    font-size: clamp(1.4rem, 2.4vw, 2.25rem);
    line-height: 1.04;
    margin: 0 0 clamp(0.35rem, 1.6vh, 0.9rem) 0;
    letter-spacing: 0.3px;
    -webkit-text-stroke: 0.55px rgba(0, 0, 0, 0.85);
  }

  /* Ensure the about-content-root's content-inner uses column flex so inner parts
     (title, intro, bullets, CTA) stack and bullets can expand to fill remaining space */
  .about-content-root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 0;

    .content-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      min-height: 0;
    }

    /* CTA wrapper styling target (used when CTA is placed inside about-content-root) */
    .about-cta-wrap {
      width: 100%;
      display: flex;
      justify-content: center;
      padding-top: 0.6rem;
      padding-bottom: 0; /* controlled by parent */
      flex: 0 0 auto;
    }
  }

  /* In some layouts About is rendered as a customContent inside ContentBlock. Ensure
     the CTA wrapper centers and occupies full width regardless of nesting. */
  .about-cta-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0.6rem;
    padding-bottom: 0;
    box-sizing: border-box;
  }

  /* When the Dome modal is open we hide the main content (scoped) to avoid visual clash and prevent interactions */
  &[data-dome-open="true"] .about-content-root {
    transition: opacity 260ms ease, transform 260ms ease;
    opacity: 0.06; /* mostly hidden but keep minimal context */
    transform: scale(0.995) translateY(4px);
    filter: blur(2px);
    user-select: none;
    -webkit-user-select: none;
    pointer-events: none; /* prevent clicks inside the content area */
    visibility: visible;
  }
  /* Ensure the about section icon offset is reset by default (override for 2k/tall monitors) */
  #about .content-block-icon {
    --section-icon-offset: 0px !important;
    align-self: center;
    margin-top: 0 !important;
  }
  /* Short-height desktop: scoped mobile-like behavior inside AboutContainer
     This keeps the icon visible and confines scrolling to the bullets area only. */
  @media screen and (min-width: 769px) and (max-height: 900px) {
    height: auto;
    .about-content-root {
      align-items: center;
      justify-content: flex-start;
      min-height: 0;
      overflow: visible;
    }
    .about-content-root .content-inner {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-height: calc(100dvh - var(--header-height) - 140px);
      min-height: auto;
      overflow: visible;
    }
    .about-bullets-list .scroll-list {
      max-height: clamp(120px, 28vh, 340px);
      min-height: 80px;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
    .content-block-icon {
      visibility: visible;
      opacity: 1;
      transform: none;
    }
  }

  /* When viewport height is limited, progressively shrink visual elements
     (titles, icon, bullets, CTA) similar to mobile behavior so content never
     gets cut off. This applies regardless of width for any short windows. */
  @media screen and (max-height: 900px) {
    /* Scale down titles and body text */
    .about-title {
      font-size: clamp(1.05rem, 2.2vw, 1.6rem) !important;
      margin-bottom: 0.4rem !important;
    }

    .about-text-container p {
      font-size: clamp(0.95rem, 1.6vw, 1.02rem) !important;
      line-height: 1.35 !important;
      margin-bottom: 0.35rem !important;
    }

    /* Reduce icon size so it remains visible */
    .content-block-icon,
    #about .content-block-icon {
      transform: none !important;
      opacity: 1 !important;
      visibility: visible !important;
    }
    .content-block-icon svg {
      width: clamp(42px, 6.5vw, 90px) !important;
      height: auto !important;
    }

    /* Bullets list: smaller items and bounded height */
    .about-bullets-list,
    .about-bullets-list .scroll-list {
      font-size: clamp(0.98rem, 1.6vw, 1.05rem) !important; /* made a bit larger, responsive */
      padding: 0.15rem 0.35rem !important;
    }
    .about-bullets-list .item,
    .about-bullets-list .bullet-item {
      padding: 0.34rem 0.48rem !important;
      margin-bottom: 0.22rem !important;
    }
    .about-bullets-list .scroll-list {
      max-height: clamp(110px, 26vh, 320px) !important;
      overflow-y: auto !important;
      -webkit-overflow-scrolling: touch !important;
    }

    /* CTA: smaller spacing and button size */
    .about-cta-wrap {
      padding-top: 0.4rem !important;
      padding-bottom: 0.4rem !important;
    }
    .about-cta-wrap button,
    .about-cta-wrap .ant-btn {
      padding: 0.6rem 1rem !important;
      font-size: 0.95rem !important;
    }

    /* Constrain the content-inner to avoid pushing content off screen */
    .about-content-root .content-inner {
      max-height: calc(100dvh - var(--header-height) - 110px) !important;
      padding-top: 8px !important;
      padding-bottom: 8px !important;
      overflow: visible !important;
    }
  }
`;

/* Per-section tweaks for the About ContentBlock icon (shield) to handle very tall viewports */
/* Removed AboutIconTweaks (was unused). Overrides for #about are applied directly in AboutContainer above. */

/* Full-bleed Dome background placed behind the About content */
export const DomeBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none; /* static decorative background */
  display: block;
  opacity: 0.035; /* very subtle */
  transform: none;
  filter: none;
  /* don't blend — keep it purely decorative behind content */
  mix-blend-mode: normal;

  .dome-inner {
    width: 100%;
    height: 100%;
    will-change: transform, opacity;
  }
`;

export const DomeGlobalStyles = createGlobalStyle`
  /* Hide the Shield/icon used by ContentBlock when the Dome is open */
  body.dome-open .content-block-icon {
    opacity: 0 !important;
    visibility: hidden !important;
    transform: translateY(-8px) scale(0.98);
    pointer-events: none !important;
  }
`;

export const MissionTitleOverride = createGlobalStyle`
  /* Force mission title to match AboutUs sizing and look on small viewports */
  #mission .services-title-container > h6.about-title {
    font-family: var(--font-title);
    font-size: clamp(1.4rem, 2.4vw, 2.25rem) !important;
    line-height: 1.04 !important;
    margin: 0 0 clamp(0.35rem, 1.6vh, 0.9rem) 0;
    letter-spacing: 0.3px;
    -webkit-text-stroke: 0.55px rgba(0, 0, 0, 0.85);
    text-shadow:
      0 0 10px rgba(247, 88, 0, 0.4),
      0 0 20px rgba(247, 88, 0, 0.2),
      0 0 30px rgba(247, 88, 0, 0.1),
      1px 1px 2px rgba(0, 0, 0, 0.6) !important;
    color: var(--color-text-primary) !important;
    text-transform: uppercase !important;
  }
`;

/* ServicesTitleOverride removed — per design we control the Services title via ServicesContainer rules */

/* ========================================
   SERVICES SECTION STYLES
   ======================================== */
export const ServicesContainer = styled.div`
  width: 100%;
  padding: 1rem; /* Padding para compensar hover effects */
  margin: 0;
  display: flex;
  flex-direction: column;
  /* Let the section size naturally based on its content. Forcing 100% height
    combined with parent centering caused titles to be vertically centered and
    sometimes pushed out of view on certain desktop aspect ratios (e.g. 1536x864). */
  height: auto;
  max-height: none;
  overflow: visible;

  @media (max-width: 768px) {
    padding: 0.75rem 0.5rem 0 0.5rem; /* Sin padding bottom, con top pequeño */
    height: auto;
    min-height: auto;

    /* Forzar que comience desde arriba */
    justify-content: flex-start;
    align-items: stretch;
  }

  /* Force top-alignment on larger viewports so content (title + grid) starts
     right below the header instead of being vertically centered. This prevents
     the empty gap observed on some desktop resolutions. */
  align-items: stretch;
  justify-content: flex-start;

  /* Ensure the title stays above decorative/translated elements */
  .services-title-container {
    position: relative;
    z-index: 8;
    margin-top: 0;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.25rem 0 0.25rem;
  }

  @media (max-width: 375px) {
    padding: 0.375rem 0.125rem 0 0.125rem;
  }

  /* Estilos para el contenedor del título */
  .services-title-container {
    text-align: center;
    margin-bottom: 1rem;

    @media only screen and (max-width: 768px) {
      margin-bottom: 0.75rem;
    }

    @media only screen and (max-width: 480px) {
      margin-bottom: 0.5rem;
    }

    @media only screen and (max-width: 375px) {
      margin-bottom: 0.35rem;
    }

    /* Strongly-specific nested rule to match AboutUs mobile sizing. Only
       override the properties required, using !important where the global
       stylesheet applies !important in small viewports. */
    > h6.about-title {
      font-family: var(--font-title);
      font-size: clamp(1.4rem, 2.4vw, 2.25rem) !important;
      line-height: 1.04 !important;
      margin: 0 0 clamp(0.35rem, 1.6vh, 0.9rem) 0;
      letter-spacing: 0.3px;
      -webkit-text-stroke: 0.55px rgba(0, 0, 0, 0.85);
      /* Restore glow to match global headings */
      text-shadow:
        0 0 10px rgba(247, 88, 0, 0.4),
        0 0 20px rgba(247, 88, 0, 0.2),
        0 0 30px rgba(247, 88, 0, 0.1),
        1px 1px 2px rgba(0, 0, 0, 0.6);
      color: var(--color-text-primary);
    }

    /* (reverted explicit override) */
  }
  /* Responsive para pantallas medianas-altas (ej: 1536x864) */
  @media only screen and (min-width: 1200px) and (max-height: 950px) {
    font-size: 0.97em;
    .services-title-container h6 {
      font-size: clamp(1.2rem, 2vw, 1.7rem);
    }
    .content-inner {
      max-width: 700px;
    }
  }
  @media only screen and (min-width: 1200px) and (max-height: 900px) {
    font-size: 0.95em;
    .services-title-container h6 {
      font-size: clamp(1.1rem, 1.7vw, 1.5rem);
    }
    .content-inner {
      max-width: 620px;
    }
  }

  /* Estilos para la descripción */
  .services-description {
    text-align: center;
    margin-bottom: 2rem;

    .subtitle {
      font-family: var(--font-subtitle);
      font-size: var(--size-body);
      color: var(--color-text-primary);
      line-height: 1.6;
      margin: 0 0 0.5rem 0;
    }

    .description {
      font-family: var(--font-subtitle);
      font-size: calc(var(--size-body) * 0.9);
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.5;
      margin: 0;
    }

    @media (max-width: 768px) {
      margin-bottom: 1.25rem;

      .subtitle {
        font-size: 1.1rem; /* Más grande que var(--size-min-para) */
        line-height: 1.4;
      }

      .description {
        font-size: 0.95rem; /* Más legible en mobile */
        line-height: 1.4;
        color: rgba(255, 255, 255, 0.85); /* Mejor contraste */
      }
    }

    @media (max-width: 480px) {
      .subtitle {
        font-size: 1rem;
      }

      .description {
        font-size: 0.9rem;
      }
    }

    @media (max-width: 375px) {
      .subtitle {
        font-size: 0.95rem;
      }

      .description {
        font-size: 0.85rem;
      }
    }
  }

  /* Generic section description to reuse subtitle/description styles across different sections */
  .section-description {
    text-align: center;
    margin-bottom: 2rem;

    .subtitle {
      font-family: var(--font-subtitle);
      font-size: var(--size-body);
      color: var(--color-text-primary);
      line-height: 1.6;
      margin: 0 0 0.5rem 0;
    }

    .description {
      font-family: var(--font-subtitle);
      font-size: calc(var(--size-body) * 0.9);
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.5;
      margin: 0;
    }

    @media (max-width: 768px) {
      margin-bottom: 1.25rem;

      .subtitle {
        font-size: 1.1rem;
        line-height: 1.4;
      }

      .description {
        font-size: 0.95rem;
        line-height: 1.4;
        color: rgba(255, 255, 255, 0.85);
      }
    }

    @media (max-width: 480px) {
      .subtitle { font-size: 1rem; }
      .description { font-size: 0.9rem; }
    }

    @media (max-width: 375px) {
      .subtitle { font-size: 0.95rem; }
      .description { font-size: 0.85rem; }
    }
  }
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(clamp(220px, 24vw, 320px), 1fr));
  gap: clamp(1rem, 2vw, 2rem);
  width: 100%;
  max-width: clamp(600px, 60vw, 900px);
  margin: 0 auto;

  /* Si el alto es bajo, compactar el grid y los cards */
  @media (max-height: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: clamp(0.5rem, 1vw, 1.2rem);
    max-width: 700px;
    .service-item {
      max-width: 280px !important;
    }
  }
  @media (max-height: 800px) {
    grid-template-columns: 1fr;
    gap: clamp(0.4rem, 0.8vw, 1rem);
    max-width: 420px;
    .service-item {
      max-width: 220px !important;
    }
  }

  /* Pirámide invertida: 2 arriba, 1 abajo centrada */
  .service-item:nth-child(3) {
    grid-column: 1 / -1;
    justify-self: center;
    max-width: 500px;
    width: 100%;
  }

  @media (max-width: 768px) {
    /* On tablet and below, switch to single column but allow centered narrower cards */
    grid-template-columns: 1fr;
    gap: clamp(1rem, 2vw, 2rem);
    grid-template-columns: repeat(2, minmax(clamp(220px, 24vw, 320px), 1fr));
    grid-template-rows: auto auto;
    max-width: clamp(600px, 60vw, 900px);

    .service-item {
      width: 100%;
      max-width: 320px; /* allow narrower than full width */
      justify-self: center;
    }

    /* Remove special spanning behavior so all cards behave same */
    .service-item:nth-child(3) {
      grid-column: auto;
      max-width: 320px;
    }
  }

  @media (max-width: 480px) {
    /* Stack as narrow centered blocks to save horizontal space */
    grid-template-columns: 1fr;
    gap: 0.75rem;
    max-width: 360px;
    padding: 0 0.25rem;
    justify-items: center;

    .service-item {
      width: 100%;
      max-width: 320px !important; /* expand to match the larger last card */
      justify-self: center;
      padding: 0; /* let inner ServiceCard control padding */
    }

    /* Ensure nth-child doesn't deviate */
    .service-item:nth-child(1),
    .service-item:nth-child(2),
    .service-item:nth-child(3) {
      max-width: 320px !important;
      width: 100% !important;
      justify-self: center !important;
    }
  }

  @media (max-width: 375px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    max-width: 320px;
    padding: 0;
    justify-items: center;

    .service-item {
      width: 100%;
      max-width: 300px !important; /* make first two match the larger last card */
      justify-self: center;
      padding: 0;
    }

    .service-item:nth-child(1),
    .service-item:nth-child(2),
    .service-item:nth-child(3) {
      max-width: 300px !important;
      width: 100% !important;
      justify-self: center !important;
    }
  }
`;

export const ServiceCard = styled.div`
  padding: clamp(0.5rem, 1vw, 1rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: clamp(90px, 12vw, 180px);
  max-height: clamp(120px, 18vw, 220px);
  width: 100%;
  background: transparent;
  border: none;
  border-radius: 1.5rem;
  position: relative;
  gap: clamp(0.3rem, 0.8vw, 0.8rem);
  justify-content: center;

  @media (max-height: 900px) {
    min-height: 90px;
    max-height: 140px;
    padding: 0.5rem;
    gap: 0.3rem;
  }
  @media (max-height: 800px) {
    min-height: 70px;
    max-height: 110px;
    padding: 0.3rem;
    gap: 0.2rem;
  }
`;

export const ServiceIcon = styled.div`
  color: var(--color-secondary);
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: clamp(22px, 3vw, 36px);
    height: clamp(22px, 3vw, 36px);
    stroke-width: 2;
    filter: drop-shadow(0 2px 6px rgba(247, 88, 0, 0.3));
  }

  @media (max-width: 768px) {
    svg {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 480px) {
    svg {
      width: 26px;
      height: 26px;
    }
  }

  @media (max-width: 375px) {
    svg {
      width: 32px;
      height: 32px;
    }
  }
`;

export const ServiceTitle = styled.h3`
  font-family: var(--font-title);
  /* Fluid title: conservative sizing to keep card titles smaller than section title */
  font-size: clamp(0.75rem, 1vw, 1.1rem);
  color: var(--color-text-primary);
  margin: 0;
  text-transform: uppercase;
  line-height: 1.2;
  flex-shrink: 0;
  letter-spacing: 0.01em;

  /* Additional tight caps for very small devices — clamp above handles most sizes but we'll keep a safety cap */
  @media (max-width: 420px) {
    /* Force tighter size on narrow phones (e.g. 360x800) */
    font-size: clamp(0.72rem, calc(0.62rem + 1.1vw), 0.9rem) !important;
    line-height: 1.05;
  }

  /* Extra aggressive cap for very small narrow screens (older phones / 360 width) */
  @media (max-width: 360px) {
    font-size: 0.78rem !important;
    line-height: 1.02;
  }
`;

export const ServiceDescription = styled.p`
  font-family: var(--font-subtitle);
  font-size: clamp(0.8rem, 0.9vw, 0.95rem);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.5;
  margin: 0;
  flex: 1;
  display: block;
  text-align: center;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    line-height: 1.25;
  }

  @media (max-width: 375px) {
    font-size: 0.7rem;
    line-height: 1.2;
  }
`;
export const AboutTextContainer = styled.div`
  margin-bottom: clamp(0.45rem, 1.6vh, 1rem);
  flex-shrink: 0;

  p {
    font-family: var(--font-subtitle);
    font-size: var(--size-body);
    color: var(--color-text-primary);
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 0.8rem;

    p {
      font-size: 1.1rem; /* Más grande que var(--size-min-para) - igual que Services */
      line-height: 1.4;
      color: rgba(255, 255, 255, 0.85); /* Mejor contraste - igual que Services */
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 375px) {
    p {
      font-size: 0.95rem;
    }
  }
`;

export const BulletsContainer = styled.div`
  /* Sin fondo glassy - contenedor limpio */
  flex: 1;
  /* Ensure flex children can shrink on small viewports */
  min-height: 0;
  padding: 0.5rem 0;

  /* Let the bullets area size naturally but prevent it from growing beyond the viewport
     on small screens so the CTA remains reachable. Use viewport-relative max-heights. */
  height: auto;
  max-height: none;
  overflow: visible;

  /* Responsive padding para mobile */
  @media (max-width: 768px) {
    padding: clamp(0.45rem, 1.6vh, 0.9rem) 1rem; /* Un poco más de padding en mobile */
  }

  @media (max-width: 480px) {
    padding: clamp(0.35rem, 1.2vh, 0.6rem) 0.5rem; /* Menos padding en pantallas muy pequeñas */
  }

  /* Estilos personalizados para AnimatedList adaptados a nuestra web */
  .about-bullets-list {
    width: 100% !important;
    max-width: 600px !important; /* Limitar ancho principal */
    margin: 0 auto !important; /* Centrar */
    padding: clamp(0.6rem, 2.2vh, 1.25rem) clamp(0.5rem, 1.6vw, 0.9rem) clamp(0.5rem, 1.6vh, 0.9rem)
      clamp(0.5rem, 1.6vw, 0.9rem);
    display: flex;
    flex-direction: column;
    height: 100%;

    /* On small viewports limit the bullets scroll area to the viewport minus other content
       (title + intro + CTA). Use var(--vh) when available so mobile chrome is handled. */
    .scroll-list-container {
      width: 100% !important;
      max-width: 100% !important; /* Usar el ancho del contenedor padre */
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .scroll-list {
      /* Fill the available vertical space inside the bullets list and scroll internally */
      flex: 1 1 auto;
      height: 100%;
      /* Respect the JS-computed available bullets height when present */
      max-height: var(--about-bullets-height, none);
      overflow-y: auto;
      padding: clamp(0.25rem, 1vh, 0.5rem) 0.15rem; /* reduced vertical padding to save space */
      overflow-x: visible; /* Permitir que los efectos de hover se vean */

      /* Scrollbar personalizado */
      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 2px;
      }
    }

    /* Reduce margin introduced by AnimatedItem wrapper (inline style) and ensure last item has no extra bottom gap */
    .scroll-list > div[data-index] {
      margin-bottom: clamp(0.25rem, 1vh, 0.5rem) !important;
    }

    .scroll-list > div[data-index]:last-child,
    .about-bullets-list .item:last-child {
      margin-bottom: 0 !important;
      padding-bottom: 0 !important;
    }

    /* .scroll-list-container handled above */

    .item {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 0.75rem;
      padding: 1rem 1.25rem;
      margin-bottom: 0.75rem;
      backdrop-filter: blur(10px);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08));
        border-color: rgba(255, 130, 92, 0.3);
        transform: translateY(-2px);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      }

      &.selected {
        background: linear-gradient(135deg, rgba(255, 130, 92, 0.2), rgba(255, 130, 92, 0.1));
        border-color: rgba(255, 130, 92, 0.4);
        transform: translateY(-1px);
      }
    }

    .item-text {
      color: var(--color-text-primary);
      font-family: var(--font-base);
      font-size: var(--size-body);
      line-height: 1.5;
      margin: 0;
      font-weight: 400;
    }
  }

  /* Ensure the CTA sits directly under the bullets list without extra gap */
  .about-cta-wrap {
    padding-top: 0.15rem;
    margin-top: 0;
  }

  @media (max-width: 768px) {
    /* Estilos responsive para AnimatedList */
    .about-bullets-list {
      .item {
        padding: 0.7rem 0.9rem;
        margin-bottom: 0.45rem;
      }

      .item-text {
        font-size: var(--size-min-para);
        line-height: 1.4;
      }
    }

    /* Estilos responsive para ScrollStack - avoid fixed heights, allow shrink */
    .about-scroll-stack {
      height: auto;

      .scroll-stack-card.bullet-card {
        padding: 0.65rem 0.85rem; /* Compacto en mobile */
        margin-bottom: 0.45rem;

        &::after {
          top: 0.35rem;
          right: 0.45rem;
          font-size: 0.65rem;
        }

        p {
          font-size: var(--size-min-para);
          line-height: 1.35;
          padding-right: 0.9rem;
        }
      }
    }
  }
  @media (max-width: 480px) {
    padding: 0.5rem 0.4rem 0.75rem 0.4rem; /* give a little bottom padding so CTA isn't flush to edge */

    .about-bullets-list {
      padding: 0.9rem 0.5rem 0.5rem 0.5rem;

      /* Tighten the viewport cap on very small screens (iPhone 375x667) */
      .scroll-list {
        max-height: calc(100dvh - 200px);
      }
    }
  }

  /* Mobile-specific: make bullets container expand and scroll internally so the section fits
     the viewport and scroll-snap can still snap the whole section into view. */
  @media only screen and (max-width: 768px) {
    .about-content-root .content-inner {
      /* Use full available height inside the section */
      /* Prefer var(--vh) when set to account for mobile chrome UI */
      height: calc(var(--vh, 1vh) * 100 - var(--header-height));
    }

    /* Bullets should take remaining space and be scrollable */
    .about-bullets-list,
    .about-content-root .bullet-area,
    ${"" /* target BulletsContainer */} {
      flex: 1 1 auto;
      min-height: 0;
    }

    /* Ensure the BulletsContainer itself allows internal scroll */
    .about-bullets-list .scroll-list,
    .about-bullets-list .scroll-list-container {
      max-height: calc(var(--vh, 1vh) * 100 - var(--header-height) - clamp(120px, 18vh, 180px));
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
  }

  @media only screen and (max-width: 375px) {
    padding: 0.35rem 0.25rem 0.9rem 0.25rem;

    .about-bullets-list {
      padding: 0.6rem 0.4rem 0.4rem 0.4rem;
      .scroll-list {
        /* further reduce to ensure CTA remains visible on very short viewports */
        max-height: calc(var(--vh, 1vh) * 100 - clamp(140px, 22vh, 200px));
      }
    }
  }

  /* Very short mobile viewports — collapse non-essential gaps so content fits tightly */
  @media (max-height: 700px) and (max-width: 420px) {
    .about-content-root .content-inner {
      gap: 4px;
      padding-bottom: 2px;
    }

    .about-title-container {
      margin-bottom: 0.1rem !important;
    }

    .about-title {
      margin-bottom: 0.08rem !important;
      font-size: clamp(1.2rem, 3vw, 1.9rem);
      line-height: 1.02;
    }

    /* Reduce intro spacing */
    .about-content-root p,
    .about-text-container,
    .AboutTextContainer {
      margin-bottom: 0.08rem !important;
      padding-bottom: 0 !important;
    }

    /* Tighten bullets container padding and item spacing */
    .about-bullets-list {
      padding: 0.2rem 0.35rem !important;
    }

    .about-bullets-list .item {
      margin-bottom: 0.35rem !important;
      padding: 0.5rem 0.6rem !important;
    }

    .about-bullets-list .scroll-list {
      max-height: calc(var(--vh, 1vh) * 100 - clamp(110px, 18vh, 150px)) !important;
    }

    .about-cta-wrap {
      padding-top: 0.2rem !important;
      padding-bottom: 0.18rem !important;
    }
  }

  /* Also apply the same compacting rules for any viewport that is short regardless of width
     (useful for small-height desktop windows or kiosks). This duplicates the block above but
     without a max-width so it applies when only height is constrained. */
  @media (max-height: 700px) {
    .about-content-root .content-inner {
      gap: 4px;
      padding-bottom: 2px;
    }

    .about-title-container {
      margin-bottom: 0.1rem !important;
    }

    .about-title {
      margin-bottom: 0.08rem !important;
      font-size: clamp(1.2rem, 3vw, 1.9rem);
      line-height: 1.02;
    }

    .about-content-root p,
    .about-text-container,
    .AboutTextContainer {
      margin-bottom: 0.08rem !important;
      padding-bottom: 0 !important;
    }

    .about-bullets-list {
      padding: 0.2rem 0.35rem !important;
    }

    .about-bullets-list .item {
      margin-bottom: 0.35rem !important;
      padding: 0.5rem 0.6rem !important;
    }

    .about-bullets-list .scroll-list {
      max-height: calc(var(--vh, 1vh) * 100 - clamp(110px, 18vh, 150px)) !important;
    }

    .about-cta-wrap {
      padding-top: 0.2rem !important;
      padding-bottom: 0.18rem !important;
    }
  }

  /* Compactar y eliminar gaps en pantallas de poco alto */
  @media (max-height: 900px) {
    .about-content-root {
      .content-inner {
        gap: 0 !important;
        padding-bottom: 0 !important;
      }
      .about-title-container {
        margin-bottom: 0.1rem !important;
      }
      .about-title {
        margin-bottom: 0.08rem !important;
      }
      .about-text-container,
      .AboutTextContainer {
        margin-bottom: 0.08rem !important;
        padding-bottom: 0 !important;
      }
      .about-bullets-list {
        padding: 0.1rem 0.2rem !important;
      }
      .about-bullets-list .item {
        margin-bottom: 0.12rem !important;
        padding: 0.4rem 0.5rem !important;
      }
      .about-bullets-list .scroll-list {
        max-height: calc(var(--vh, 1vh) * 100 - clamp(90px, 14vh, 120px)) !important;
      }
      .about-cta-wrap {
        padding-top: 0.08rem !important;
        padding-bottom: 0.08rem !important;
        margin-top: 0 !important;
      }
    }
  }
`;

/* Thumbnail styles for DomeGallery preview used by AboutUs */
export const DomeThumbnail = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  .preview-wrap {
    width: 220px;
    height: 180px;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    background: linear-gradient(180deg, #0b0b0b 0%, #141414 100%);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.55);
    border: 1px solid rgba(255, 255, 255, 0.04);
  }

  .preview-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.45));
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none; /* let the preview be non-interactive */
  }

  .play-button {
    width: 44px;
    height: 44px;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 480px) {
    .preview-wrap {
      width: 160px;
      height: 120px;
    }
  }
`;

export const BulletItem = styled.div`
  font-family: var(--font-base);
  font-size: var(--size-body);
  color: var(--color-text-primary);
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  padding-left: 1.5rem;

  &:last-child {
    border-bottom: none;
  }

  &:before {
    content: "•";
    color: var(--color-secondary);
    font-weight: bold;
    position: absolute;
    left: 0;
    top: 0.75rem;
  }

  @media (max-width: 768px) {
    font-size: var(--size-min-para);
    padding: 0.5rem 0;
    padding-left: 1.2rem;

    &:before {
      top: 0.5rem;
    }
  }
`;

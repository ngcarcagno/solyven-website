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
    margin-bottom: 1.25rem;

    @media only screen and (max-width: 375px) {
      margin-bottom: 0.5rem;
    }
  }

  /* Ensure the about-content-root's content-inner uses column flex so inner parts
     (title, intro, bullets, CTA) stack and bullets can expand to fill remaining space */
  .about-content-root {
    .content-inner {
      display: flex;
      flex-direction: column;
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

/* ========================================
   SERVICES SECTION STYLES
   ======================================== */
export const ServicesContainer = styled.div`
  width: 100%;
  padding: 1rem; /* Padding para compensar hover effects */
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  overflow: visible;

  @media (max-width: 768px) {
    padding: 0.75rem 0.5rem 0 0.5rem; /* Sin padding bottom, con top pequeño */
    height: auto;
    min-height: auto;

    /* Forzar que comience desde arriba */
    justify-content: flex-start;
    align-items: stretch;
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
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      margin-top: 0;
      margin-bottom: 1rem;
      padding-top: 0;
    }

    @media only screen and (max-width: 375px) {
      margin-bottom: 0.75rem;
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
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  /* Pirámide invertida: 2 arriba, 1 abajo centrada */
  .service-item:nth-child(3) {
    grid-column: 1 / -1;
    justify-self: center;
    max-width: 500px;
    width: 100%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    max-width: 350px;
    padding: 0 0.5rem; /* Padding horizontal para evitar cortes */

    /* En mobile todas las cards ocupan todo el ancho */
    .service-item:nth-child(3) {
      grid-column: 1;
      max-width: none;
    }
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
    max-width: 320px;
    padding: 0 0.25rem;
  }

  @media (max-width: 375px) {
    gap: 0.5rem;
    max-width: 300px;
    padding: 0;
  } /* Estilos para SpotlightCard */
  .service-spotlight-card {
    height: 100%;
    border-radius: 0.75rem;
    overflow: visible; /* Permitir que el hover se vea completo */
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    /* Removemos el transform de aquí para evitar conflictos con SpotlightCard CSS */
  }
`;

export const ServiceCard = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 220px;
  width: 100%;
  background: transparent;
  border: none;
  border-radius: 1.5rem;
  position: relative;
  gap: 1rem;

  /* Cards más cuadradas/rectangulares como la referencia */
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 140px;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    min-height: 120px;
    gap: 0.375rem;
  }

  @media (max-width: 375px) {
    padding: 0.625rem;
    min-height: 110px;
    gap: 0.25rem;
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
    width: 36px;
    height: 36px;
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
  font-size: 1.1rem;
  color: var(--color-text-primary);
  margin: 0;
  text-transform: uppercase;
  line-height: 1.2;
  flex-shrink: 0;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.1;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.1;
  }

  @media (max-width: 375px) {
    font-size: 0.8rem;
  }
`;

export const ServiceDescription = styled.p`
  font-family: var(--font-subtitle);
  font-size: 0.9rem;
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
  margin-bottom: 1rem;
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
    padding: 0.5rem 1rem; /* Un poco más de padding en mobile */
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.5rem; /* Menos padding en pantallas muy pequeñas */
  }

  /* Estilos personalizados para AnimatedList adaptados a nuestra web */
  .about-bullets-list {
    width: 100% !important;
    max-width: 600px !important; /* Limitar ancho principal */
    margin: 0 auto !important; /* Centrar */
    padding: 1.25rem 0.75rem 0.75rem 0.75rem; /* Compact padding to save vertical space */

    /* On small viewports limit the bullets scroll area to the viewport minus other content
       (title + intro + CTA). This keeps the CTA visible without extra scrolling. */
    .scroll-list {
      /* Allow the internal list to scroll but cap its height relative to viewport */
      max-height: calc(100vh - 220px); /* 220px is an approximation for title + intro + CTA on small screens */
      overflow-y: auto;
    }

    .scroll-list-container {
      width: 100% !important;
      max-width: 100% !important; /* Usar el ancho del contenedor padre */
    }

    .scroll-list {
      max-height: 100%;
      padding: 0.5rem; /* Padding interno para compensar hover effects */
      overflow-y: auto;
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
        max-height: calc(100vh - 200px);
      }
    }
  }

  /* Mobile-specific: make bullets container expand and scroll internally so the section fits
     the viewport and scroll-snap can still snap the whole section into view. */
  @media only screen and (max-width: 768px) {
    .about-content-root .content-inner {
      /* Use full available height inside the section */
      height: calc(100vh - var(--header-height));
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
      max-height: calc(100vh - var(--header-height) - 140px);
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
        max-height: calc(100vh - 180px);
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

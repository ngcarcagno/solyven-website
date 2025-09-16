import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  overflow: visible;

  /* El título h6 usa automáticamente los estilos globales - no necesita override */

  /* Para pantallas ultra pequeñas, ajustar el gap entre elementos */
  @media only screen and (max-width: 375px) {
    gap: 0.5rem;
  }

  /* Estilos para el contenedor del título */
  .about-title-container {
    text-align: center;
    margin-bottom: 1.5rem;

    @media only screen and (max-width: 375px) {
      margin-bottom: 0.75rem;
    }
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

  /* Estilos para el contenedor del título */
  .services-title-container {
    text-align: center;
    margin-bottom: 1.5rem;

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
      margin-bottom: 1.5rem;

      .subtitle {
        font-size: var(--size-min-para);
      }

      .description {
        font-size: calc(var(--size-min-para) * 0.9);
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
    gap: 1.5rem;
    max-width: 500px;

    /* En mobile todas las cards ocupan todo el ancho */
    .service-item:nth-child(3) {
      grid-column: 1;
      max-width: none;
    }
  }

  @media (max-width: 480px) {
    gap: 1.25rem;
    max-width: 450px;
  }

  /* Estilos para SpotlightCard */
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
    padding: 1.5rem;
    height: 180px;
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    height: 160px;
    gap: 0.5rem;
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
      width: 32px;
      height: 32px;
    }
  }

  @media (max-width: 480px) {
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
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
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
    font-size: 0.85rem;
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 1.3;
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
      font-size: var(--size-min-para);
    }
  }
`;

export const BulletsContainer = styled.div`
  /* Sin fondo glassy - contenedor limpio */
  flex: 1;
  min-height: 0;
  padding: 0.5rem 0;

  /* Adaptarse al espacio disponible del ContentBlock */
  height: 100%;
  max-height: 100%;
  overflow: hidden;

  /* Responsive padding para mobile */
  @media (max-width: 768px) {
    padding: 0.5rem 1rem; /* Un poco más de padding en mobile */
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.5rem; /* Menos padding en pantallas muy pequeñas */
  }

  /* Estilos personalizados para AnimatedList adaptados a nuestra web */
  .about-bullets-list {
    height: 100%;
    width: 100% !important;
    max-width: 600px !important; /* Limitar ancho principal */
    margin: 0 auto !important; /* Centrar */
    padding: 2rem 1rem 1rem 1rem; /* Top, right, bottom, left - compensar hover effects */

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
        padding: 0.8rem 1rem;
        margin-bottom: 0.5rem;
      }

      .item-text {
        font-size: var(--size-min-para);
        line-height: 1.4;
      }
    }

    /* Estilos responsive para ScrollStack */
    .about-scroll-stack {
      height: 400px; /* Área visible también en mobile */

      .scroll-stack-card.bullet-card {
        padding: 0.75rem 1rem; /* Compacto en mobile */
        margin-bottom: 0.6rem;

        &::after {
          top: 0.4rem;
          right: 0.6rem;
          font-size: 0.65rem;
        }

        p {
          font-size: var(--size-min-para);
          line-height: 1.4;
          padding-right: 1.2rem;
        }
      }
    }
  }
  @media (max-width: 480px) {
    padding: 0.8rem;
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

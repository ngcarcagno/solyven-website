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
    width: 100%;

    .scroll-list-container {
      width: 100%;
    }

    .scroll-list {
      max-height: 100%;
      padding: 0;
      overflow-y: auto;

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

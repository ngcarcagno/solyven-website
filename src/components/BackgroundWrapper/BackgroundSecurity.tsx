import React from "react";
import styled from "styled-components";

/* ========================================
   BACKGROUND SECURITY - INTRO SECTION
   Fondo artístico con imagen de sala de control
   ======================================== */
const SecurityWrapper = styled("div")`
  position: relative;
  min-height: 100vh;
  background: 
    /* Gradient overlay artístico */ linear-gradient(
      135deg,
      rgba(95, 8, 7, 0.85) 0%,
      rgba(0, 0, 0, 0.75) 30%,
      rgba(247, 88, 0, 0.4) 70%,
      rgba(0, 53, 122, 0.6) 100%
    ),
    /* Imagen de fondo */ url("${process.env.PUBLIC_URL}/img/png/HeroBackground.png");

  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;

  /* Efecto parallax sutil */
  background-attachment: fixed;

  /* Glassmorphism overlay para mejor legibilidad */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.6) 70%,
      rgba(0, 0, 0, 0.8) 100%
    );
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    z-index: 1;
  }

  /* Patrón de puntos sutil para textura */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.05) 1px, transparent 0);
    background-size: 40px 40px;
    z-index: 2;
  }

  /* El contenido debe estar por encima de los overlays */
  > * {
    position: relative;
    z-index: 3;
  }

  /* Mejorar contraste del texto específicamente para esta sección */
  h6 {
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  }

  p {
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
    padding: 1rem 1.5rem;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    margin: 2rem auto;
    max-width: 600px;
  }

  @media only screen and (max-width: 768px) {
    background-attachment: scroll; /* Mejor performance en mobile */
  }
`;

/* ========================================
   COMPONENTE WRAPPER
   ======================================== */
interface BackgroundSecurityProps {
  children: React.ReactNode;
}

export const BackgroundSecurity: React.FC<BackgroundSecurityProps> = ({ children }) => {
  return <SecurityWrapper>{children}</SecurityWrapper>;
};

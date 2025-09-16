import { Row } from "antd";
import styled from "styled-components";

export const ScrollSnapContainer = styled("div")`
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  /* Oculta scrollbars en algunos navegadores */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;

export const ContentSection = styled("section")`
  position: relative;
  min-height: 100vh; /* Altura completa para que funcione el padding */
  height: 100vh; /* Altura fija para controlar el desbordamiento */
  scroll-snap-align: start;
  display: flex;
  align-items: center; /* Volver al centrado normal */
  justify-content: center;

  /* Padding universal basado en la altura del header */
  padding: var(--header-height) 2rem var(--header-height);
  box-sizing: border-box;
  overflow: visible; /* Permitir contenido visible */

  @media only screen and (max-width: 1024px) {
    padding: var(--header-height) 1rem var(--header-height);
  }

  @media only screen and (max-height: 950px) {
    height: 100vh; /* Mantener altura fija */
    padding: calc(var(--header-height) * 1.5) 1rem calc(var(--header-height) * 1.5);
    align-items: center; /* Mantener centrado pero respetando padding */
    justify-content: center;
  }

  /* Para pantallas muy pequeñas de altura (iPhone SE landscape, etc) */
  @media only screen and (max-height: 500px) {
    padding: calc(var(--header-height) * 0.5) 1rem calc(var(--header-height) * 0.5);
    min-height: 100vh;
  }

  @media only screen and (max-height: 400px) {
    padding: calc(var(--header-height) * 0.3) 0.5rem calc(var(--header-height) * 0.3);
    min-height: 100vh;
  }

  /* Para iPhone SE y pantallas ultra pequeñas de ancho */
  @media only screen and (max-width: 375px) {
    padding: calc(var(--header-height) * 0.8) 0.25rem calc(var(--header-height) * 0.8);
    min-height: 100vh; /* Mantener altura completa pero flexible */
    height: auto; /* Permitir altura dinámica */
    overflow: visible; /* Asegurar contenido visible */
    
    /* Forzar alineación vertical */
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
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
    max-height: calc(100vh - (var(--header-height) * 3)); /* Espacio disponible sin paddings */
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
    @media only screen and (max-width: 375px) {
      margin-bottom: 0.5rem !important;
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
  max-width: ${({ $centered }) => ($centered ? "min(85vw, 570px)" : "var(--content-wrapper-max-width)")};

  /* Asegurar que el contenido se comprima dentro del área disponible */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto; /* Scroll si el contenido es muy alto */

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
    max-height: calc(100vh - (var(--header-height) * 3)); /* FORZAR altura máxima */
    gap: 0.75rem; /* Espaciado más compacto entre elementos */
    overflow-y: auto; /* Scroll si es necesario */
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

  /* Halo animado principal - más difuminado */
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: min(220px, 28vh, 50vw);
    height: min(220px, 28vh, 50vw);
    border-radius: 50%;
    background: radial-gradient(
      ellipse 120% 80% at center,
      rgba(247, 88, 0, 0.06) 0%,
      rgba(247, 88, 0, 0.04) 20%,
      rgba(247, 88, 0, 0.02) 45%,
      rgba(247, 88, 0, 0.01) 70%,
      transparent 100%
    );
    filter: blur(8px);
    z-index: 1;
    animation: haloAnimation 4s ease-in-out infinite;
  }

  /* Segundo halo más amplio y sutil */
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: min(280px, 35vh, 60vw);
    height: min(280px, 35vh, 60vw);
    border-radius: 50%;
    background: radial-gradient(
      ellipse 140% 90% at center,
      rgba(247, 88, 0, 0.03) 0%,
      rgba(247, 88, 0, 0.015) 30%,
      rgba(247, 88, 0, 0.008) 60%,
      transparent 90%
    );
    filter: blur(12px);
    z-index: 0;
    animation: haloAnimation 4s ease-in-out infinite reverse;
  }

  img,
  svg {
    position: relative;
    z-index: 2;
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
`;

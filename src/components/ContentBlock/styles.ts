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
  overflow: hidden; /* Evita desbordamiento */

  @media only screen and (max-width: 1024px) {
    padding: var(--header-height) 1rem var(--header-height);
  }

  @media only screen and (max-height: 700px) {
    height: auto; /* Permitir que crezca si necesita más espacio */
    min-height: 100vh; /* Mínimo de pantalla completa */
    padding: calc(var(--header-height) * 1.5) 1rem calc(var(--header-height) * 1.5);
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
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : direction === "right" ? "row-reverse" : "column"};

  /* Asegurar que el contenido se adapte al espacio disponible */
  height: 100%;
  width: 100%;
  max-height: 100%; /* No exceder el contenedor padre */

  ${({ direction }: { direction: string }) =>
    direction === "center" &&
    `
      text-align: center;
    `}
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

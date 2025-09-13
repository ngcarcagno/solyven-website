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

export const ContentSection = styled("section")<{ $isContact?: boolean }>`
  position: relative;
  min-height: var(--content-min-height);
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--content-padding);

  /* Estilos específicos para la sección de contacto */
  ${({ $isContact }) =>
    $isContact &&
    `
    height: 100vh;
    padding: 100px 2rem 20px; /* Padding fijo superior para el header */
    align-items: stretch;
    justify-content: flex-start;
    box-sizing: border-box;
    overflow: hidden; /* Evita desbordamiento */
  `}

  @media only screen and (max-width: 1024px) {
    padding: var(--content-padding-mobile);

    ${({ $isContact }) =>
      $isContact &&
      `
      padding: 80px 1rem 15px; /* Menos padding en móviles */
    `}
  }

  @media only screen and (max-height: 700px) {
    ${({ $isContact }) =>
      $isContact &&
      `
      padding: 60px 1rem 10px; /* Aún menos en pantallas muy bajas */
    `}
  }
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : direction === "right" ? "row-reverse" : "column"};

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

  @media only screen and (max-width: 575px) {
    padding-top: 3em; /* Proportional mobile padding */
  }

  @media only screen and (max-width: 768px) {
    max-width: ${({ $centered }) => ($centered ? "95vw" : "var(--content-wrapper-max-width)")};
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

import styled from "styled-components";

export const BackgroundWrapper = styled.section`
  position: relative;
  scroll-snap-align: start;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  padding: 0 1rem; /* Agregar padding horizontal */
`;

export const BackgroundContainer = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  /* pointer-events: none; - Removido para permitir interacción con GridDistortion */
`;

export const BackgroundContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none; /* El contenedor no interfiere */

  /* Pero los elementos interactivos sí deben ser clickeables */
  * {
    pointer-events: auto;
  }
`;

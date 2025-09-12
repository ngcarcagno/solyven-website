import styled from "styled-components";

export const BackgroundWrapper = styled.section`
  position: relative;
  scroll-snap-align: start;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding: 0 1rem; /* Agregar padding horizontal */
`;

export const BackgroundContainer = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

export const BackgroundContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

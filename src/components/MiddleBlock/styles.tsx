import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  min-height: 100vh;
  scroll-snap-align: start;
  padding: 0 1rem; /* Agregar padding horizontal */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center; /* Centrar verticalmente */

  @media screen and (max-width: 1024px) {
    padding: 0 1rem; /* Mantener padding horizontal en pantallas pequeñas */
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  min-height: 100vh;
  scroll-snap-align: start;
  padding: 0 2em; /* Proportional horizontal padding */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center; /* Centrar verticalmente */

  @media (max-width: 768px) {
    padding: 0 1.5em; /* Proportional mobile padding */
  }
`;

export const Content = styled("p")`
  padding: 0.6em 0 0.6em; /* Proportional padding */
`;

export const ContentWrapper = styled("div")`
  max-width: min(85vw, 570px); /* Fluid max width with viewport limit */

  /* Removed media query - now handled by min() function */
`;

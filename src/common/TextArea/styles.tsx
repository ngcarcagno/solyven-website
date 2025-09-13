import styled from "styled-components";

export const StyledContainer = styled("div")`
  display: inline-block;
  width: 100%;
  padding: 0.625em 0.3125em; /* Proportional padding */
  margin-bottom: -0.625em; /* Proportional margin */
`;

export const StyledTextArea = styled("textarea")`
  resize: none;
  font-size: 0.875em; /* Proportional font size */
  height: 11.5625em; /* Proportional height */

  /* Para pantallas de altura limitada (desde 950px hacia abajo) */
  @media only screen and (max-height: 950px) {
    height: 3em; /* MUY compacto para forzar que entre */
    min-height: 3em; /* Mínimo funcional */
    max-height: 4em; /* Máximo permitido */
    resize: vertical; /* Permitir redimensionamiento manual */
  }

  @media only screen and (max-height: 500px) {
    height: 4em; /* Aún más compacto */
  }
`;

export const Label = styled("label")`
  display: block;
  padding-bottom: 0.625em; /* Proportional padding */
  text-transform: capitalize;
`;

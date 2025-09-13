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

  /* Para pantallas de altura limitada como iPhone SE portrait */
  @media only screen and (max-height: 700px) {
    height: 6em; /* Mucho más compacto */
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

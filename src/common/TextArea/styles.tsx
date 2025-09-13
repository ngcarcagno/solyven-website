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
`;

export const Label = styled("label")`
  display: block;
  padding-bottom: 0.625em; /* Proportional padding */
  text-transform: capitalize;
`;

import styled from "styled-components";

export const StyledContainer = styled("div")`
  display: inline-block;
  width: 100%;
  padding: 0.5em 0.25em; /* Proportional padding */
  margin-bottom: 0.25em; /* Keep a small gap below the textarea */
`;

export const StyledTextArea = styled("textarea")`
  resize: vertical;
  font-size: 0.98rem; /* Slightly larger for readability */
  height: auto;
  min-height: 5.5rem; /* Ensure at least ~2 visible rows comfortably */
  max-height: 28vh; /* Prevent the textarea from growing too tall */

  /* For short viewports, keep the textarea at a reasonable minimum but
     reduce spacing elsewhere (handled in FormGroup) so textarea stays usable. */
  @media only screen and (max-height: 950px) {
    min-height: 4.2rem; /* still approx two rows */
    max-height: 22vh;
  }

  @media only screen and (max-height: 500px) {
    min-height: 4rem;
    max-height: 20vh;
  }
`;

export const Label = styled("label")`
  display: block;
  padding-bottom: 0.625em; /* Proportional padding */
  text-transform: capitalize;
`;

import styled from "styled-components";

export const StyledContainer = styled("div")<{
  border?: boolean;
}>`
  position: relative;
  width: 100%;
  max-width: 75em; /* Proportional max-width (1200px at 16px root) */
  margin-right: auto;
  margin-left: auto;
  padding: 0 3.75em; /* Proportional horizontal padding */
  overflow: hidden;
  border-top: ${(p) => (p.border ? "1px solid var(--color-primary)" : "")};

  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 4.25em); /* Proportional calculation */
    padding: 0 1.875em; /* Proportional padding */
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 2.375em); /* Proportional calculation */
    padding: 0 1.125em; /* Proportional padding */
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: 0 1.125em; /* Proportional padding */
  }
`;

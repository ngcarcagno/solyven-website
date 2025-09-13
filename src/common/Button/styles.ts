import styled from "styled-components";

export const StyledButton = styled("button")<{
  backgroundColor?: string;
  borderColor?: string;
  normalTextColor?: string;
  focusTextColor?: string;
  fontSize?: string;
  fontFamily?: string;
  focusColor?: string;
  variant?: "default" | "compact" | "header";
}>`
  /* Base modern button styling - proportional */
  background: linear-gradient(135deg, ${(p) => p.backgroundColor || "rgba(95, 8, 7, 0.8)"}, rgba(75, 6, 5, 0.9));
  color: ${(p) => p.normalTextColor || "rgba(255, 255, 255, 0.9)"};
  font-size: ${(p) => p.fontSize || "0.8em"}; /* Proportional font size */
  font-family: ${(p) => p.fontFamily || "var(--font-button)"};
  font-weight: 600;
  width: 100%;
  border: 1px solid ${(p) => p.borderColor || "rgba(95, 8, 7, 0.4)"};
  border-radius: 0.375em; /* Proportional border radius */
  cursor: pointer;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.0625em; /* Proportional letter spacing */
  text-transform: uppercase;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(0.5em); /* Proportional blur */
  box-shadow: 0 0.25em 0.9375em rgba(95, 8, 7, 0.3), inset 0 0.0625em 0 rgba(255, 255, 255, 0.1);

  align-items: center;
  justify-content: center;

  /* Efecto brillante tech */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
    transition: left 0.6s ease;
  }

  /* Variant-based styling */
  ${(p) => {
    switch (p.variant) {
      case "header":
        return `
          padding: 0.6em 1.2em;
          height: auto;
          font-size: 0.8em;
          margin-top: 0;
          max-width: none;
          width: auto;
          display: inline-flex;
          vertical-align: middle;
        `;
      case "compact":
        return `
          padding: 0.5em 1em;
          height: auto;
          font-size: 0.75em;
          margin-top: 0.25em;
          max-width: 8.75em;
        `;
      default:
        return `
          padding: 1em 1.5em;
          margin-top: 0.625em;
          max-width: 11.25em;
          font-size: 0.9em;
        `;
    }
  }}

  &:hover,
  &:active,
  &:focus {
    transform: translateY(-0.125em); /* Proportional transform */
    background: linear-gradient(135deg, ${(p) => p.focusColor || "var(--color-secondary)"}, rgba(212, 68, 28, 0.9));
    border-color: rgba(255, 130, 92, 0.5);
    color: ${(p) => p.focusTextColor || "white"};
    box-shadow: 0 0.5em 1.5625em rgba(255, 130, 92, 0.4), 0 0 1.25em rgba(255, 130, 92, 0.2),
      inset 0 0.0625em 0 rgba(255, 255, 255, 0.3);
    text-shadow: 0 0 0.5em rgba(255, 255, 255, 0.5);
  }

  &:hover::before {
    left: 100%;
  }

  &:active {
    transform: translateY(-0.0625em); /* Proportional transform */
  }
`;

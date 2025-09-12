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
  /* Base modern button styling */
  background: linear-gradient(135deg, ${(p) => p.backgroundColor || "rgba(95, 8, 7, 0.8)"}, rgba(75, 6, 5, 0.9));
  color: ${(p) => p.normalTextColor || "rgba(255, 255, 255, 0.9)"};
  font-size: ${(p) => p.fontSize || "0.8rem"};
  font-family: ${(p) => p.fontFamily || "var(--font-button)"};
  font-weight: 600;
  width: 100%;
  border: 1px solid ${(p) => p.borderColor || "rgba(95, 8, 7, 0.4)"};
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 15px rgba(95, 8, 7, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);

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
          padding: 0.6rem 1.2rem;
          height: auto;
          font-size: 0.8rem;
          margin-top: 0;
          max-width: none;
          width: auto;
          display: inline-flex;
          vertical-align: middle;
        `;
      case "compact":
        return `
          padding: 0.5rem 1rem;
          height: auto;
          font-size: 0.75rem;
          margin-top: 0.25rem;
          max-width: 140px;
        `;
      default:
        return `
          padding: 1rem 1.5rem;
          margin-top: 0.625rem;
          max-width: 180px;
          font-size: 0.9rem;
        `;
    }
  }}

  &:hover,
  &:active,
  &:focus {
    transform: translateY(-2px);
    background: linear-gradient(135deg, ${(p) => p.focusColor || "var(--color-secondary)"}, rgba(212, 68, 28, 0.9));
    border-color: rgba(255, 130, 92, 0.5);
    color: ${(p) => p.focusTextColor || "white"};
    box-shadow: 0 8px 25px rgba(255, 130, 92, 0.4), 0 0 20px rgba(255, 130, 92, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
  }

  &:hover::before {
    left: 100%;
  }

  &:active {
    transform: translateY(-1px);
  }
`;

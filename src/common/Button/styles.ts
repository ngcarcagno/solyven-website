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
  background: ${(p) => p.backgroundColor || "var(--color-primary)"};
  color: ${(p) => p.normalTextColor || "var(--color-text-primary)"};
  font-size: ${(p) => p.fontSize || "1rem"};
  font-family: ${(p) => p.fontFamily || "var(--font-button)"};
  font-weight: 700;
  width: 100%;
  border: 1px solid ${(p) => p.borderColor || "var(--color-text-secondary)"};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  align-items: center;
  justify-content: center;

  /* Variant-based styling using CSS custom properties for scalability */
  ${(p) => {
    switch (p.variant) {
      case "header":
        return `
          padding: 8px 16px;
          height: 45px;
          font-size: var(--size-header-nav);
          margin-top: 0;
          max-width: none;
          width: auto;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          display: inline-flex;
          vertical-align: middle;
        `;
      case "compact":
        return `
          padding: 8px 16px;
          height: 36px;
          font-size: 0.875rem;
          margin-top: 0.25rem;
          max-width: 140px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        `;
      default:
        return `
          padding: 13px 0;
          margin-top: 0.625rem;
          max-width: 180px;
          box-shadow: 0 16px 30px rgb(23 31 114 / 20%);
        `;
    }
  }}

  &:hover,
  &:active,
  &:focus {
    color: ${(p) => p.focusTextColor || "#fff"};
    border: 1px solid ${(p) => p.focusColor || "var(--color-text-secondary)"};
    background-color: ${(p) => p.focusColor || "var(--color-secondary)"};
    transform: translateY(-1px);
  }
`;

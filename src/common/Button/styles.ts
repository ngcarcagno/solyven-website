import styled from "styled-components";

export const StyledButton = styled("button")<{
  backgroundColor?: string;
  borderColor?: string;
  normalTextColor?: string;
  focusTextColor?: string;
  fontSize?: string;
  fontFamily?: string;
  focusColor?: string;
}>`
  background: ${(p) => p.backgroundColor || "var(--color-primary)"};
  color: ${(p) => p.normalTextColor || "var(--color-text-primary)"};
  font-size: ${(p) => p.fontSize || "1rem"};
  font-family: ${(p) => p.fontFamily || "var(--font-button)"};
  font-weight: 700;
  width: 100%;
  border: 1px solid ${(p) => p.borderColor || "var(--color-text-secondary)"};
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: ${(p) => p.focusTextColor || "#fff"};
    border: 1px solid ${(p) => p.focusColor || "var(--color-text-secondary)"};
    background-color: ${(p) => p.focusColor || "var(--color-secondary)"};
  }
`;

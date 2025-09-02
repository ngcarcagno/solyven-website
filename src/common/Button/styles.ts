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
  background: ${(p) => p.backgroundColor || "#2e186a"};
  color: ${(p) => p.normalTextColor || "#fff"};
  font-size: ${(p) => p.fontSize || "1rem"};
  font-family: ${(p) => p.fontFamily || "Arial, sans-serif"};
  font-weight: 700;
  width: 100%;
  border: 1px solid ${(p) => p.borderColor || "#edf3f5"};
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
    border: 1px solid ${(p) => p.focusColor || "rgb(255, 130, 92)"};
    background-color: ${(p) => p.focusColor || "rgb(255, 130, 92)"};
  }
`;

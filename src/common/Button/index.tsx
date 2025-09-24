import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({ color, children, onClick, variant = "default", style, type = "button", disabled = false }: ButtonProps) => (
  <StyledButton type={type} color={color} onClick={onClick} variant={variant} style={style} disabled={disabled}>
    {children}
  </StyledButton>
);

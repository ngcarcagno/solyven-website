import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({ color, children, onClick, variant = "default", style }: ButtonProps) => (
  <StyledButton color={color} onClick={onClick} variant={variant} style={style}>
    {children}
  </StyledButton>
);

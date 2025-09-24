import { Container, StyledInput } from "./styles";
import { Label } from "../TextArea/styles";
import { InputProps } from "../types";

const Input = ({ name, placeholder, onChange, value, type = "text", label }: InputProps) => (
  <Container>
    <Label htmlFor={name}>{label || name}</Label>
    <StyledInput placeholder={placeholder} name={name} id={name} onChange={onChange} value={value} type={type} />
  </Container>
);

export default Input;

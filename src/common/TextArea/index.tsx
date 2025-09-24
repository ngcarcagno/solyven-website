import { StyledTextArea, StyledContainer, Label } from "./styles";
import { InputProps } from "../types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TextArea = ({ name, placeholder, onChange, value, label }: InputProps) => (
  <StyledContainer>
    <Label htmlFor={name}>{label || name}</Label>
    <StyledTextArea placeholder={placeholder} id={name} name={name} onChange={onChange} value={value} />
  </StyledContainer>
);

export default TextArea;

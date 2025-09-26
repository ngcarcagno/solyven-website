import { Col } from "antd";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import ContentBlock from "../ContentBlock";
import { FormGroup, Span, ButtonContainer } from "./styles";

// Cambia a false para volver al submit tradicional
const useMailto = true;

const Contact = ({ title, content, id }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit, isSubmitting } = useForm(validate);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  // Handler modular para mailto
  const handleMailtoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validación simple (puedes mejorarla)
    if (!values.name || !values.message) return;
    // Asunto formal con nombre
    const subject = encodeURIComponent(`Nuevo mensaje de contacto de ${values.name} - Solyven Web`);
    // Mensaje tipo carta
    const body = encodeURIComponent(`${values.message}\n\nSaludos cordiales,\n${values.name}`);
    const to = process.env.REACT_APP_CONTACT_EMAIL || "info@solyven.com";
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  };

  const contactFormContent = (
    <FormGroup autoComplete="off" onSubmit={useMailto ? handleMailtoSubmit : handleSubmit}>
      <Col span={24}>
        <Input
          type="text"
          name="name"
          label="Nombre"
          placeholder="Tu Nombre"
          value={values.name || ""}
          onChange={handleChange}
        />
        <ValidationType type="name" />
      </Col>
      {/* Ocultar campo email si es mailto */}
      {!useMailto && (
        <Col span={24}>
          <Input
            type="text"
            name="email"
            label="Email"
            placeholder="Tu Correo Electrónico"
            value={values.email || ""}
            onChange={handleChange}
          />
          <ValidationType type="email" />
        </Col>
      )}
      <Col span={24}>
        <TextArea
          placeholder="Tu Mensaje"
          value={values.message || ""}
          name="message"
          label="Mensaje"
          onChange={handleChange}
        />
        <ValidationType type="message" />
      </Col>
      <ButtonContainer>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (useMailto ? "Redirigiendo..." : "Enviando...") : "Enviar"}
        </Button>
      </ButtonContainer>
    </FormGroup>
  );

  return <ContentBlock direction="center" title={title} content={content} id={id} customContent={contactFormContent} />;
};

export default Contact;

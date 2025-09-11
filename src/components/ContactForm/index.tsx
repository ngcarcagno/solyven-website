import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";

const Contact = ({ title, content, id }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  return (
    <ContactContainer id={id}>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <Col lg={24} md={24} sm={24} xs={24}>
            <h6>{title}</h6>
            <p>{content}</p>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col lg={24} md={24} sm={24} xs={24}>
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="Nombre"
                  placeholder="Tu Nombre"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="Email"
                  placeholder="Tu Correo Electrónico"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Tu Mensaje"
                  value={values.message || ""}
                  name="message"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <ButtonContainer>
                <Button name="submit">Submit</Button>
              </ButtonContainer>
            </FormGroup>
          </Col>
        </Row>
      </Slide>
    </ContactContainer>
  );
};

export default Contact;

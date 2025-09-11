import { Row, Col } from "antd";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = () => {
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" key={src} aria-label={src}>
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>Contacto</Language>
              <Large to="/">Cuéntanos todo</Large>
              <Para>¿Tienes alguna pregunta? No dudes en escribirnos.</Para>
              <a href="mailto:contacto@solyven.com">
                <Chat>Hablemos</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>Políticas</Title>
              <Large to="/">Seguridad de Aplicaciones</Large>
              <Large to="/">Principios de Software</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Large to="/">Centro de Soporte</Large>
              <Large to="/">Atención al Cliente</Large>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>Dirección</Language>
              <Para>3 de febrero 1676</Para>
              <Para>Zárate, Buenos Aires</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>Empresa</Title>
              <Large to="/">Nosotros</Large>
              <Large to="/">Blog</Large>
              <Large to="/">Prensa</Large>
              <Large to="/">Carreras</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">Idioma</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch>
                  <SvgIcon src="spain.svg" aria-label="Español" width="30px" height="30px" />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row justify="space-between" align="middle" style={{ paddingTop: "3rem" }}>
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon src="logo.svg" aria-label="homepage" width="100px" height="30px" />
              </LogoContainer>
            </NavLink>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default Footer;

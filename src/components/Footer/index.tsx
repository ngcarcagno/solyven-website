import { Row } from "antd";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import {
  NavLink,
  Extra,
  LogoContainer,
  Para,
  FooterContainer,
  AddressCard,
  AddressLines,
  MapLink,
  FooterMiddle,
  DevLogoStack,
  FooterRow,
  AddressText,
  StyledMapLink,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
  preserveColor?: boolean;
  label?: string;
}

const Footer = () => {
  const SocialLink = ({ href, src, preserveColor, label }: SocialLinkProps) => {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" key={src} aria-label={src} className="social-link">
        <SvgIcon src={src} preserveColor={preserveColor} />
        {label && <span className="social-label">{label}</span>}
      </a>
    );
  };

  return (
    <>
      <Extra>
        <Container border={true}>
          <FooterRow>
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  preserveColor={false}
                  width="180px"
                  height="48px"
                  className="logo-with-outline"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://www.instagram.com/clooveragency/"
                src="instagram.svg"
                preserveColor={false}
                label="@seguridadSolyvenn"
              />
            </FooterContainer>
            {/* WhatsApp phone icon and link */}
            <FooterContainer>
              <a
                href="https://wa.me/5493487611111"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enviar WhatsApp"
                className="social-link">
                <SvgIcon src="phone.svg" preserveColor={false} />
                <span className="social-label">+54 9 3487 61-1111</span>
              </a>
            </FooterContainer>
            {/* Mail icon and mailto link */}
            <FooterContainer>
              <a
                href="mailto:info@solyven.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enviar mail"
                className="social-link">
                <SvgIcon src="mail.svg" preserveColor={false} />
                <span className="social-label">info@solyven.com.ar</span>
              </a>
            </FooterContainer>
            <AddressCard>
              <SvgIcon src="map-pin.svg" preserveColor={false} />
              <AddressLines>
                <Para className="address-city">Zárate, Buenos Aires</Para>
                <AddressText className="address-street">
                  <StyledMapLink
                    href="https://www.google.com/maps/search/?api=1&query=3+de+febrero+167+Zarate+Buenos+Aires"
                    target="_blank"
                    rel="noopener noreferrer">
                    3 de febrero 167
                  </StyledMapLink>
                </AddressText>
              </AddressLines>
            </AddressCard>
          </FooterRow>
          {/* centered middle row for developer credit / external link */}
          <FooterMiddle>
            <DevLogoStack
              href="https://www.instagram.com/clooveragency/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cloover Agency">
              <img src={`${process.env.PUBLIC_URL}/img/png/LogoCloover.png`} alt="Cloover Agency" />
              <div className="dev-label">Desarrollado por Cloover Agency</div>
            </DevLogoStack>
          </FooterMiddle>
        </Container>
      </Extra>
    </>
  );
};

export default Footer;

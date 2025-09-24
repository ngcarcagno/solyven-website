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
          <Row justify="space-between" align="middle" style={{ paddingTop: "3rem" }}>
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
            <AddressCard>
              <SvgIcon src="map-pin.svg" preserveColor={false} />
              <AddressLines>
                <Para>Zárate, Buenos Aires</Para>
                <MapLink
                  href="https://www.google.com/maps/search/?api=1&query=3+de+febrero+167+Zarate+Buenos+Aires"
                  target="_blank"
                  rel="noopener noreferrer">
                  3 de febrero 167
                </MapLink>
              </AddressLines>
            </AddressCard>
          </Row>
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

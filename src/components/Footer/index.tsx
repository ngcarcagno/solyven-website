import { Row } from "antd";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import { NavLink, Extra, LogoContainer, Para, FooterContainer, AddressCard, AddressLines, MapLink } from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
  preserveColor?: boolean;
}

const Footer = () => {
  const SocialLink = ({ href, src, preserveColor }: SocialLinkProps) => {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" key={src} aria-label={src}>
        <SvgIcon src={src} width="25px" height="25px" preserveColor={preserveColor} />
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
                <SvgIcon src="logo.svg" aria-label="homepage" width="101px" height="64px" />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://github.com/Adrinlol/create-react-app-adrinlol"
                src="github.svg"
                preserveColor={false}
              />
              <SocialLink href="https://twitter.com/Adrinlolx" src="twitter.svg" preserveColor={false} />
              <SocialLink
                href="https://www.linkedin.com/in/lasha-kakabadze/"
                src="linkedin.svg"
                preserveColor={false}
              />
              <SocialLink href="https://medium.com/@lashakakabadze/" src="medium.svg" preserveColor={false} />
            </FooterContainer>
            <AddressCard>
              <SvgIcon src="map-pin.svg" width="28px" height="28px" preserveColor={false} />
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
        </Container>
      </Extra>
    </>
  );
};

export default Footer;

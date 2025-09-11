import { Row, Col } from "antd";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import { NavLink, Extra, LogoContainer, Para, FooterContainer, AddressCard, AddressLines, MapLink } from "./styles";

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
      <Extra>
        <Container border={true}>
          <Row justify="space-between" align="middle" style={{ paddingTop: "3rem" }}>
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon src="logo.svg" aria-label="homepage" width="101px" height="64px" />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink href="https://github.com/Adrinlol/create-react-app-adrinlol" src="github.svg" />
              <SocialLink href="https://twitter.com/Adrinlolx" src="twitter.svg" />
              <SocialLink href="https://www.linkedin.com/in/lasha-kakabadze/" src="linkedin.svg" />
              <SocialLink href="https://medium.com/@lashakakabadze/" src="medium.svg" />
            </FooterContainer>
            <AddressCard>
              <SvgIcon src="map-pin.svg" width="28px" height="28px" />
              <AddressLines>
                <Para>Zárate, Buenos Aires</Para>
                <MapLink
                  href="https://www.google.com/maps/search/?api=1&query=3+de+febrero+1676+Zarate+Buenos+Aires"
                  target="_blank"
                  rel="noopener noreferrer">
                  3 de febrero 1676
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

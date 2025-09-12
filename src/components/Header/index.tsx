import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  NavContainer,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  CTAButton,
  MobileMenuItem,
  MobileCTAButton,
} from "./styles";

const Header = () => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <MobileMenuItem onClick={() => scrollTo("about")}>
          <span>Nosotros</span>
        </MobileMenuItem>
        <MobileMenuItem onClick={() => scrollTo("mission")}>
          <span>Misión</span>
        </MobileMenuItem>
        <MobileMenuItem onClick={() => scrollTo("product")}>
          <span>Servicios</span>
        </MobileMenuItem>
        <MobileCTAButton onClick={() => scrollTo("contact")}>Contacto</MobileCTAButton>
      </>
    );
  };

  return (
    <HeaderSection>
      {/* Logo */}
      <LogoContainer to="/" aria-label="homepage">
        <SvgIcon src="logo.svg" width="180px" height="48px" className="logo-with-outline" />
      </LogoContainer>

      {/* Navegación Desktop */}
      <NavContainer>
        <Span onClick={() => scrollTo("about")}>Nosotros</Span>
        <Span onClick={() => scrollTo("mission")}>Misión</Span>
        <Span onClick={() => scrollTo("product")}>Servicios</Span>
        <CTAButton onClick={() => scrollTo("contact")}>Contacto</CTAButton>
      </NavContainer>

      {/* Burger Menu Mobile */}
      <Burger onClick={toggleButton} className="burger-icon">
        <Outline />
      </Burger>

      {/* Drawer Mobile */}
      <Drawer closable={false} open={visible} onClose={toggleButton} className="modern-drawer">
        <Col style={{ marginBottom: "2.5rem" }}>
          <Label onClick={toggleButton} className="drawer-header">
            <Col span={12}>
              <Menu>Menu</Menu>
            </Col>
            <Col span={12}>
              <Outline />
            </Col>
          </Label>
        </Col>
        <MenuItem />
      </Drawer>
    </HeaderSection>
  );

  function scrollTo(id: string) {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
    setVisibility(false);
  }
};

export default Header;

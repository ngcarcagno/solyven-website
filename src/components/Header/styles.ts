import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  position: fixed;
  top: 8px;
  left: 0;
  right: 0;
  width: 100%;
  height: var(--header-height);
  padding: 0 2.5rem;

  /* Sin fondo - completamente transparente */
  background: transparent;
  border: none;

  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 0.5rem;
  transition: all 0.3s ease;

  .logo-with-outline {
    height: 48px;
    width: auto;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 0 2px rgba(0, 53, 122, 0.5)) drop-shadow(0 2px 6px rgba(0, 0, 0, 0.4));
  }

  &:hover .logo-with-outline {
    transform: translateY(-1px) scale(1.05);
    filter: drop-shadow(0 0 3px rgba(0, 53, 122, 0.7)) drop-shadow(0 0 12px rgba(0, 53, 122, 0.3))
      drop-shadow(0 3px 8px rgba(0, 0, 0, 0.5));
  }

  @media (max-width: 768px) {
    padding-left: 0;

    .logo-with-outline {
      height: 42px;
    }
  }
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: var(--color-primary);
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const NavContainer = styled("nav")`
  display: flex;
  align-items: center;
  gap: 3rem;

  /* Fondo tecnológico más sutil y moderno */
  background: linear-gradient(135deg, rgba(15, 15, 15, 0.65) 0%, rgba(20, 20, 20, 0.55) 100%);
  border: 1px solid rgba(0, 53, 122, 0.2);
  border-radius: 12px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.03),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);

  padding: 0.75rem 2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  /* Efecto hover tecnológico */
  &:hover {
    background: linear-gradient(135deg, rgba(15, 15, 15, 0.75) 0%, rgba(25, 25, 25, 0.65) 100%);
    border-color: rgba(0, 53, 122, 0.35);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 0 20px rgba(0, 53, 122, 0.15);
  }

  @media (max-width: 890px) {
    display: none;
  }
`;
export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: var(--size-header-nav);
  color: var(--color-text-primary);
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: var(--color-text-primary);
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
`;

export const Span = styled("span")`
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: 0.5rem 0;

  &:hover {
    color: var(--color-secondary);
    transform: translateY(-1px);
    text-shadow: 0 0 8px rgba(255, 130, 92, 0.3);
  }

  /* Línea inferior minimalista */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--color-secondary), transparent);
    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const CTAButton = styled("button")`
  background: linear-gradient(135deg, rgba(95, 8, 7, 0.8), rgba(75, 6, 5, 0.9));
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(95, 8, 7, 0.4);
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 15px rgba(95, 8, 7, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);

  /* Efecto brillante tech */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, var(--color-secondary), rgba(212, 68, 28, 0.9));
    border-color: rgba(255, 130, 92, 0.5);
    color: white;
    box-shadow: 0 8px 25px rgba(255, 130, 92, 0.4), 0 0 20px rgba(255, 130, 92, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
  }

  &:hover::before {
    left: 100%;
  }

  &:active {
    transform: translateY(-1px);
  }
`;

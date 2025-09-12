import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  position: fixed;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 90vw;
  max-width: 1200px;
  height: var(--header-height);
  padding: 0 1.5rem; /* remove vertical padding, let height control it */

  /* Glassmorphism mejorado */
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: var(--glass-radius);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);

  z-index: 1000;
  display: flex;
  align-items: center; /* ensure vertical centering */
  transition: all 0.3s ease;

  .ant-row-space-between {
    align-items: center;
    text-align: center;
    width: 100%;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;

  /* Logo con sombra sutil para mejor contraste */
  .logo-with-outline {
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 0.5px rgba(255, 255, 255, 0.4));
    transition: filter 0.3s ease;
  }

  /* Hover effect para mayor interactividad */
  &:hover .logo-with-outline {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 1px rgba(255, 255, 255, 0.6))
      drop-shadow(0 0 8px rgba(255, 130, 92, 0.2));
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
  transition: color 0.25s ease, transform 0.25s ease;
  position: relative;

  &:hover,
  &:active,
  &:focus {
    color: var(--color-secondary);
  }

  /* modern animated underline as a fallback / enhancement */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    height: 2px;
    width: 100%;
    background: var(--color-secondary);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 220ms ease;
    pointer-events: none;
    opacity: 0.6;
  }

  &:hover::after,
  &:focus::after,
  &:active::after {
    transform: scaleX(1);
  }
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  background: rgb(241, 242, 243);
  padding: 2em 0; /* Proportional vertical padding */
`;

export const Title = styled("h4")`
  font-size: 1.375em; /* Proportional font size */
  text-transform: capitalize;
  color: var(--color-detail);

  @media screen and (max-width: 414px) {
    padding: 1.2em 0; /* Proportional mobile padding */
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1em; /* Proportional font size */
  margin-bottom: 0.5em; /* Proportional margin */
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: var(--color-secondary);
  }
`;

export const Extra = styled("section")`
  scroll-snap-align: none;
  min-height: auto;
  background: var(--glass-bg-v2);
  backdrop-filter: blur(var(--glass-blur-v2));
  -webkit-backdrop-filter: blur(var(--glass-blur-v2));
  box-shadow: var(--glass-shadow-v2);
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
`;

export const LogoContainer = styled("div")`
  display: flex;
  position: relative;
`;

export const Para = styled("div")`
  color: var(--color-text-secondary);
  font-size: clamp(0.8rem, 1.5vw, 0.875rem); /* Fluid font size 12.8px to 14px */
  width: clamp(60%, 70%, 80%); /* Fluid width */
`;

export const Large = styled(Link)`
  font-size: 16px;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  &:hover {
    color: var(--color-secondary);
    text-underline-position: under;
    text-decoration-line: underline;
    text-decoration-style: wavy;
    text-decoration-color: var(--color-secondary);
  }
`;

export const Chat = styled("p")`
  color: var(--color-detail);
  max-width: fit-content;
  border-bottom: 1px solid var(--color-detail);
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-bottom: 1px solid var(--color-secondary);
    color: var(--color-secondary);
  }
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled("div")`
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 769px) {
    width: auto;

    a:not(:last-child) {
      display: none;
    }
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: var(--color-secondary);
    }
  }
`;

export const Language = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: var(--color-detail);

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Label = styled("label")`
  font-size: 22px;
  text-transform: capitalize;
  color: var(--color-detail);
  display: block;
  margin-bottom: 2rem;
  font-family: "ArchivoBlack Regular", serif;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;

export const LanguageSwitch = styled("div")`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 85px;
`;

export const AddressCard = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const AddressLines = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const MapLink = styled("a")`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-detail);
  text-decoration: none;
  font-weight: 600;

  svg {
    width: 28px;
    height: 28px;
    display: block;
  }

  &:hover {
    color: var(--color-secondary);
  }
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  /* Mismo glassmorphism que el header */
  background: linear-gradient(135deg, rgba(15, 15, 15, 0.65) 0%, rgba(20, 20, 20, 0.55) 100%);
  border-top: 1px solid rgba(0, 53, 122, 0.2);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.03),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);

  padding: 2em 0; /* Proportional vertical padding */
  position: relative;

  /* Efecto hover tecnológico sutil */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Title = styled("h4")`
  font-size: 1.375em; /* Proportional font size */
  text-transform: capitalize;
  color: rgba(255, 255, 255, 0.9); /* Color blanco para contraste con fondo oscuro */
  font-weight: 600;
  letter-spacing: 0.5px;

  @media screen and (max-width: 414px) {
    padding: 1.2em 0; /* Proportional mobile padding */
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1em; /* Proportional font size */
  margin-bottom: 0.5em; /* Proportional margin */
  color: rgba(255, 255, 255, 0.7); /* Color blanco suave */
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: var(--color-secondary);
    text-shadow: 0 0 8px rgba(247, 88, 0, 0.3);
  }
`;

export const Extra = styled("section")`
  scroll-snap-align: none;
  min-height: auto;

  /* Mismo glassmorphism exacto que el header */
  background: linear-gradient(135deg, rgba(15, 15, 15, 0.65) 0%, rgba(20, 20, 20, 0.55) 100%);
  border-top: 1px solid rgba(0, 53, 122, 0.2);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.03),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);

  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;

  /* Transición suave */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const LogoContainer = styled("div")`
  display: flex;
  position: relative;
  align-items: center;
  /* main logo scales responsively while preserving aspect ratio */
  .svg-icon {
    width: auto !important;
    /* match header visual height (max) while allowing slight shrink on smaller viewports */
    height: clamp(36px, 3.5vw, 42px) !important;
    display: block !important;
  }
`;

export const Para = styled("div")`
  color: rgba(255, 255, 255, 0.8); /* Color blanco para fondo oscuro glassmorphism */
  font-size: clamp(0.8rem, 1.5vw, 0.875rem); /* Fluid font size 12.8px to 14px */
  width: clamp(60%, 70%, 80%); /* Fluid width */
`;

export const Large = styled(Link)`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7); /* Color blanco suave para fondo oscuro */
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
    text-shadow: 0 0 8px rgba(247, 88, 0, 0.3);
    text-underline-position: under;
    text-decoration-line: underline;
    text-decoration-style: wavy;
    text-decoration-color: var(--color-secondary);
  }
`;

export const Chat = styled("p")`
  color: rgba(255, 255, 255, 0.8); /* Color blanco para fondo oscuro */
  max-width: fit-content;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-bottom: 1px solid var(--color-secondary);
    color: var(--color-secondary);
    text-shadow: 0 0 8px rgba(247, 88, 0, 0.3);
  }
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled("div")`
  --footer-icon-size: clamp(22px, 2.4vw, 36px); /* responsive icon size used across footer */
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: center; /* center icons horizontally inside the footer container */
  gap: 0.75rem; /* consistent spacing between icons */
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
    /* keep social anchors visible on mobile; labels will be hidden at smaller breakpoints */
  }

  /* ensure SVG icons inside footer match a single responsive size and can be controlled by CSS */
  .svg-icon {
    width: var(--footer-icon-size) !important; /* override inline style applied by SvgIcon */
    height: var(--footer-icon-size) !important;
    display: inline-block;
    vertical-align: middle;
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0 8px;
    cursor: pointer;
    height: var(--footer-icon-size);
    min-width: var(--footer-icon-size);
    padding: 0 0.5rem;
    color: rgba(255, 255, 255, 0.92); /* ensure currentColor for SVGs */
  }

  /* label shown to the right of social icons (e.g., Instagram handle) */
  .social-label {
    margin-left: 0.5rem;
    color: rgba(255, 255, 255, 0.85);
    font-size: clamp(0.8rem, 1.2vw, 0.95rem);
    line-height: 1;
    white-space: nowrap;
  }

  @media screen and (max-width: 480px) {
    .social-label {
      display: none; /* show only icon on narrow screens */
    }
  }

  a:hover .svg-icon {
    filter: none;
    /* accent on hover */
    opacity: 0.98;
  }

  .social-link:hover {
    color: var(--color-secondary);
  }

  /* Instagram-specific tweak removed to keep icons uniform */

  /* Ensure inner svg fills the svg-icon container to prevent tiny viewBox renderings */
  .svg-icon svg {
    width: 100% !important;
    height: 100% !important;
    display: block;
  }

  /* explicit footer logo sizing (use a slightly larger clamp to match header size) */
  /* Make the footer's logo-with-outline match the header's visual size exactly */
  .svg-icon.logo-with-outline {
    height: 42px !important;
    width: auto !important;
    display: block !important;
  }
`;

/* Developer / Agency logo link: previously used variant removed because Footer now uses a stacked centered credit row (FooterMiddle + DevLogoStack). */

/* A centered middle row below the main footer row for developer credit or similar */
export const FooterMiddle = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0 1rem 0;
  pointer-events: none; /* container passive; inner anchors remain interactive */

  a {
    pointer-events: auto;
  }

  @media screen and (max-width: 480px) {
    padding: 0.5rem 0;
  }
`;

/* Stacked logo + label used in the centered row */
export const DevLogoStack = styled("a")`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  text-align: center;
  img {
    height: clamp(28px, 4.2vw, 48px);
    width: auto;
    display: block;
    max-width: 90%;
    object-fit: contain;
  }
  .dev-label {
    font-size: 0.88rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1;
  }

  @media screen and (max-width: 480px) {
    img {
      height: 32px;
    }
    .dev-label {
      /* keep label visible on mobile, slightly smaller */
      font-size: 0.78rem;
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
  align-items: flex-start;

  /* hide textual address on small screens, keep only the icon */
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const MapLink = styled("a")`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8); /* Color blanco para fondo glassmorphism oscuro */
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  svg {
    width: 28px;
    height: 28px;
    display: block;
  }

  &:hover {
    color: var(--color-secondary);
    text-shadow: 0 0 8px rgba(247, 88, 0, 0.3);
  }
`;

import styled from "styled-components";

export const ContactContainer = styled("div")`
  width: 100%;
  max-width: 1200px; /* Contenedor más ancho */
  margin: 0 auto; /* Centrar el contenedor */
  padding: 5rem 3rem; /* Más padding horizontal */
  position: relative;
  min-height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h6 {
    text-align: center; /* center the title text */
    margin: 0 0 1rem 0;
    font-size: 2rem;
  }

  p {
    text-align: center; /* center the subtitle */
    max-width: 720px;
    margin: 0 0 1.5rem 0;
  }

  @media only screen and (max-width: 1024px) {
    padding: 3rem 2rem; /* Mantener buen padding en tablets */
    max-width: 900px;
    h6 {
      font-size: 1.6rem;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 2.5rem 1.5rem; /* Mejor balance en móviles */
    max-width: 600px;
    h6 {
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 2rem 1rem; /* Mínimo padding en pantallas muy pequeñas */
    h6 {
      font-size: 1.4rem;
    }
  }
`;

export const FormGroup = styled("form")`
  /* Modern glassy card - optimizado para ser más ancho y corto */
  width: 100%;
  max-width: 900px; /* Ancho máximo más generoso */
  min-width: 320px; /* Ancho mínimo para móviles */
  box-sizing: border-box;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr; /* Dos columnas por defecto */
  grid-gap: 1.5rem;
  align-items: start;

  /* El textarea y botón ocupan toda la fila */
  & > div:nth-child(3), /* TextArea */
  & > div:last-child {
    /* ButtonContainer */
    grid-column: 1 / -1;
  }

  /* En tablets: mantener dos columnas pero más espacio */
  @media only screen and (max-width: 1024px) {
    max-width: 750px;
    grid-gap: 1.25rem;
  }

  /* En móviles: una sola columna */
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 500px;
    grid-gap: 1rem;

    & > div:nth-child(3),
    & > div:last-child {
      grid-column: 1;
    }
  }

  /* glass effect*/
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.04));
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.65);
  padding: 2rem;
  transition: transform 240ms ease, box-shadow 240ms ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 48px rgba(0, 0, 0, 0.7);
  }

  /* ensure Ant Col and inputs take full width */
  & > div {
    width: 100%;
  }

  /* style native inputs/textarea inside the form to match glass card */
  input,
  textarea {
    width: 100%;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.03); /* lighter input bg */
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    padding: 0.85rem 1rem;
    color: var(--color-text-primary);
    outline: none;
    transition: box-shadow 180ms ease, border-color 180ms ease, background 180ms ease;
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(255, 255, 255, 0.55);
  }

  input:focus,
  textarea:focus {
    border-color: rgba(255, 130, 92, 0.95);
    box-shadow: 0 6px 18px rgba(255, 130, 92, 0.1);
    background: rgba(255, 255, 255, 0.04);
  }

  label {
    display: block;
    margin-bottom: 0.25rem;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 600;
  }

  /* Responsive adjustments */
  @media only screen and (max-width: 1024px) {
    padding: 1.25rem;
  }

  @media only screen and (max-width: 480px) {
    padding: 0.75rem; /* reduce inner padding on very small screens */
    border-radius: 12px;
  }
`;

export const Span = styled("span")`
  display: block;
  font-weight: 600;
  color: var(--color-secondary);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  position: relative;

  button {
    border-radius: 8px;
  }

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;

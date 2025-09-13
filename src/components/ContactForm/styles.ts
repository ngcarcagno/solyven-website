import styled from "styled-components";

/* Solo estilos específicos del formulario - ContentBlock maneja el layout */

export const FormGroup = styled("form")`
  /* Formulario limpio que funciona dentro de ContentBlock */
  width: 100%;
  max-width: 600px; /* Límite máximo razonable */
  margin: 1.5em auto 0; /* Separación del texto superior, centrado horizontal */
  box-sizing: border-box;

  /* Layout interno del formulario */
  display: flex;
  flex-direction: column;
  gap: 1em;

  /* glass effect */
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.04));
  border-radius: 1em;
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 0.875em 2.125em rgba(0, 0, 0, 0.65);
  padding: 1.25em;
  transition: transform 240ms ease, box-shadow 240ms ease;

  /* Mobile: más compacto */
  @media only screen and (max-width: 768px) {
    padding: 1em;
    gap: 0.75em;
    max-width: 90vw;
  }

  /* Efecto hover */
  &:hover {
    transform: translateY(-0.25em);
    box-shadow: 0 1.25em 3em rgba(0, 0, 0, 0.7);
  }

  @media only screen and (max-width: 480px) {
    max-width: 95vw;
    padding: 1em;
    gap: 1em;
  }

  &:hover {
    transform: translateY(-0.25em);
    box-shadow: 0 1.25em 3em rgba(0, 0, 0, 0.7);
  }

  /* Ant Col takes full width */
  & > div {
    width: 100%;
  }

  /* Input styles */
  input,
  textarea {
    width: 100%;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 0.5em;
    border: 1px solid rgba(255, 255, 255, 0.06);
    padding: 0.75em 1em;
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
    box-shadow: 0 0.375em 1.125em rgba(255, 130, 92, 0.1);
    background: rgba(255, 255, 255, 0.04);
  }

  label {
    display: block;
    margin-bottom: 0.25em;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 600;
  }
`;

export const Span = styled("span")`
  display: block;
  font-weight: 600;
  color: var(--color-secondary);
  height: 1em;
  padding: 0 0.5em;
  font-size: 0.875em;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  position: relative;
  margin-top: 0.5em;

  button {
    border-radius: 0.5em;
  }

  @media only screen and (max-width: 768px) {
    text-align: center;

    button {
      width: 100%;
      padding: 0.875em 1em;
    }
  }
`;

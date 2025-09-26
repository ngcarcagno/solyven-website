import styled from "styled-components";

/* Solo estilos específicos del formulario - ContentBlock maneja el layout */

export const FormGroup = styled("form")`
  /* Formulario limpio que funciona dentro de ContentBlock */
  width: 100%;
  /* Allow the form to grow horizontally but cap to a comfortable max */
  max-width: min(820px, 86vw);
  margin: 1.2em auto 0; /* Slightly tighter top margin */
  box-sizing: border-box;
  flex: 1;
  min-height: 0; /* Permite que se comprima si es necesario */

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
  padding: 1.1em;
  transition: transform 240ms ease, box-shadow 240ms ease;

  /* Responsive para pantallas medianas-altas (ej: 1536x864) */
  /* On wide screens with limited height, allow more horizontal room while keeping vertical
     constraints. The form will use a larger max-width but reduce padding/gap to fit. */
  @media only screen and (min-width: 1200px) and (max-height: 950px) {
    max-width: min(760px, 72vw);
    padding: 0.85em;
    gap: 0.7em;
    font-size: 0.98em;
  }
  @media only screen and (min-width: 1200px) and (max-height: 900px) {
    max-width: min(700px, 70vw);
    padding: 0.75em;
    gap: 0.6em;
    font-size: 0.97em;
  }
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

  /* Para pantallas de altura limitada (funciona desde 950px hacia abajo) */
  @media only screen and (max-height: 950px) {
    padding: 0.6em;
    gap: 0.35em; /* much tighter vertical spacing */
    margin: 0.4em auto 0; /* Menos margen superior */
    /* Constrain by available viewport space but leave room for header + CTA */
    max-height: calc(100dvh - var(--header-height) - 100px);
    overflow-y: auto; /* Scroll interno si es muy necesario */
  }

  /* Para pantallas muy pequeñas de altura */
  @media only screen and (max-height: 500px) {
    padding: 0.75em;
    gap: 0.5em;
    margin: 0.5em auto 0;
  }

  @media only screen and (max-height: 400px) {
    padding: 0.5em;
    gap: 0.25em;
    margin: 0.25em auto 0;
  }

  /* Aggressive compaction for very short viewports: remove gaps between fields to free vertical space
     while keeping each control usable. This is intentionally scoped to very short heights. */
  @media only screen and (max-height: 900px) {
    gap: 0.15em !important;
    margin: 0.3em auto 0 !important;

    label {
      margin-bottom: 0.08rem !important;
      font-size: 0.92rem !important;
    }

    input,
    textarea {
      padding: 0.42em 0.5em !important;
    }

    /* tighten button spacing */
    ${/* scoper for ButtonContainer since it's sibling inside FormGroup */ ""}
    & > div[role='button'],
    & ${""} > .ant-btn,
    & .ant-btn {
      padding: 0.5em 0.8em !important;
    }
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

  /* Para pantallas de altura limitada */
  @media only screen and (max-height: 950px) {
    input,
    textarea {
      padding: 0.5em 0.75em; /* Padding más compacto */
    }

    label {
      margin-bottom: 0.15em; /* Menos espacio entre label e input */
    }
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

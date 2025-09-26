import styled from "styled-components";

export const TemplateContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; /* center vertically on desktop by default */
  scroll-snap-align: start;
  position: relative;
  padding: calc(var(--header-height) * 0.38) 1rem 1rem;
  box-sizing: border-box;
  min-height: 100dvh; /* keep minimum full-screen so snap works, but don't force exact height */

  @media only screen and (max-width: 768px) {
    padding: calc(var(--header-height) * 0.35) 0.75rem 0.75rem;
    align-items: flex-start; /* keep top-aligned on small screens */
  }
  @media only screen and (max-width: 420px) {
    padding-top: calc(var(--header-height) * 0.3);
  }
`;

export const TemplateInner = styled.div`
  width: min(92vw, 960px);
  max-width: var(--content-wrapper-max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  height: auto;
  min-height: 0;

  @media only screen and (max-width: 768px) {
    padding: 0 0.5rem;
  }
  @media only screen and (max-width: 420px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

export const TemplateTitle = styled.h2`
  font-family: var(--font-title);
  color: var(--color-text-primary);
  text-align: center;
  margin: 0 0 0.75rem 0;
  line-height: 1.05;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  /* reduce desktop maximum slightly to restore previous desktop visual balance */
  font-size: clamp(1.05rem, 3.2vw, 1.6rem);

  @media only screen and (max-width: 480px) {
    margin-bottom: 0.4rem;
    font-size: clamp(1rem, 6.5vw, 1.4rem);
  }
  @media only screen and (max-width: 420px) {
    /* tuned for narrow phones (iPhone 13 / 395px) */
    font-size: 1.18rem;
    margin-bottom: 0.4rem;
  }
`;

export const TemplateBody = styled.div`
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: visible; /* avoid clipping and let layout flow */

  p {
    font-family: var(--font-subtitle);
    font-size: clamp(0.95rem, 2.8vw, 1.05rem);
    line-height: 1.45;
    margin: 0 0 1rem 0;
    text-align: center;
    color: var(--color-text-primary);
  }

  @media only screen and (max-width: 768px) {
    justify-content: flex-start;
    overflow: visible; /* child scroll areas managed explicitly */
  }
  @media only screen and (max-width: 420px) {
    p {
      font-size: 0.95rem;
    }
  }
`;
/* Narrow phone tweaks are applied within component media queries above */

export const TemplateFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  margin-top: 0.5rem;
`;

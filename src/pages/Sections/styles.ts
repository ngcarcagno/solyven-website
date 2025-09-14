import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
  
  /* Estilos específicos para el título de About - SOBRESCRIBIR todos los estilos */
  .about-title,
  .about-title h6,
  .about-title > * {
    font-family: var(--font-title) !important;
    font-size: 1.5rem !important;
    font-weight: 900 !important;
    color: var(--color-text-primary) !important;
    text-transform: uppercase !important;
    letter-spacing: 0.1em !important;
    margin: 0 !important;
    margin-bottom: 1rem !important;
    padding: 0 !important;
    line-height: 1.2 !important;
    
    @media (max-width: 768px) {
      font-size: 1.3rem !important;
      margin-bottom: 0.8rem !important;
    }
    
    @media (max-width: 480px) {
      font-size: 1.1rem !important;
      margin-bottom: 0.6rem !important;
    }
  }
`;

export const AboutTextContainer = styled.div`
  margin-bottom: 1rem;
  flex-shrink: 0;
  
  p {
    font-family: var(--font-subtitle);
    font-size: var(--size-body);
    color: var(--color-text-primary);
    line-height: 1.6;
    margin: 0;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 0.8rem;
    
    p {
      font-size: var(--size-min-para);
    }
  }
`;

export const BulletsContainer = styled.div`
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--glass-radius);
  backdrop-filter: blur(var(--glass-blur));
  padding: 1.2rem;
  box-shadow: var(--glass-shadow-v2);
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem;
  }
`;

export const BulletItem = styled.div`
  font-family: var(--font-base);
  font-size: var(--size-body);
  color: var(--color-text-primary);
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  padding-left: 1.5rem;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:before {
    content: "•";
    color: var(--color-secondary);
    font-weight: bold;
    position: absolute;
    left: 0;
    top: 0.75rem;
  }
  
  @media (max-width: 768px) {
    font-size: var(--size-min-para);
    padding: 0.5rem 0;
    padding-left: 1.2rem;
    
    &:before {
      top: 0.5rem;
    }
  }
`;

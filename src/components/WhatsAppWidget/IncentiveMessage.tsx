import React from "react";
import styled from "styled-components";

const IncentiveContainer = styled.div`
  position: absolute;
  bottom: clamp(5rem, 12vh, 7rem); /* Fluid bottom spacing */
  right: clamp(4rem, 8vw, 6rem); /* Fluid right spacing */
  background: linear-gradient(135deg, rgba(15, 15, 15, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%);
  border: 1px solid rgba(0, 53, 122, 0.2);
  border-radius: clamp(0.75rem, 1.5vw, 1rem); /* Fluid border radius */
  padding: clamp(1rem, 2vh, 1.25rem) clamp(1.25rem, 3vw, 1.5rem); /* Fluid padding */
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05);
  display: block; /* Asegurar display block */
  text-align: left; /* Alineación por defecto */

  max-width: clamp(18rem, 35vw, 22rem); /* Fluid max width 288px to 352px */
  min-width: clamp(16rem, 30vw, 20rem); /* Fluid min width 256px to 320px */
  animation: slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 9998;
  pointer-events: none; /* No bloquear interacciones del usuario */

  /* Permitir interacciones solo en el botón de cerrar */
  button {
    pointer-events: auto;
  }

  /* Speech bubble arrow */
  &::after {
    content: "";
    position: absolute;
    bottom: 25px;
    right: -8px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 0 8px 16px;
    border-color: transparent transparent transparent rgba(15, 15, 15, 0.95);
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(20px) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  /* Mobile - posición horizontal debajo de todo */
  @media (max-width: 768px) {
    position: fixed; /* Asegurar posición fixed */
    bottom: 80px; /* Debajo del widget con espacio */
    left: 0.5rem; /* Margen mínimo del lado izquierdo */
    right: 0.5rem; /* Margen mínimo del lado derecho */
    top: auto; /* Reset top */
    max-width: none; /* Permitir ancho completo */
    min-width: 280px; /* Ancho mínimo para evitar texto vertical */
    width: calc(100vw - 1rem); /* Ancho casi completo de la pantalla */
    padding: 0.75rem 1rem;
    transform: none; /* Sin transformación para evitar conflictos */
    z-index: 9997; /* Menor que el widget pero mayor que el contenido */
    display: block; /* Asegurar display block en mobile */
    text-align: center; /* Centrar texto en mobile */
    box-sizing: border-box; /* Incluir padding en el ancho */

    /* Quitar la flecha en mobile ya que está debajo */
    &::after {
      display: none;
    }
  }

  @media (max-width: 480px) {
    left: 0.25rem; /* Margen aún más pequeño en pantallas muy pequeñas */
    right: 0.25rem;
    width: calc(100vw - 0.5rem); /* Casi ancho completo */
    min-width: 250px; /* Ancho mínimo reducido pero suficiente */
    bottom: 70px; /* Más cerca del botón en pantallas pequeñas */
    padding: 0.75rem 0.875rem;
    word-wrap: break-word; /* Evitar texto cortado */
    overflow-wrap: break-word; /* Compatibilidad adicional */
    hyphens: auto; /* Permitir guiones automáticos */
    white-space: normal; /* Asegurar que el texto se envuelva normalmente */
    box-sizing: border-box; /* Incluir padding y border en el ancho */
  }
`;

const IncentiveText = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(0.8rem, 2vw, 0.95rem); /* Fluid font size ligeramente más grande */
  line-height: clamp(1.4, 0.3vw + 1.3, 1.6); /* Mejor línea de altura */
  font-weight: 500;
  word-wrap: break-word; /* Evitar texto cortado */
  overflow-wrap: break-word; /* Compatibilidad */
  hyphens: auto; /* Guiones automáticos */
  white-space: normal; /* Asegurar que el texto se ajuste normalmente */
  text-align: center; /* Centrar texto en mobile */

  @media (max-width: 768px) {
    font-size: 0.875rem; /* Tamaño optimizado para mobile */
    line-height: 1.5;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem; /* Tamaño fijo más pequeño en móviles muy pequeños */
    line-height: 1.4;
  }

  .highlight {
    color: var(--color-secondary);
    font-weight: 600;
  }
`;

const CloseIncentive = styled.button`
  position: absolute;
  top: clamp(-0.25rem, -0.5vh, -0.2rem); /* Fluid top position */
  right: clamp(-0.25rem, -0.5vw, -0.2rem); /* Fluid right position */
  width: clamp(1.125rem, 2.5vw, 1.5rem); /* Fluid width */
  height: clamp(1.125rem, 2.5vw, 1.5rem); /* Fluid height */
  border: none;
  background: rgba(239, 68, 68, 0.9);
  border-radius: 50%;
  color: white;
  font-size: clamp(0.65rem, 1.2vw, 0.8rem); /* Fluid font size */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(239, 68, 68, 1);
    transform: scale(1.1);
  }
`;

interface IncentiveMessageProps {
  onClose: () => void;
  message: string;
}

const IncentiveMessage: React.FC<IncentiveMessageProps> = ({ onClose, message }) => {
  return (
    <IncentiveContainer>
      <CloseIncentive onClick={onClose}>×</CloseIncentive>
      <IncentiveText>
        {message.split("|").map((part, index) =>
          index % 2 === 1 ? (
            <span key={index} className="highlight">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </IncentiveText>
    </IncentiveContainer>
  );
};

export default IncentiveMessage;

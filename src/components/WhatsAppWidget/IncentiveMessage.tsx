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

  max-width: clamp(18rem, 35vw, 22rem); /* Fluid max width 288px to 352px */
  min-width: clamp(16rem, 30vw, 20rem); /* Fluid min width 256px to 320px */
  animation: slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 9998;

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

  /* Mobile - posición sobre el botón sin bloquear scroll */
  @media (max-width: 768px) {
    bottom: clamp(5.5rem, 12vh, 7.5rem); /* Fluid mobile bottom */
    right: clamp(0.5rem, 2vw, 1rem); /* Fluid mobile right */
    left: clamp(0.5rem, 2vw, 1rem); /* Fluid mobile left */
    max-width: none;
    min-width: auto;
    width: calc(100% - 90px); /* Deja espacio para el botón */
    padding: 1rem 1.25rem;

    &::after {
      bottom: -8px;
      right: 20px;
      left: auto;
      border-width: 16px 8px 0 8px;
      border-color: rgba(15, 15, 15, 0.95) transparent transparent transparent;
    }
  }

  @media (max-width: 480px) {
    width: calc(100% - 80px);
    padding: 0.875rem 1rem;
  }
`;

const IncentiveText = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(0.75rem, 1.5vw, 0.9rem); /* Fluid font size */
  line-height: clamp(1.3, 0.2vw + 1.2, 1.5); /* Fluid line height */
  font-weight: 500;

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

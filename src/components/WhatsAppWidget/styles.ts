import styled, { keyframes } from "styled-components";

// Animación de pulso para llamar la atención
const pulseGlow = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.4);
    opacity: 0.3;
  }
  100% {
    transform: scale(1.8);
    opacity: 0;
  }
`;

// Animación de aparición suave
const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

// Animación de rebote para el badge
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) scale(1);
  }
  40% {
    transform: translateY(-8px) scale(1.1);
  }
  60% {
    transform: translateY(-4px) scale(1.05);
  }
`;

export const WhatsAppContainer = styled.div`
  position: fixed;
  bottom: 1.25em; /* Proportional bottom spacing */
  right: 1.25em; /* Proportional right spacing */
  z-index: 9999;
  font-family: var(--font-button);
`;

export const WhatsAppButton = styled.button<{
  isOpen: boolean;
  showNotification: boolean;
}>`
  position: relative;
  width: 4em; /* Proportional size */
  height: 4em; /* Matching width for circle */
  border-radius: 50%;
  border: none;
  cursor: pointer;

  /* Glassmorphism effect similar to header */
  background: linear-gradient(135deg, rgba(37, 211, 102, 0.9) 0%, rgba(25, 180, 85, 0.95) 100%);

  /* WhatsApp green with tech overlay */
  box-shadow: 0 8px 32px rgba(37, 211, 102, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  color: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px) scale(1.05);
    background: linear-gradient(135deg, rgba(37, 211, 102, 1) 0%, rgba(25, 180, 85, 1) 100%);
    box-shadow: 0 12px 40px rgba(37, 211, 102, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }

  /* Rotation effect when chat is open */
  ${({ isOpen }) =>
    isOpen &&
    `
    transform: rotate(45deg);
    background: linear-gradient(135deg, 
      rgba(239, 68, 68, 0.9) 0%, 
      rgba(220, 38, 38, 0.95) 100%
    );
    box-shadow: 
      0 8px 32px rgba(239, 68, 68, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
      
    &:hover {
      transform: translateY(-2px) scale(1.05) rotate(45deg);
      background: linear-gradient(135deg, 
        rgba(239, 68, 68, 1) 0%, 
        rgba(220, 38, 38, 1) 100%
      );
    }
  `}

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;
    bottom: 16px;
    right: 16px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const NotificationBadge = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, var(--color-secondary), #ff6b35);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 1);
  animation: ${bounce} 2s infinite;
  z-index: 2;

  span {
    color: white;
    font-size: 11px;
    font-weight: 700;
    line-height: 1;
  }
`;

export const PulseAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(37, 211, 102, 0.4);
  animation: ${pulseGlow} 2s infinite;
  pointer-events: none;
  z-index: -1;
`;

export const ChatBox = styled.div`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 350px;
  max-height: 500px;
  border-radius: 16px;
  overflow: hidden;

  /* Modern glassmorphism similar to contact form */
  background: linear-gradient(180deg, rgba(15, 15, 15, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%);
  border: 1px solid rgba(0, 53, 122, 0.2);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

  animation: ${slideUp} 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    width: 300px;
    bottom: 75px;
  }

  @media (max-width: 480px) {
    width: calc(100vw - 40px);
    right: -20px;
  }
`;

export const Header = styled.div`
  padding: 1rem 1.25rem;
  background: linear-gradient(135deg, rgba(37, 211, 102, 0.9) 0%, rgba(25, 180, 85, 0.95) 100%);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);

    svg {
      width: 20px;
      height: 20px;
      color: white;
    }
  }

  .info {
    flex: 1;
    color: white;

    h4 {
      margin: 0;
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.2;
    }

    span {
      font-size: 0.8rem;
      opacity: 0.9;
      line-height: 1;
    }
  }

  .close {
    width: 32px;
    height: 32px;
    border: none;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    backdrop-filter: blur(10px);

    &:hover {
      background: rgba(255, 255, 255, 0.25);
      transform: scale(1.1);
    }

    svg {
      color: white;
    }
  }
`;

export const MessageBubble = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px 12px 12px 4px;
  padding: 0.875rem;
  margin: 1rem;
  position: relative;
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(0, 53, 122, 0.2);
  }

  /* WhatsApp-style tail */
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: -6px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 12px 12px;
    border-color: transparent transparent rgba(255, 255, 255, 0.05) transparent;
  }

  p {
    margin: 0 0 0.5rem 0;
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.9rem;
    line-height: 1.4;
    white-space: pre-wrap;
  }

  .time {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
    display: block;
    text-align: right;
  }
`;

export const SendButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-secondary), #ff6b35);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(247, 88, 0, 0.3);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(247, 88, 0, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }
`;

/* Extended styling for chat elements */
export const ChatBoxExtended = styled(ChatBox)`
  .messages {
    max-height: clamp(15rem, 25vh, 20rem); /* Fluid max height */
    overflow-y: auto;

    /* Custom scrollbar */
    &::-webkit-scrollbar {
      width: clamp(2px, 0.5vw, 4px); /* Fluid scrollbar width */
    }

    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(0, 53, 122, 0.3);
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 53, 122, 0.5);
    }
  }

  .send-section {
    padding: clamp(0.75rem, 2vh, 1rem); /* Fluid padding */
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    gap: clamp(0.5rem, 1vw, 0.75rem); /* Fluid gap */
    align-items: center;
    background: rgba(0, 0, 0, 0.2);

    input {
      flex: 1;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: clamp(1rem, 2vw, 1.25rem); /* Fluid border radius */
      padding: clamp(0.5rem, 1vh, 0.75rem) clamp(0.75rem, 2vw, 1rem); /* Fluid padding */
      color: rgba(255, 255, 255, 0.9);
      font-size: clamp(0.8rem, 1.5vw, 0.9rem); /* Fluid font size */
      outline: none;
      transition: all 0.2s ease;

      &::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }

      &:focus {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(0, 53, 122, 0.3);
        box-shadow: 0 0 0 2px rgba(0, 53, 122, 0.1);
      }
    }
  }
`;

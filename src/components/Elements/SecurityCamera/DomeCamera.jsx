import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { darken, lighten } from "./utils";

const DomeCamera = ({
  cameraColor = "#2a2a2a",
  lensColor = "#000000",
  statusColor = "#00ff40",
  label = "Cámara Dome PTZ",
  showLaser = true,
  mounted = true, // Si está montada en pared/techo
}) => {
  const cameraLensRef = useRef(null);
  const statusLightRef = useRef(null);
  const lensInnerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cameraLensRef.current || !lensInnerRef.current) return;

      // Obtén el centro de la cámara
      const rect = cameraLensRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Offset del mouse respecto al centro
      const offsetX = e.clientX - centerX;
      const offsetY = e.clientY - centerY;

      // Máximo desplazamiento en px
      const maxMove = 8;

      // Normaliza el movimiento
      const moveX = Math.max(-maxMove, Math.min(maxMove, offsetX / 8));
      const moveY = Math.max(-maxMove, Math.min(maxMove, offsetY / 8));

      // Aplica el movimiento a la pupila
      lensInnerRef.current.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`;

      // Efecto de parpadeo aleatorio
      if (Math.random() > 0.995 && statusLightRef.current) {
        statusLightRef.current.style.animation = "none";
        setTimeout(() => {
          if (statusLightRef.current) {
            statusLightRef.current.style.animation = "pulse 2s infinite";
          }
        }, 100);
      }
    };

    // Efecto de enfoque aleatorio
    const focusInterval = setInterval(() => {
      if (lensInnerRef.current) {
        lensInnerRef.current.style.transition = "all 0.5s ease";
        const size = 25 + Math.random() * 5;
        lensInnerRef.current.style.width = `${size}px`;
        lensInnerRef.current.style.height = `${size}px`;

        setTimeout(() => {
          if (lensInnerRef.current) {
            lensInnerRef.current.style.width = "25px";
            lensInnerRef.current.style.height = "25px";
          }
        }, 500);
      }
    }, 3000);

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearInterval(focusInterval);
    };
  }, []);

  return (
    <CameraContainer>
      {mounted && <MountingBracket />}
      <DomeCameraWrapper>
        <CameraDome cameraColor={cameraColor}>
          <CameraLens ref={cameraLensRef} lensColor={lensColor}>
            <LensGlass>
              <LensReflection />
              <LensInner ref={lensInnerRef} />
            </LensGlass>
          </CameraLens>
          <StatusLights>
            <CameraStatus ref={statusLightRef} statusColor={statusColor} />
            <InfraredLight />
            <InfraredLight />
          </StatusLights>
          {showLaser && <ScanEffect />}
        </CameraDome>
        <CameraLabel>{label}</CameraLabel>
      </DomeCameraWrapper>
    </CameraContainer>
  );
};

// Animaciones
const scanAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const infraredPulse = keyframes`
  0% { opacity: 0.1; }
  50% { opacity: 0.3; }
  100% { opacity: 0.1; }
`;

// Componentes estilizados
const CameraContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    height: 400px;
  }

  @media (min-width: 1200px) {
    height: 500px;
  }
`;

const MountingBracket = styled.div`
  width: 120px;
  height: 20px;
  background: linear-gradient(to bottom, #1a1a1a, #0a0a0a);
  border-radius: 3px 3px 0 0;
  margin-bottom: -5px;
  position: relative;
  z-index: 2;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 5px;
    background: #333;
    border-radius: 0 0 3px 3px;
  }
`;

const DomeCameraWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  perspective: 500px;
`;

const CameraDome = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: ${({ cameraColor }) => cameraColor};
  border-radius: 50%;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.6), inset 0 -6px 18px ${({ cameraColor }) => darken(cameraColor, 0.3)},
    inset 0 6px 18px ${({ cameraColor }) => lighten(cameraColor, 0.1)}, 0 0 35px rgba(161, 161, 161, 0.5);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 10%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    border: 2px solid rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    pointer-events: none;
  }
`;

const CameraLens = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  background: ${({ lensColor }) => lensColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 5px rgba(50, 50, 50, 0.8), inset 0 0 25px rgba(0, 0, 0, 0.9);
  transition: transform 0.1s ease;
  transform-style: preserve-3d;
  z-index: 2;
`;

const LensGlass = styled.div`
  width: 85%;
  height: 85%;
  background: radial-gradient(circle at 30% 30%, #3b4359 0%, #0e121b 90%);
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.8);
`;

const LensReflection = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  top: 20%;
  right: 20%;
`;

const LensInner = styled.div`
  position: absolute;
  width: 35%;
  height: 35%;
  background: radial-gradient(circle, #0a0e17 10%, #1e2538 70%);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-out;
`;

const StatusLights = styled.div`
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  z-index: 3;
`;

const CameraStatus = styled.div`
  width: 8px;
  height: 8px;
  background: ${({ statusColor }) => statusColor};
  border-radius: 50%;
  box-shadow: 0 0 8px ${({ statusColor }) => statusColor};
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      opacity: 0.3;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.3;
    }
  }
`;

const InfraredLight = styled.div`
  width: 6px;
  height: 6px;
  background: #ff0037;
  border-radius: 50%;
  opacity: 0.2;
  animation: ${infraredPulse} 1.5s infinite;

  &:nth-child(2) {
    animation-delay: 0.5s;
  }

  &:nth-child(3) {
    animation-delay: 1s;
  }
`;

const CameraLabel = styled.div`
  color: #c3d4ec;
  text-align: center;
  margin-top: 15px;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ScanEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.6), transparent);
    transform-origin: center;
    animation: ${scanAnimation} 4s linear infinite;
  }
`;

export default DomeCamera;

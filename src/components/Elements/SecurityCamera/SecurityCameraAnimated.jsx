import React, { useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { darken, lighten } from "./utils";

const SecurityCamera = ({
  cameraColor = "#3f0d00",
  lensColor = "#000000ff",
  statusColor = "#00ff40",
  label = "Mr.WebDev",
  showLaser = true,
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
      const maxMove = 15;

      // Normaliza el movimiento
      const moveX = Math.max(-maxMove, Math.min(maxMove, offsetX / 5));
      const moveY = Math.max(-maxMove, Math.min(maxMove, offsetY / 5));

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
      <SecurityCameraWrapper>
        <CameraBody cameraColor={cameraColor}>
          <CameraLens ref={cameraLensRef} lensColor={lensColor}>
            <LensGlass>
              <LensInner ref={lensInnerRef} />
            </LensGlass>
          </CameraLens>
          <CameraMount cameraColor={cameraColor} />
          <CameraStatus ref={statusLightRef} statusColor={statusColor} />
          {showLaser && <ScanEffect />}
        </CameraBody>
        <CameraLabel>{label}</CameraLabel>
      </SecurityCameraWrapper>
    </CameraContainer>
  );
};

// Animaciones
const scanAnimation = keyframes`
  0% { top: 0; }
  50% { top: 100%; }
  100% { top: 0; }
`;

const pulseAnimation = keyframes`
  0% { opacity: 0.7; }
  50% { opacity: 1; }
  100% { opacity: 0.7; }
`;

// Componentes estilizados
const CameraContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const SecurityCameraWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
  perspective: 500px;
`;

const CameraBody = styled.div`
  position: relative;
  width: 120px;
  height: 180px;
  border-radius: 20px;
  margin: 0 auto;

  background: linear-gradient(
    145deg,
    ${({ cameraColor }) => (typeof cameraColor === "string" ? cameraColor : "#3f0d00")},
    ${({ cameraColor }) => (typeof cameraColor === "string" ? darken(cameraColor, 0.15) : darken("#3f0d00", 0.15))}
  );
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5),
    inset 0 -5px 10px ${({ cameraColor }) => (typeof cameraColor === "string" ? darken(cameraColor, 0.3) : darken("#3f0d00", 0.3))},
    inset 0 5px 10px
      ${({ cameraColor }) => (typeof cameraColor === "string" ? lighten(cameraColor, 0.2) : lighten("#3f0d00", 0.2))};
`;

const CameraLens = styled.div`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  background: ${({ lensColor }) => lensColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 8px #131825, inset 0 0 20px rgba(0, 0, 0, 0.8);
  transition: transform 0.1s ease;
  transform-style: preserve-3d;
`;

const LensGlass = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 30%, #3b4359 0%, #0e121b 70%);
  border-radius: 50%;
  position: relative;
  overflow: hidden;
`;

const LensReflection = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  top: 15px;
  right: 15px;
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
`;

const CameraMount = styled.div`
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 30px;
  background: linear-gradient(
    145deg,
    ${({ cameraColor }) => (typeof cameraColor === "string" ? cameraColor : "#3f0d00")},
    ${({ cameraColor }) => (typeof cameraColor === "string" ? darken(cameraColor, 0.15) : darken("#3f0d00", 0.15))}
  );
  border-radius: 5px;
`;

const CameraStatus = styled.div`
  position: absolute;
  bottom: 11%;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  background: ${({ statusColor }) => statusColor};
  border-radius: 50%;
  box-shadow: 0 0 10px ${({ statusColor }) => statusColor};
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

const CameraLabel = styled.div`
  color: #c3d4ec;
  text-align: center;
  margin-top: 15px;
  font-size: 1.2rem;
  font-weight: 500;
`;

const ScanEffect = styled.div`
  position: absolute;
  top: 0;
  left: -20%;
  width: 140%;
  height: 5px;
  background: linear-gradient(to bottom, rgba(59, 130, 246, 0.8), rgba(59, 130, 246, 0.2));
  box-shadow: 0 0 24px 8px rgba(59, 130, 246, 0.7), 0 0 48px 16px rgba(59, 130, 246, 0.3);
  animation: ${scanAnimation} 12s linear infinite;
  opacity: 0.4;
  border-radius: 50%;
`;

export default SecurityCamera;

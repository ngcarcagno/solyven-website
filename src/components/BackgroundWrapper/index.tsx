import FaultyTerminalBackground from "../Backgrounds/FaultyTerminal/faultyTerminal";
import DotGridBackground from "../Backgrounds/DotGrid/DotGrid";
import { BackgroundWrapper, BackgroundContainer, BackgroundContent } from "./BackgroundWrapper";
import { ReactNode } from "react";

interface BackgroundWrapperProps {
  children: ReactNode;
}

export const BackgroundFaultyTerminal = ({ children }: BackgroundWrapperProps) => (
  <BackgroundWrapper>
    <BackgroundContainer>
      <FaultyTerminalBackground
        className=""
        tint="#5F0807"
        scale={2}
        digitSize={3}
        noiseAmp={1}
        brightness={0.6}
        scanlineIntensity={0.5}
        curvature={0.2}
        mouseReact={true}
        mouseStrength={2}
        pageLoadAnimation={true}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </BackgroundContainer>
    <BackgroundContent>{children}</BackgroundContent>
  </BackgroundWrapper>
);

export const BackgroundDotGrid = ({ children }: BackgroundWrapperProps) => (
  <BackgroundWrapper>
    <BackgroundContainer>
      <DotGridBackground
        className=""
        dotSize={5}
        gap={50}
        baseColor="#333333"
        activeColor="#F75800"
        proximity={120}
        shockRadius={250}
        shockStrength={7}
        resistance={750}
        returnDuration={1.5}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </BackgroundContainer>
    <BackgroundContent>{children}</BackgroundContent>
  </BackgroundWrapper>
);

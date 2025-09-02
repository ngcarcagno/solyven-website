import FaultyTerminalBackground from "../Backgrounds/FaultyTerminal/faultyTerminal";
import DotGridBackground from "../Backgrounds/DotGrid/DotGrid";
import { HeroWrapper, HeroBackground, HeroContent } from "./HeroSection";
import { ReactNode } from "react";

interface HeroSectionProps {
  children: ReactNode;
}

export const HeroSectionFaultyTerminal = ({ children }: HeroSectionProps) => (
  <HeroWrapper>
    <HeroBackground>
      <FaultyTerminalBackground
        className=""
        tint="#5F0807"
        backgroundColor="#333333"
        scale={1.5}
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
    </HeroBackground>
    <HeroContent>{children}</HeroContent>
  </HeroWrapper>
);

export const HeroSectionDotGrid = ({ children }: HeroSectionProps) => (
  <HeroWrapper>
    <HeroBackground>
      <DotGridBackground
        className=""
        dotSize={10}
        gap={15}
        baseColor="#333333"
        activeColor="#5F0807"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </HeroBackground>
    <HeroContent>{children}</HeroContent>
  </HeroWrapper>
);

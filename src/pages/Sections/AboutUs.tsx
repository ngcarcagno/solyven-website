import React from "react";
import FadeContent from "../../components/FadeContent/FadeContent";
import AboutContent from "../../content/AboutContent.json";
import {
  AboutContainer,
  AboutTextContainer,
  BulletsContainer,
  BulletItem,
} from "./styles";

interface AboutUsContentProps {
  titleComponent?: React.ReactNode;
}

const AboutUsContent = ({ titleComponent }: AboutUsContentProps) => {
  return (
    <AboutContainer>
      {/* Título animado personalizado */}
      {titleComponent && (
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          {titleComponent}
        </div>
      )}

      {/* Texto introductorio con fade */}
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <AboutTextContainer>
          <p>{AboutContent.text}</p>
        </AboutTextContainer>
      </FadeContent>

      {/* Lista de bullets con estilo glassmorphism */}
      <FadeContent
        blur={true}
        duration={1200}
        easing="ease-out"
        initialOpacity={0}
      >
        <BulletsContainer>
          {AboutContent.bullets.map((bullet, index) => (
            <BulletItem key={index}>{bullet}</BulletItem>
          ))}
        </BulletsContainer>
      </FadeContent>
    </AboutContainer>
  );
};

export default AboutUsContent;

import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import { ScrollSnapContainer } from "../../components/ContentBlock/styles";
import { HeroSectionFaultyTerminal, HeroSectionDotGrid } from "../../components/HeroSection";
import DomeCamera from "../../components/Elements/SecurityCamera/DomeCamera";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() =>
  import("../../components/ContentBlock").then((module) => ({
    default: module.default as React.ComponentType<any>,
  }))
);

const Home = () => {
  return (
    <ScrollSnapContainer>
      <ScrollToTop />
      <HeroSectionFaultyTerminal>
        <ContentBlock
          direction="right"
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          icon={
            <DomeCamera
              cameraColor="#333333"
              lensColor="#000000ff"
              statusColor="#00ff40"
              label=""
              showLaser={false}
              mounted={false}
            />
          }
          id="intro"
        />
      </HeroSectionFaultyTerminal>
      <HeroSectionDotGrid>
        <MiddleBlock
          title={MiddleBlockContent.title}
          content={MiddleBlockContent.text}
          button={MiddleBlockContent.button}
        />
      </HeroSectionDotGrid>

      <HeroSectionDotGrid>
        <ContentBlock
          direction="left"
          title={AboutContent.title}
          content={AboutContent.text}
          section={AboutContent.section}
          icon="graphs.svg"
          id="about"
        />
      </HeroSectionDotGrid>
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <Contact title={ContactContent.title} content={ContactContent.text} id="contact" />
    </ScrollSnapContainer>
  );
};

export default Home;

import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import { ScrollSnapContainer } from "../../components/ContentBlock/styles";
import {
  BackgroundFaultyTerminal,
  BackgroundDotGrid,
  BackgroundSecurity,
  BackgroundGridDistortion,
} from "../../components/BackgroundWrapper";
import DomeCamera from "../../components/Elements/SecurityCamera/DomeCamera";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

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
    <>
      <ScrollSnapContainer>
        <ScrollToTop />
        {/* Intro Section - Security Control Room Background */}
        <BackgroundGridDistortion>
          <ContentBlock
            direction="center"
            title={IntroContent.title}
            content={IntroContent.text}
            button={IntroContent.button}
            id="intro"
          />
        </BackgroundGridDistortion>

        {/* Middle Block Section */}
        <BackgroundDotGrid>
          <MiddleBlock
            title={MiddleBlockContent.title}
            content={MiddleBlockContent.text}
            button={MiddleBlockContent.button}
          />
        </BackgroundDotGrid>

        {/* About Section */}
        <BackgroundDotGrid>
          <ContentBlock
            direction="left"
            title={AboutContent.title}
            content={AboutContent.text}
            section={AboutContent.section}
            icon="graphs.svg"
            id="about"
          />
        </BackgroundDotGrid>

        {/* Mission Section */}
        <BackgroundDotGrid>
          <ContentBlock
            direction="right"
            title={MissionContent.title}
            content={MissionContent.text}
            icon="product-launch.svg"
            id="mission"
          />
        </BackgroundDotGrid>

        {/* Product Section */}
        <BackgroundDotGrid>
          <ContentBlock
            direction="left"
            title={ProductContent.title}
            content={ProductContent.text}
            icon="waving.svg"
            id="product"
          />
        </BackgroundDotGrid>

        {/* Contact Section */}
        <BackgroundDotGrid>
          <Contact title={ContactContent.title} content={ContactContent.text} id="contact" />
        </BackgroundDotGrid>
      </ScrollSnapContainer>

      {/* WhatsApp Widget - Outside ScrollSnapContainer to avoid z-index issues */}
      <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 9999, pointerEvents: "all" }}>
        <WhatsAppWidget
          phoneNumber="+5491169369090"
          companyName="Solyven Seguridad"
          replyTimeText="Usualmente responde en minutos"
          message="Hola 👋 ¿Necesitás un presupuesto?"
          sendButtonText="Enviar"
        />
      </div>
    </>
  );
};

export default Home;

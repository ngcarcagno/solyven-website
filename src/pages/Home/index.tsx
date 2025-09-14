import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import Footer from "../../components/Footer";
import { ScrollSnapContainer } from "../../components/ContentBlock/styles";
import { BackgroundDotGrid, BackgroundGridDistortion } from "../../components/BackgroundWrapper";
import CustomWhatsAppWidget from "../../components/WhatsAppWidget";
import SplitText from "../../components/TexComponents/SplitText/SplitText";
import AboutUsContent from "../Sections/AboutUs";

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

        {/* About Section - Enhanced with animated components */}
        <BackgroundDotGrid>
          <ContentBlock
            direction="center"
            title={AboutContent.title}
            content=""
            id="about"
            icon="Shield.png"
            customContent={
              <AboutUsContent
                titleComponent={
                  <SplitText
                    text={AboutContent.title}
                    className="about-title"
                    splitType="chars"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    tag="div"
                    onLetterAnimationComplete={() => {}}
                  />
                }
              />
            }
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

        {/* Middle Block Section */}
        <BackgroundDotGrid>
          <MiddleBlock
            title={MiddleBlockContent.title}
            content={MiddleBlockContent.text}
            button={MiddleBlockContent.button}
          />
        </BackgroundDotGrid>

        {/* Contact Section */}
        <BackgroundDotGrid>
          <Contact title={ContactContent.title} content={ContactContent.text} id="contact" />
        </BackgroundDotGrid>

        {/* Footer Section */}
        <div style={{ scrollSnapAlign: "end" }}>
          <Footer />
        </div>
      </ScrollSnapContainer>

      {/* Custom WhatsApp Widget - Outside ScrollSnapContainer to avoid z-index issues */}
      <CustomWhatsAppWidget
        phoneNumber="5491169369090"
        companyName="Solyven Seguridad"
        replyTimeText="Respuesta inmediata"
        message="¡Hola! 👋 ¿Necesitás un presupuesto personalizado para tu empresa?"
        context="homepage"
      />
    </>
  );
};

export default Home;

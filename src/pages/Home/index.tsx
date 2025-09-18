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
import AboutUsContent from "../Sections/AboutUs";
import ServicesContent from "../Sections/Services";
import ServicesContentData from "../../content/ServicesContent.json";

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
            animation="DecryptedText"
            button={IntroContent.button}
            id="intro"
          />
        </BackgroundGridDistortion>

        {/* About Section - Enhanced with animated components */}
        <BackgroundDotGrid>
          <ContentBlock
            direction="center"
            title=""
            content=""
            id="about"
            icon="Shield.png"
            customContent={<AboutUsContent titleComponent={<h6 className="about-title">{AboutContent.title}</h6>} />}
          />
        </BackgroundDotGrid>

        {/* Services Section - SpotlightCards */}
        <BackgroundDotGrid>
          <ContentBlock
            direction="center"
            title=""
            content=""
            id="services"
            customContent={
              <ServicesContent titleComponent={<h6 className="services-title">{ServicesContentData.title}</h6>} />
            }
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

        {/* Mission Section */}
        <BackgroundDotGrid>
          <ContentBlock
            direction="right"
            title={MissionContent.title}
            content={MissionContent.text}
            animation="SplitText"
            icon="product-launch.svg"
            id="mission"
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

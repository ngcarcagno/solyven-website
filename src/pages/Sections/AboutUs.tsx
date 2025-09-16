import React, { useEffect, useState, useRef } from "react";
import FadeContent from "../../components/FadeContent/FadeContent";
import AnimatedList from "../../components/AnimatedList/AnimatedList";
import AboutContent from "../../content/AboutContent.json";
import { AboutContainer, AboutTextContainer, BulletsContainer } from "./styles";

interface AboutUsContentProps {
  titleComponent?: React.ReactNode;
}

const AboutUsContent = ({ titleComponent }: AboutUsContentProps) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;
    let fallbackTimer: NodeJS.Timeout;
    let forceLoadTimer: NodeJS.Timeout;

    // Mostrar fallback inmediatamente después de 200ms si no hay fuentes cargadas
    fallbackTimer = setTimeout(() => {
      if (mounted && !fontsLoaded) {
        setShowFallback(true);
      }
    }, 200);

    // Forzar carga después de 2 segundos máximo
    forceLoadTimer = setTimeout(() => {
      if (mounted) {
        setFontsLoaded(true);
        setShowFallback(false);
      }
    }, 2000);

    // Intentar detectar fuentes cargadas
    const checkFonts = async () => {
      try {
        if ("fonts" in document) {
          await document.fonts.ready;
          if (mounted) {
            setFontsLoaded(true);
            setShowFallback(false);
          }
        } else {
          // Fallback para navegadores antiguos
          setTimeout(() => {
            if (mounted) {
              setFontsLoaded(true);
              setShowFallback(false);
            }
          }, 1000);
        }
      } catch (error) {
        console.warn("Font loading detection failed, using fallback:", error);
        if (mounted) {
          setFontsLoaded(true);
          setShowFallback(false);
        }
      }
    };

    checkFonts();

    // Cleanup
    return () => {
      mounted = false;
      clearTimeout(fallbackTimer);
      clearTimeout(forceLoadTimer);
    };
  }, [fontsLoaded]);

  // Intersection Observer para detectar cuando la sección es visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Forzar re-evaluación cuando la sección sea visible
          if (!fontsLoaded && !showFallback) {
            setShowFallback(true);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [fontsLoaded, showFallback]);
  return (
    <AboutContainer ref={containerRef}>
      {/* Título - siempre visible con diferentes estrategias */}
      <div className="about-title-container">
        {/* Título animado si las fuentes están listas y hay titleComponent */}
        {titleComponent && fontsLoaded && !showFallback && titleComponent}

        {/* Fallback mientras se cargan las fuentes o si no hay titleComponent */}
        {(showFallback || !titleComponent || (!fontsLoaded && !titleComponent)) && (
          <h6
            style={{
              margin: 0,
              opacity: fontsLoaded && titleComponent ? 0 : 1,
              transition: "opacity 0.3s ease",
            }}>
            {AboutContent.title}
          </h6>
        )}
      </div>

      {/* Texto introductorio con fade */}
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <AboutTextContainer>
          <p>{AboutContent.text}</p>
        </AboutTextContainer>
      </FadeContent>

      {/* Lista de bullets - VERSIÓN FUNCIONAL CON ANIMATEDLIST */}
      <BulletsContainer>
        <AnimatedList
          items={AboutContent.bullets}
          showGradients={false}
          enableArrowNavigation={false}
          displayScrollbar={false}
          className="about-bullets-list"
          itemClassName="bullet-item"
          onItemSelect={(item: string, index: number) => {
            console.log(`Selected bullet ${index}: ${item}`);
          }}
        />
      </BulletsContainer>
    </AboutContainer>
  );
};

export default AboutUsContent;

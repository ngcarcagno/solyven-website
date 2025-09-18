import React, { useEffect, useState, useRef, lazy, Suspense } from "react";
import FadeContent from "../../components/FadeContent/FadeContent";
import AnimatedList from "../../components/AnimatedList/AnimatedList";
import { Button } from "../../common/Button";
import AboutContent from "../../content/AboutContent.json";
import { AboutContainer, AboutTextContainer, BulletsContainer, DomeGlobalStyles } from "./styles";
import FullScreenModal from "../../components/Modal/FullScreenModal";

const DomeGallery = lazy(() => import("../../components/DomeGallery/DomeGallery"));

interface AboutUsContentProps {
  titleComponent?: React.ReactNode;
}

const AboutUsContent = ({ titleComponent }: AboutUsContentProps) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("dome-open");
    } else {
      document.body.classList.remove("dome-open");
    }
    return () => {
      document.body.classList.remove("dome-open");
    };
  }, [modalOpen]);

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
    <AboutContainer ref={containerRef} data-dome-open={modalOpen ? "true" : "false"} aria-hidden={modalOpen}>
      <DomeGlobalStyles />
      <div className="about-content-root" style={{ position: "relative", zIndex: 1, width: "100%" }}>
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

        {/* Centered CTA below the list - constrained to same max-width as list */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem", width: "100%" }}>
          <div style={{ width: "100%", maxWidth: 720, margin: "0 auto", display: "flex", justifyContent: "center" }}>
            <Button variant="default" onClick={() => setModalOpen(true)}>
              Explora en 3D
            </Button>
          </div>
        </div>
      </div>

      {/* Fullscreen modal with lazy-loaded DomeGallery */}
      {modalOpen && (
        <FullScreenModal onClose={() => setModalOpen(false)} transparentBackdrop={true}>
          <div style={{ width: "100vw", height: "100vh" }}>
            <Suspense fallback={<div style={{ color: "#fff" }}>Cargando galería...</div>}>
              <DomeGallery fit={0.95} fitBasis="min" minRadius={600} segments={40} />
            </Suspense>
          </div>
        </FullScreenModal>
      )}
    </AboutContainer>
  );
};

export default AboutUsContent;

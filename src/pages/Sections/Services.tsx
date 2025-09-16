import React, { useEffect, useState, useRef } from "react";
import FadeContent from "../../components/FadeContent/FadeContent";
import SpotlightCard from "../../components/SpotlightCard/SpotlightCard";
import ServicesContentData from "../../content/ServicesContent.json";
import { ServicesContainer, ServicesGrid, ServiceCard, ServiceIcon, ServiceTitle, ServiceDescription } from "./styles";

// Iconos simulados (puedes reemplazar con lucide-react o tus propios SVGs)
const IconComponents = {
  ShieldCheck: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2L3 7V12.09C3 16.81 6.72 21.09 12 22C17.28 21.09 21 16.81 21 12.09V7L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 12L11 14L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Monitor: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
      <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2" />
      <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  Package: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" stroke="currentColor" strokeWidth="2" />
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73L12 2L4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73L12 22l8-4.27A2 2 0 0 0 21 16z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <polyline points="3.27,6.96 12,12.01 20.73,6.96" stroke="currentColor" strokeWidth="2" />
      <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
};

interface ServicesContentProps {
  titleComponent?: React.ReactNode;
}

const ServicesContent = ({ titleComponent }: ServicesContentProps) => {
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
    <ServicesContainer ref={containerRef}>
      {/* Título - siempre visible con diferentes estrategias */}
      <div className="services-title-container">
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
            {ServicesContentData.title}
          </h6>
        )}
      </div>

      {/* Subtítulo y descripción */}
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <div className="services-description">
          <p className="subtitle">{ServicesContentData.subtitle}</p>
          <p className="description">{ServicesContentData.description}</p>
        </div>
      </FadeContent>

      {/* Grid de servicios con SpotlightCards */}
      <ServicesGrid>
        {ServicesContentData.services.map((service: any, index: number) => {
          const IconComponent = IconComponents[service.icon as keyof typeof IconComponents];
          return (
            <SpotlightCard
              key={index}
              className="service-spotlight-card service-item"
              spotlightColor="var(--color-detail)">
              <ServiceCard>
                <ServiceIcon>{IconComponent && <IconComponent />}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            </SpotlightCard>
          );
        })}
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default ServicesContent;

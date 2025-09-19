import React from "react";
import Div100vh from "react-div-100vh";
import styled from "styled-components";

const Full = styled(Div100vh)`
  width: 100%;
  display: block;
`;

interface FullViewportProps {
  children?: React.ReactNode;
  className?: string;
}

const FullViewport = ({ children, className }: FullViewportProps) => {
  React.useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <Full className={className} data-full-viewport="true">
      {children}
    </Full>
  );
};

export default FullViewport;

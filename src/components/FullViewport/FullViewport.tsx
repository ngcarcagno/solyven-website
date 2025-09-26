import React from "react";
import styled from "styled-components";

const Full = styled.section`
  width: 100%;
  display: block;
  height: 100dvh;
`;

interface FullViewportProps {
  children?: React.ReactNode;
  className?: string;
}

const FullViewport = ({ children, className }: FullViewportProps) => (
  <Full className={className} data-full-viewport="true">
    {children}
  </Full>
);

export default FullViewport;

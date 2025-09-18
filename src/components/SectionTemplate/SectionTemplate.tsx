import React from "react";
import { TemplateContainer, TemplateInner, TemplateTitle, TemplateBody, TemplateFooter } from "./styles";

interface SectionTemplateProps {
  title?: React.ReactNode | string;
  children?: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
}

const SectionTemplate = ({ title, children, className, footer }: SectionTemplateProps) => {
  const renderTitle = () => {
    if (!title) return null;
    // If caller passed a React element (for example a custom heading like <h6>), do not wrap it
    // to avoid invalid nesting (e.g. <h6> inside <h2>). Render raw element as provided.
    if (React.isValidElement(title)) return title;
    // Otherwise render the title inside the TemplateTitle (h2)
    return <TemplateTitle>{title}</TemplateTitle>;
  };

  return (
    <TemplateContainer className={className}>
      <TemplateInner>
        {renderTitle()}
        <TemplateBody>{children}</TemplateBody>
        {footer && <TemplateFooter>{footer}</TemplateFooter>}
      </TemplateInner>
    </TemplateContainer>
  );
};

export default SectionTemplate;

import { Row } from "antd";
import styled from "styled-components";

export const ScrollSnapContainer = styled("div")`
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  /* Oculta scrollbars en algunos navegadores */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;

export const ContentSection = styled("section")`
  position: relative;
  min-height: var(--content-min-height);
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--content-padding);

  @media only screen and (max-width: 1024px) {
    padding: var(--content-padding-mobile);
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  font-size: var(--size-body);
  color: var(--color-text-primary);
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) => (direction === "left" ? "row" : "row-reverse")};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: var(--content-wrapper-max-width);

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: var(--size-min-title);
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: var(--color-text-primary);
  font-family: var(--font-base);
`;

export const MinPara = styled("p")`
  font-size: var(--size-min-para);
  color: var(--color-text-primary);
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;

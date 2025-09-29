import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import DecryptedText from "../TexComponents/DecryptedText";
import SplitText from "../TexComponents/SplitText/SplitText";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
  IconWithHalo,
  SectionIconWrap,
} from "./styles";
import FullViewportSection from "../FullViewport/FullViewportSection";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  id,
  direction,
  customContent,
  animation,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  const isCenter = direction === "center";
  // For center sections we wrap the ContentSection inside FullViewportSection (structural)
  if (direction === "center") {
    return (
      <FullViewportSection>
        <ContentSection>
          <Fade direction="up" triggerOnce>
            <StyledRow justify="center" align="middle" id={id} direction={direction}>
              {/* Single column with icon + content together */}
              <Col
                span={24}
                style={{
                  flex: "1",
                  minHeight: 0,
                  overflow: "visible",
                }}>
                <ContentWrapper $centered={true}>
                  <div className="content-block-icon">
                    <SectionIconWrap>
                      {typeof icon === "string" ? (
                        icon.endsWith(".png") || icon.endsWith(".jpg") || icon.endsWith(".jpeg") ? (
                          <IconWithHalo>
                            <img
                              src={`${process.env.PUBLIC_URL}/img/png/${icon}`}
                              alt=""
                              className="responsive-icon-img"
                            />
                          </IconWithHalo>
                        ) : (
                          <SvgIcon src={icon} width="min(200px, 25vh)" height="min(200px, 25vh)" />
                        )
                      ) : (
                        icon
                      )}
                    </SectionIconWrap>
                  </div>

                  {title && (
                    <h6>
                      <DecryptedText
                        text={title}
                        animateOn="view"
                        revealDirection="center"
                        speed={25}
                        maxIterations={30}
                        forceOnMount={true}
                      />
                    </h6>
                  )}
                  {content && (
                    <Content>
                      <span>{content}</span>
                    </Content>
                  )}
                  {customContent}
                  <ButtonWrapper $centered={true}>
                    {typeof button === "object" &&
                      button.map((item: any, id: number) => (
                        <Button key={id} color={item.color} onClick={() => scrollTo("about")}>
                          {item.title}
                        </Button>
                      ))}
                  </ButtonWrapper>
                </ContentWrapper>
              </Col>
            </StyledRow>
          </Fade>
        </ContentSection>
      </FullViewportSection>
    );
  }
  // Non-center directions keep the original layout
  return (
    <ContentSection>
      <Fade direction={isCenter ? "up" : direction} triggerOnce>
        <StyledRow justify={isCenter ? "center" : "space-between"} align="middle" id={id} direction={direction}>
          {/* ...existing non-center layout... */}
          <>
            <Col span={11} style={{ display: "flex", alignItems: "center" }}>
              {typeof icon === "string" ? (
                icon.endsWith(".png") || icon.endsWith(".jpg") || icon.endsWith(".jpeg") ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/img/png/${icon}`}
                    alt=""
                    style={{
                      width: "min(100%, 40vh)",
                      height: "min(100%, 40vh)",
                      objectFit: "contain",
                    }}
                  />
                ) : (
                  <SvgIcon src={icon} width="min(100%, 40vh)" height="min(100%, 40vh)" />
                )
              ) : (
                icon
              )}
            </Col>
            <Col span={11} style={{ display: "flex", flexDirection: "column" }}>
              <ContentWrapper style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                <h6>
                  <DecryptedText
                    text={title}
                    animateOn="view"
                    revealDirection="center"
                    speed={45}
                    maxIterations={30}
                    forceOnMount={true}
                  />
                </h6>
                <Content>
                  <span>{content}</span>
                </Content>
                {customContent}
                {direction === "right" ? (
                  <ButtonWrapper>
                    {typeof button === "object" &&
                      button.map((item: any, id: number) => (
                        <Button key={id} color={item.color} onClick={() => scrollTo("about")}>
                          {item.title}
                        </Button>
                      ))}
                  </ButtonWrapper>
                ) : (
                  // Eliminar ServiceWrapper, dejar que el grid maneje el layout
                  <>
                    {typeof section === "object" &&
                      section
                        .reduce((rows: any[], item: any, idx: number) => {
                          if (idx % 2 === 0) rows.push([item]);
                          else rows[rows.length - 1].push(item);
                          return rows;
                        }, [])
                        .map((row: any[], rowIdx: number) => (
                          <Row
                            justify="center"
                            key={rowIdx}
                            style={{
                              width: "100%",
                              marginBottom: "2em",
                              display: "flex",
                              flexDirection: "row",
                              flexWrap: "nowrap",
                              gap: "2em",
                            }}>
                            {row.map((item: any, colIdx: number) => (
                              <Col
                                key={colIdx}
                                span={row.length === 2 ? 12 : 24}
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "center",
                                  minWidth: 0,
                                  flex: 1,
                                }}>
                                <SvgIcon src={item.icon} width="60px" height="60px" />
                                <MinTitle>{item.title}</MinTitle>
                                <MinPara>{item.content}</MinPara>
                              </Col>
                            ))}
                          </Row>
                        ))}
                  </>
                )}
              </ContentWrapper>
            </Col>
          </>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default ContentBlock;

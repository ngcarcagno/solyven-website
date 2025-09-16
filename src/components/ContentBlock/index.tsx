import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import DecryptedText from "../TexComponents/DecryptedText";
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
} from "./styles";

const ContentBlock = ({ icon, title, content, section, button, id, direction, customContent }: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction === "center" ? "up" : direction} triggerOnce>
        <StyledRow
          justify={direction === "center" ? "center" : "space-between"}
          align="middle"
          id={id}
          direction={direction}>
          {direction === "center" ? (
            <>
              <Col span={24} className="content-block-icon" style={{ flex: "0 0 auto" }}>
                {typeof icon === "string" ? (
                  icon.endsWith(".png") || icon.endsWith(".jpg") || icon.endsWith(".jpeg") ? (
                    <IconWithHalo>
                      <img src={`${process.env.PUBLIC_URL}/img/png/${icon}`} alt="" className="responsive-icon-img" />
                    </IconWithHalo>
                  ) : (
                    <SvgIcon src={icon} width="min(200px, 25vh)" height="min(200px, 25vh)" />
                  )
                ) : (
                  icon
                )}
              </Col>
              <Col
                span={24}
                style={{
                  flex: "1",
                  minHeight: 0,
                  overflow: "visible",
                }}>
                <ContentWrapper $centered={true}>
                  {title && (
                    <h6>
                      <DecryptedText
                        text={title}
                        animateOn="both"
                        revealDirection="start"
                        speed={60}
                        maxIterations={10}
                        sequential={true}
                      />
                    </h6>
                  )}
                  {content && (
                    <Content>
                      <DecryptedText
                        text={content}
                        animateOn="view"
                        revealDirection="start"
                        speed={60}
                        maxIterations={10}
                        sequential={true}
                        useOriginalCharsOnly={true}
                      />
                    </Content>
                  )}
                  {customContent}
                  <ButtonWrapper $centered={true}>
                    {typeof button === "object" &&
                      button.map(
                        (
                          item: {
                            color?: string;
                            title: string;
                          },
                          id: number
                        ) => {
                          return (
                            <Button key={id} color={item.color} onClick={() => scrollTo("about")}>
                              {item.title}
                            </Button>
                          );
                        }
                      )}
                  </ButtonWrapper>
                  {typeof section === "object" && (
                    <ServiceWrapper style={{ justifyContent: "center", flexWrap: "wrap", gap: "2rem" }}>
                      <Row justify="center" gutter={[32, 32]}>
                        {section.map(
                          (
                            item: {
                              title: string;
                              content: string;
                              icon: string;
                            },
                            id: number
                          ) => {
                            return (
                              <Col key={id} xs={24} sm={12} md={8} lg={6} style={{ textAlign: "center" }}>
                                <SvgIcon src={item.icon} width="60px" height="60px" />
                                <MinTitle>{item.title}</MinTitle>
                                <MinPara>{item.content}</MinPara>
                              </Col>
                            );
                          }
                        )}
                      </Row>
                    </ServiceWrapper>
                  )}
                </ContentWrapper>
              </Col>
            </>
          ) : (
            <>
              <Col lg={11} md={11} sm={12} xs={24} style={{ display: "flex", alignItems: "center" }}>
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
              <Col lg={11} md={11} sm={11} xs={24} style={{ display: "flex", flexDirection: "column" }}>
                <ContentWrapper style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                  <h6>
                    <DecryptedText
                      text={title}
                      animateOn="view"
                      revealDirection="center"
                      speed={45}
                      maxIterations={30}
                    />
                  </h6>
                  <Content>
                    <DecryptedText
                      text={content}
                      animateOn="view"
                      revealDirection="center"
                      speed={45}
                      maxIterations={40}
                    />
                  </Content>
                  {customContent}
                  {direction === "right" ? (
                    <ButtonWrapper>
                      {typeof button === "object" &&
                        button.map(
                          (
                            item: {
                              color?: string;
                              title: string;
                            },
                            id: number
                          ) => {
                            return (
                              <Button key={id} color={item.color} onClick={() => scrollTo("about")}>
                                {item.title}
                              </Button>
                            );
                          }
                        )}
                    </ButtonWrapper>
                  ) : (
                    <ServiceWrapper>
                      <Row justify="space-between">
                        {typeof section === "object" &&
                          section.map(
                            (
                              item: {
                                title: string;
                                content: string;
                                icon: string;
                              },
                              id: number
                            ) => {
                              return (
                                <Col key={id} span={11}>
                                  <SvgIcon src={item.icon} width="60px" height="60px" />
                                  <MinTitle>{item.title}</MinTitle>
                                  <MinPara>{item.content}</MinPara>
                                </Col>
                              );
                            }
                          )}
                      </Row>
                    </ServiceWrapper>
                  )}
                </ContentWrapper>
              </Col>
            </>
          )}
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default ContentBlock;

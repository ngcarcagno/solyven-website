import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";

const ContentBlock = ({ icon, title, content, section, button, id, direction, customContent }: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const isContactSection = id === "contact";

  return (
    <ContentSection $isContact={isContactSection}>
      <Fade direction={direction === "center" ? "up" : direction} triggerOnce>
        <StyledRow
          justify={direction === "center" ? "center" : "space-between"}
          align="middle"
          id={id}
          direction={direction}>
          {direction === "center" ? (
            <>
              <Col span={24}>
                {typeof icon === "string" ? <SvgIcon src={icon} width="200px" height="200px" /> : icon}
              </Col>
              <Col span={24}>
                <ContentWrapper $centered={true}>
                  <h6>{title}</h6>
                  <Content>{content}</Content>
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
              <Col lg={11} md={11} sm={12} xs={24}>
                {typeof icon === "string" ? <SvgIcon src={icon} width="100%" height="100%" /> : icon}
              </Col>
              <Col lg={11} md={11} sm={11} xs={24}>
                <ContentWrapper>
                  <h6>{title}</h6>
                  <Content>{content}</Content>
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

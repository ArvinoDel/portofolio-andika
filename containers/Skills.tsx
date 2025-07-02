import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";
import Marquee from "react-fast-marquee";

const Skills = () => {
  const generateSafeId = (label: string) =>
    label.toLowerCase().replace(/[^a-z0-9]/g, "");

  return (
    skillsSection && (
      <Fade duration={2000}>
        <Container className="text-center my-5 section section-lg">
          <h1 className="h1">{skillsSection.title}</h1>
          <p className="lead">{skillsSection.subTitle}</p>
          {skillsSection.data.map((section, index) => {
            return (
              <Row className="my-5" key={index}>
                <Col lg="6" className="order-2 order-lg-1">
                  <DisplayLottie animationPath={section.lottieAnimationFile} />
                </Col>
                <Col lg="6" className="order-1 order-lg-2">
                  <h3 className="h3 mb-2">{section.title}</h3>
                  <Marquee
                    gradient={false}
                    speed={50}
                    pauseOnHover={true}
                    direction="left"
                    className="skill-marquee"
                  >
                    {section.softwareSkills.map((skill, i) => {
                      const safeId = generateSafeId(skill.skillName);
                      return (
                        <Fragment key={i}>
                          <div
                            id={safeId}
                            className="mx-3 my-3 grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                          >
                            <div className="icon icon-lg icon-shape shadow-sm rounded-circle">
                              <Icon icon={skill.iconifyTag} data-inline="false" width="32" height="32" />
                            </div>
                          </div>
                          <UncontrolledTooltip
                            delay={0}
                            placement="bottom"
                            target={safeId}
                          >
                            {skill.skillName}
                          </UncontrolledTooltip>
                        </Fragment>
                      );
                    })}
                  </Marquee>

                  <div>
                    {section.skills.map((skill, i) => {
                      return <p key={i}>{skill}</p>;
                    })}
                  </div>
                </Col>
              </Row>
            );
          })}
        </Container>
      </Fade>
    )
  );
};


export default Skills;

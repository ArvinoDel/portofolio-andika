import React, { useState, useRef, useEffect } from "react";
import { SkillBars } from "../portfolio";
import { Container, Row, Progress, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import GreetingLottie from "../components/DisplayLottie";

const Proficiency = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    SkillBars && (
      <Container className="section section-lg">
        <div
          className={`mb-3 d-flex p-4 ${isMobile ? "flex-column text-center align-items-center" : "flex-row align-items-center"}`}
        >
          <div className={`${isMobile ? "mb-3" : ""}`}>
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info mx-auto">
              <i className="fa fa-wrench text-info" />
            </div>
          </div>
          <div className={`${isMobile ? "" : "pl-4"}`}>
            <h4 className="display-3 text-info">Proficiency</h4>
            <p className="text-muted mb-0">
              Here are some of the technologies I have worked with and my proficiency in them.
            </p>
          </div>
        </div>

        <Fade bottom duration={2000}>
          <Row>
            <Col lg="6">
              {SkillBars.map(skill => {
                return (
                  <div className="progress-info" key={skill.Stack}>
                    <div className="progress-label">
                      <span>{skill.Stack}</span>
                    </div>
                    <div className="progress-percentage">
                      <span>{skill.progressPercentage}%</span>
                    </div>
                    <Progress
                      max="100"
                      value={skill.progressPercentage}
                      color="info"
                      role="progressbar"
                      aria-label={skill.Stack}
                    />
                  </div>
                );
              })}
            </Col>
            <Col lg="6">
              <GreetingLottie animationPath="/lottie/build.json" />
            </Col>
          </Row>
        </Fade>
      </Container>
    )
  );
};

export default Proficiency;

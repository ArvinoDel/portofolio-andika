import React, { useEffect } from "react";
import { greetings } from "../portfolio";
import { Button, Container, Row, Col } from "reactstrap";
import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });

  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <div className="shape shape-style-1 bg-gradient-info">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="6">
                  <h1 className="display-3 text-white">
                    {greetings.title} 
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><title>badge-check</title><g fill="#327aff"><path d="M27 15a4.89 4.89 0 0 0-2.2-4.06 4.9 4.9 0 0 0-1.32-4.42 4.89 4.89 0 0 0-4.42-1.32c-0.89-1.34-2.41-2.2-4.06-2.2s-3.17 0.85-4.06 2.2c-1.58-0.32-3.26 0.15-4.42 1.32s-1.64 2.84-1.32 4.41c-1.34 0.89-2.2 2.42-2.2 4.07s0.85 3.17 2.2 4.06c-0.32 1.58 0.16 3.26 1.32 4.42s2.85 1.64 4.42 1.32c0.89 1.34 2.41 2.2 4.06 2.2s3.17-0.85 4.06-2.2a4.89 4.89 0 0 0 4.42-1.32 4.89 4.89 0 0 0 1.32-4.42 4.89 4.89 0 0 0 2.2-4.06z m-6.33-2.81l-6 7.5a1.51 1.51 0 0 1-1.09 0.56h-0.08a1.49 1.49 0 0 1-1.07-0.44l-3-3a1.5 1.5 0 1 1 2.13-2.12l1.81 1.82 4.96-6.2a1.5 1.5 0 0 1 2.34 1.88z" stroke-width="0" fill="#327aff"></path></g></svg>
                  </h1>

                  <p className="lead text-white">{greetings.description}</p>
                  <SocialLinks />
                  {greetings.resumeLink && (
                    <div className="btn-wrapper my-4">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        href={greetings.resumeLink}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-file" />
                        </span>
                        <span className="btn-inner--text">See My Resume</span>
                      </Button>
                    </div>
                  )}
                </Col>
                <Col lg="6">
                  <GreetingLottie animationPath="/lottie/coding.json" />
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        {/* 1st Hero Variation */}
      </div>
    </main>
  );
};

export default Greetings;

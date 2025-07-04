import React, { useEffect, useState, useRef } from "react";
import { greetings } from "../portfolio";
import { Button, Container, Row, Col } from "reactstrap";
import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";
import Spotify from "./Spotify";

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


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
                  <h1 className="display-3 text-white p-2">{greetings.title}
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><title>badge-check</title><rect data-element="frame" x="0" y="0" width="40" height="40" rx="8" ry="8" fill="#ffffff00"></rect><g fill="#327aff" transform="translate(8 8) scale(0.6)"><path d="M36 20a6.52 6.52 0 0 0-2.93-5.41 6.53 6.53 0 0 0-1.76-5.9 6.52 6.52 0 0 0-5.9-1.76c-1.19-1.79-3.22-2.93-5.41-2.93s-4.23 1.13-5.41 2.93c-2.11-0.43-4.35 0.2-5.9 1.76s-2.19 3.79-1.76 5.89c-1.79 1.19-2.93 3.22-2.93 5.42s1.13 4.23 2.93 5.41c-0.43 2.11 0.21 4.35 1.76 5.9s3.8 2.18 5.9 1.76c1.19 1.79 3.22 2.93 5.41 2.93s4.23-1.14 5.41-2.93a6.52 6.52 0 0 0 5.9-1.76 6.52 6.52 0 0 0 1.76-5.9 6.52 6.52 0 0 0 2.93-5.41z m-8.44-3.75l-8 10a2.01 2.01 0 0 1-1.45 0.75l-0.11 0a1.99 1.99 0 0 1-1.42-0.59l-4-4a2 2 0 1 1 2.83-2.82l2.42 2.42 6.61-8.26a2 2 0 0 1 3.12 2.5z" stroke="#ffffff" stroke-width="1" fill="#327aff"></path></g></svg>
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
          {!isMobile &&
            <Spotify />
          }
        </section>
        {/* 1st Hero Variation */}
      </div>
    </main>
  );
};

export default Greetings;
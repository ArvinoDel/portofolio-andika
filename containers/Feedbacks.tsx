import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { feedbacks } from "../portfolio";
import FeedbackCard from "../components/FeedbackCard";
import Fade from "react-reveal/Fade";
// import "./FeedbackCard.css";

const INTERVAL = 30000;
const radius = 36;
const stroke = 3;
const normalizedRadius = radius - stroke / 2;
const circumference = normalizedRadius * 2 * Math.PI;

const Feedbacks = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % feedbacks.length);
    }, INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const [avatarUrls, setAvatarUrls] = useState<string[]>([]);

  useEffect(() => {
    const urls = feedbacks.map((f) => {
      const bg = Math.floor(Math.random() * 16777215).toString(16);
      return `https://ui-avatars.com/api/?name=${f.name}&background=${bg}&color=fff`;
    });
    setAvatarUrls(urls);
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAvatarClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="section py-5 bg-white">
      <Fade duration={2000}>
        <Container>
          <div
            className={`mb-3 d-flex p-4 ${isMobile ? "flex-column text-center align-items-center" : "flex-row align-items-center"}`}
          >
            <div className={`${isMobile ? "mb-3" : ""}`}>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info mx-auto">
                <i className="fa fa-star text-info" />
              </div>
            </div>
            <div className={`${isMobile ? "" : "pl-4"}`}>
              <h4 className="display-3 text-info">Feedbacks</h4>
              <p className="text-muted mb-0">
                What people are saying about my work, a collection of voices that inspire and motivate.
              </p>
            </div>
          </div>
          

          <Row className="align-items-center">
            <Col md="4">
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                {feedbacks.map((feedback, i) => (
                  <div
                    key={i}
                    className={`avatar-wrapper ${i === activeIndex ? 'active' : ''}`}
                    onClick={() => handleAvatarClick(i)}
                  >

                    <img
                      src={avatarUrls[i]}
                      alt={feedback.name}
                      className="avatar-img"
                    />
                  </div>
                ))}
              </div>
            </Col>

            <Col md="8" className="my-4 my-md-0">
              <Fade key={activeIndex} bottom duration={500}>
                <FeedbackCard {...feedbacks[activeIndex]} />
              </Fade>
            </Col>
          </Row>
        </Container>
      </Fade>
    </section>
  );
};

export default Feedbacks;
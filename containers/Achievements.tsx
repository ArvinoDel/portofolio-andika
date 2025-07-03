import React from "react";
import { Container, Row, Col } from "reactstrap";
import { achievements } from "../portfolio";
import AchievementsCards from "../components/AchievementsCards";
import Fade from "react-reveal/Fade";

const Achievements = () => {
  return (
    <section className="py-5 bg-white" id="achievements">
      <Container>
        <Fade bottom duration={800} distance="30px">
          <div className="text-center mb-5">
            <div className="d-flex flex-column align-items-center gap-3">
              <div
                className="icon icon-lg icon-shape bg-white shadow rounded-circle text-info d-flex align-items-center justify-content-center"
                style={{ width: "64px", height: "64px" }}
              >
                <i className="fa fa-trophy text-info fs-4" />
              </div>
              <div>
                <h2 className="display-5 fw-bold text-info mb-2">Achievements</h2>
                <p className="text-muted fs-5 m-0">A celebration of progress, one milestone at a time.</p>
              </div>
            </div>
          </div>
        </Fade>

        <Row className="gy-4">
          {(
            achievements.map((item, index) => (
              <Col key={index} md="6" lg="4">
                <Fade bottom delay={index * 100} duration={800} distance="20px">
                  <AchievementsCards {...item} />
                </Fade>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Achievements;

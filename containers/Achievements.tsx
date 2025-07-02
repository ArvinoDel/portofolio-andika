import React from "react";
import { Container, Row, Col } from "reactstrap";
import { achievements } from "../portfolio";
import AchievementsCards from "../components/AchievementsCards";

const Achievements = () => {
  return (
    <section className="py-5 bg-gradient-light" id="achievements">
      <Container>
        <div className="text-center mb-5">
          <h1 className="fw-bold display-5">🏆 Achievements</h1>
          <p className="text-muted fs-5">
            A celebration of progress, one milestone at a time.
          </p>
        </div>

        <Row className="gy-4">
          {achievements.map((item, index) => (
            <Col key={index} md="6" lg="4">
              <AchievementsCards {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Achievements;

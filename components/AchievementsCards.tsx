import React from "react";
import { Badge, Button, Row, Col } from "reactstrap";
import { AchievementsType } from "../types/sections";
import Fade from "react-reveal/Fade";

const AchievementsCards = ({
  title,
  issuer,
  description,
  tags = [],
  date,
  scores,
  link,
  img,
}: AchievementsType) => {
  return (
    <Fade bottom duration={800} distance="20px">
      <div className="border rounded-4 shadow-sm p-4 h-100 bg-white">
        <Row className="align-items-center g-3">
          {/* Logo kiri */}
          {img && (
            <Col xs="12" md="3" className="text-center text-md-start">
              <img
                src={img}
                alt={issuer}
                style={{
                  height: "50px",
                  maxWidth: "100%",
                  objectFit: "contain",
                  borderRadius: "0.5rem",
                }}
              />
            </Col>
          )}

          {/* Konten kanan */}
          <Col xs="12" md={img ? "9" : "12"}>
            <h5 className="fw-semibold mb-1">{title}</h5>
            <small className="text-muted d-block mb-1">{issuer}</small>

            {/* Date & Score */}
            <div className="text-secondary small mb-2">
              {date && <>📅 {date}</>}
              {scores && <> &nbsp;| 📊 {scores}</>}
            </div>

            {/* Description */}
            <p className="text-muted small mb-2">{description}</p>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="mb-2">
                {tags.map((tag, idx) => (
                  <Badge
                    key={idx}
                    pill
                    className="bg-light text-dark me-1 mb-1"
                    style={{ fontSize: "0.7rem", border: "1px solid #ddd" }}
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* CTA */}
            {link && (
              <div className="mt-3">
                <Button
                  color="primary"
                  size="sm"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </Fade>
  );
};

export default AchievementsCards;

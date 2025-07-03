import React from "react";
import { Badge, Button } from "reactstrap";
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
    <Fade bottom duration={900} distance="30px">
      <div
        className="rounded-4 shadow-sm border position-relative p-4 h-100 bg-white"
        style={{
          transition: "all 0.3s ease",
          borderColor: "#f1f3f5",
        }}
      >
        {/* Logo floating top right */}
        {img && (
          <div
            className="position-absolute top-0 end-0 m-3"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={img}
              alt={issuer}
              style={{
                maxHeight: "70%",
                maxWidth: "70%",
                objectFit: "contain",
              }}
            />
          </div>
        )}

        {/* Title */}
        <h5 className="fw-bold mb-1 text-dark">{title}</h5>
        <small className="text-muted">{issuer}</small>

        {/* Metadata */}
        <div className="d-flex flex-wrap small mt-2 mb-3 text-secondary" style={{ gap: "0.75rem" }}>
          {date && <span>📅 {date}</span>}
          {scores && <span>📊 {scores}</span>}
        </div>

        {/* Description */}
        <p className="text-muted small" style={{ minHeight: "60px" }}>{description}</p>

        {/* Tags */}
        <div className="mb-3">
          {tags.map((tag, idx) => (
            <Badge
              key={idx}
              className="me-1 mb-1 text-uppercase"
              color="light"
              style={{
                fontSize: "0.65rem",
                fontWeight: 600,
                background: "#f5f5f5",
                color: "#555",
                letterSpacing: "0.05em",
              }}
            >
              #{tag}
            </Badge>
          ))}
        </div>

        {/* Button */}
        {link && (
          <div>
            <Button
              color="dark"
              size="sm"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-pill px-3"
              style={{ fontSize: "0.8rem", fontWeight: 500 }}
            >
              View Certificate
            </Button>
          </div>
        )}
      </div>
    </Fade>
  );
};

export default AchievementsCards;

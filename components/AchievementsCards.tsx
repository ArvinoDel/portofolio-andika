import React from "react";
import { Badge, Button } from "reactstrap";
import "./AchievementsCards.css"; // custom CSS for glassmorphism
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
    <div className="achievement-card glass shadow-lg p-4 h-100 rounded-4 d-flex flex-column justify-content-between">
      <div>
        {/* Logo */}
        {img && (
          <div className="text-center mb-3">
            <img
              src={img}
              alt={issuer}
              style={{
                height: "50px",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
          </div>
        )}

        {/* Title + Issuer */}
        <h5 className="fw-bold mb-1">{title}</h5>
        <small className="text-muted">{issuer}</small>

        {/* Date + Score */}
        <div className="mt-2 mb-2">
          {date && <span className="text-secondary me-3">📅 {date}</span>}
          {scores && <span className="text-secondary">📊 {scores}</span>}
        </div>

        {/* Description */}
        <p className="small text-muted">{description}</p>

        {/* Tags */}
        <div className="mb-2">
          {tags.map((tag, idx) => (
            <Badge
              key={idx}
              color="secondary"
              pill
              className="me-1"
              style={{ fontSize: "0.7rem", background: "#e3e8f0" }}
            >
              #{tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* CTA */}
      {link && (
        <div className="mt-3 text-end">
          <Button
            color="dark"
            size="sm"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </Button>
        </div>
      )}
    </div>
  );
};

export default AchievementsCards;

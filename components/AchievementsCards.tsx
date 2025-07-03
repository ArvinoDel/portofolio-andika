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
    <Fade bottom duration={1000} distance="40px">
      <div
        className="achievement-card glass card-modern p-4 rounded-4 shadow border bg-white h-100 position-relative overflow-hidden"
        style={{ borderColor: "#e9ecef", transition: "all 0.4s ease" }}
      >
        {/* Accent Circle */}
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            width: "120px",
            height: "120px",
            background: "radial-gradient(circle, #dee2e6, transparent 70%)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />

        {/* Logo */}
        {img && (
          <div
            className="position-absolute"
            style={{
              top: "20px",
              left: "20px",
              width: "48px",
              height: "48px",
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 6px 14px rgba(0,0,0,0.08)",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={img}
              alt={issuer}
              onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
              style={{
                maxWidth: "70%",
                maxHeight: "70%",
                objectFit: "contain",
              }}
            />
          </div>
        )}

        {/* Main Content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="mt-4 pt-3">
            <h5 className="fw-semibold text-dark" style={{ fontSize: "1.25rem" }}>
              {title}
            </h5>
            <div className="text-muted fst-italic mb-2" style={{ fontSize: "0.75rem" }}>
              {issuer}
            </div>

            <div
              className="d-flex flex-wrap align-items-center text-secondary mb-3"
              style={{ fontSize: "0.8rem", gap: "1rem" }}
            >
              {date && (
                <span>
                  <i className="fa fa-calendar-alt me-1" />
                  {date}
                </span>
              )}
              {scores && (
                <span>
                  <i className="fa fa-chart-line me-1" />
                  Score: {scores}
                </span>
              )}
            </div>

            <p className="text-muted small lh-sm mb-3" style={{ minHeight: "60px" }}>
              {description}
            </p>

            {tags.length > 0 && (
              <div className="d-flex flex-wrap gap-1 mb-4">
                {tags.map((tag, idx) => (
                  <Badge
                    key={idx}
                    className="px-2 py-1"
                    pill
                    style={{
                      backgroundColor: "#f1f3f5",
                      fontSize: "0.65rem",
                      fontWeight: 500,
                      letterSpacing: "0.05em",
                      color: "#333",
                    }}
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            )}

            {link && (
              <Button
                color="dark"
                size="sm"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-pill px-3"
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  backgroundColor: "#212529",
                  border: "none",
                }}
              >
                🎓 View Certificate
              </Button>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default AchievementsCards;

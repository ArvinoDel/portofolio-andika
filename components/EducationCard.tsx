import React from "react";
import { Card, CardBody, Badge } from "reactstrap";
import { EducationType } from "../types/sections";
import Fade from "react-reveal/Fade";

const EducationCard = ({ schoolName, subHeader, duration, desc, grade, descBullets, link, img }: EducationType) => {
  return (
    <Fade bottom duration={1000} distance="20px">
      <Card className="shadow-lg--hover shadow-lg mt-4 border-0 overflow-hidden position-relative">
        {/* Subtle gradient overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
          style={{
            background: 'linear-gradient(135deg, rgba(23, 162, 184, 0.1) 0%, rgba(52, 144, 220, 0.05) 100%)',
            zIndex: 0
          }}
        />

        <CardBody className="p-4 position-relative" style={{ zIndex: 1 }}>
          <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start">
            {/* Enhanced Image Container */}
            <div className="mb-3 mb-md-0 me-md-4 position-relative">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                style={{
                  width: "80px",
                  height: "80px",
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                  border: '3px solid rgba(23, 162, 184, 0.1)'
                }}
              >
                <img
                  src={img}
                  alt={`${schoolName} logo`}
                  className="rounded-circle"
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "contain",
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                  }}
                />
              </div>
              {/* Small accent dot */}
              <div
                className="position-absolute bottom-0 end-0 rounded-circle bg-success"
                style={{ width: "16px", height: "16px", border: "2px solid white" }}
              />
            </div>

            {/* Content Section */}
            <div className="flex-grow-1 text-center text-md-start">
              {/* School Name with improved styling */}
              <div className="mb-2">
                {link ? (
                  <a
                    href={link}
                    className="text-decoration-none"
                    style={{
                      transition: 'all 0.3s ease',
                      color: '#17a2b8'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#138496';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#17a2b8';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}

                  >
                    <h5 className="mb-0 fw-bold">{schoolName}</h5>
                  </a>
                ) : (
                  <h5 className="mb-0 fw-bold text-dark">{schoolName}</h5>
                )}
              </div>

              {/* Subtitle */}
              <h6 className="text-muted mb-3 fw-normal" style={{ fontSize: '0.95rem' }}>
                {subHeader}
              </h6>

              {/* Enhanced Badges */}
              <div className="mb-3 d-flex flex-wrap justify-content-center justify-content-md-start gap-2">
                <Badge
                  color="info"
                  className="px-3 py-2 rounded-pill fw-normal"
                  style={{
                    fontSize: '0.8rem',
                    background: 'linear-gradient(135deg, #17a2b8 0%, #138496 100%)',
                    border: 'none',
                    boxShadow: '0 2px 4px rgba(23, 162, 184, 0.3)'
                  }}
                >
                  <i className="fas fa-calendar-alt me-1" />
                  {duration}
                </Badge>
                {grade && (
                  <Badge
                    color="primary"
                    className="px-3 py-2 rounded-pill fw-normal"
                    style={{
                      fontSize: '0.8rem',
                      background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
                      border: 'none',
                      boxShadow: '0 2px 4px rgba(0, 123, 255, 0.3)'
                    }}
                  >
                    <i className="fas fa-award me-1" />
                    {grade}
                  </Badge>
                )}
              </div>

              {/* Description */}
              {desc && (
                <p
                  className="description text-muted mb-3"
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    fontWeight: '400'
                  }}
                >
                  {desc}
                </p>
              )}

              {/* Enhanced Bullet Points */}
              {descBullets && descBullets.length > 0 && (
                <div className="text-start">
                  <ul
                    className="list-unstyled mb-0"
                    style={{ fontSize: '0.85rem' }}
                  >
                    {descBullets.map((bullet, index) => (
                      <li
                        key={index}
                        className="d-flex align-items-start mb-2 text-muted"
                      >
                        <div
                          className="me-2 mt-1 rounded-circle bg-info d-flex align-items-center justify-content-center"
                          style={{
                            minWidth: '6px',
                            height: '6px',
                            opacity: 0.7
                          }}
                        />
                        <span style={{ lineHeight: '1.5' }}>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </CardBody>

        {/* Bottom accent line */}
        <div
          className="position-absolute bottom-0 start-0 w-100"
          style={{
            height: '3px',
            background: 'linear-gradient(90deg, #17a2b8 0%, #007bff 100%)'
          }}
        />
      </Card>
    </Fade>
  );
};

export default EducationCard;
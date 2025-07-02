import React from "react";
import { Card, CardBody, Badge } from "reactstrap";
import { EducationType } from "../types/sections";
import Fade from "react-reveal/Fade";

const EducationCard = ({ schoolName, subHeader, duration, desc, grade, descBullets }: EducationType) => {
  return (
    <Fade bottom duration={1000} distance="20px">
      <Card className="shadow-lg--hover shadow mt-4">
        <CardBody>
          <div className="d-flex flex-column flex-md-row align-items-start px-3">
            <div className="mb-3 mb-md-0 me-md-3 d-flex justify-content-center">
              <img
                src="https://smkn1-cirebon.sch.id/website_neper_laravel/public/logo-neper.png"
                alt={`${schoolName} logo`}
                className="rounded-circle"
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
            </div>
            <div className="text-center text-md-start">
              <h5 className="text-info">{schoolName}</h5>
              <h6>{subHeader}</h6>
              <Badge color="info" className="me-1">
                {duration}
              </Badge>
              {grade && (
                <Badge color="primary" className="me-1">
                  {grade}
                </Badge>
              )}
              <p className="description mt-3">{desc}</p>
              <ul className="text-start">
                {descBullets?.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default EducationCard;

import React from "react";
import { Card, CardBody, Badge } from "reactstrap";
import { EducationType } from "../types/sections";
import Fade from "react-reveal/Fade";

const EducationCard = ({ schoolName, subHeader, duration, desc, grade, descBullets}: EducationType) => {
  return (
    <Fade bottom duration={1000} distance="20px">
      <Card className="shadow-lg--hover shadow mt-4">
        <CardBody>
          <div className="d-flex align-items-start px-3">
              <img
                src="https://smkn1-cirebon.sch.id/website_neper_laravel/public/logo-neper.png"
                alt={`${schoolName} logo`}
                className="rounded-circle me-3"
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
            <div className="pl-2">
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
              <ul>
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

import React from "react";
import { Card, CardBody, Badge } from "reactstrap";
import { EducationType } from "../types/sections";
import Fade from "react-reveal/Fade";
import { link } from "fs";

const EducationCard = ({ schoolName, subHeader, duration, desc, grade, descBullets, link, img }: EducationType) => {
  return (
    <Fade bottom duration={1000} distance="20px">
      <Card className="shadow-lg--hover shadow mt-4">
        <CardBody>
          <div className="d-flex flex-column align-items-center px-3 text-center">
            {/* Image at the top */}
            <div className="mb-3">
              <img
                src={img}
                alt={`${schoolName} logo`}
                className="rounded-circle"
                style={{ width: "80px", height: "80px", objectFit: "contain" }}
              />
            </div>
            
            {/* Content below the image */}
            <div className="w-100">
              <a href={link} className="text-decoration-none">
                <h5 className="text-info">{schoolName}</h5>
              </a>
              <h6>{subHeader}</h6>
              <div className="mb-2">
                <Badge color="info" className="me-1">
                  {duration}
                </Badge>
                {grade && (
                  <Badge color="primary" className="me-1">
                    {grade}
                  </Badge>
                )}
              </div>
              <p className="description">{desc}</p>
              {descBullets && descBullets.length > 0 && (
                <ul className="text-start">
                  {descBullets.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default EducationCard;
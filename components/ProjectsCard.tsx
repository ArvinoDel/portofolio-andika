import React from "react";
import { Card, CardBody, Col, Button, Badge } from "reactstrap";
import { ProjectType } from "../types/sections";
import { motion } from "framer-motion";

const ProjectsCard = ({ name, desc, github, link, tech}: ProjectType) => {
  return (
    <Col lg="6" md="12" className="mb-4 d-flex align-items-stretch">
      <motion.div
        whileHover={{ scale: 1.015 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-100"
      >
        <Card className="shadow border-0 h-100 rounded-4 p-3">
          <CardBody className="d-flex flex-column justify-content-between h-100">
            <div>
              <h4 className="fw-bold mb-2">{name}</h4>
              <p className="text-muted">{desc}</p>

              {tech && (
                <div className="my-3 d-flex flex-wrap gap-2">
                  {tech.map((t, idx) => (
                    <Badge key={idx} color="info" pill className="text-uppercase">
                      {t}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-3 d-flex gap-2 flex-wrap">
              {github && (
                <Button
                  color="dark"
                  outline
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github me-2" />
                  GitHub
                </Button>
              )}
              {link && (
                <Button
                  color="success"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-arrow-right me-2" />
                  Go to
                </Button>
              )}
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </Col>
  );
};

export default ProjectsCard;

import React, { useState, useRef, useEffect } from "react";
import { Card, CardBody, Col, Button, Badge } from "reactstrap";
import { ProjectType } from "../types/sections";
import { motion } from "framer-motion";

const ProjectsCard = ({ name, desc, github, link, tech, img, preview }: ProjectType) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handlePreview = () => {
    setIsFlipped(!isFlipped);
  };

  const handleImageClick = () => {
    if (preview) {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Col lg="6" md="12" className="mb-4 d-flex align-items-stretch">
      <motion.div
        className="w-100"
        style={{ perspective: "1000px" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className="position-relative w-100 h-100"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            transformStyle: "preserve-3d",
            minHeight: "280px"
          }}
        >
          {/* Front Side */}
          <motion.div
            className="position-absolute w-100 h-100"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(0deg)"
            }}
          >
            <Card
              className="h-100 border-0 shadow-lg"
              style={{
                background: "linear-gradient(135deg, rgba(219, 234, 254, 0.9) 0%, rgba(191, 219, 254, 0.9) 100%)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(59, 130, 246, 0.1)",
                borderRadius: "16px",
                transition: "all 0.3s ease"
              }}
            >
              <CardBody className="d-flex flex-column justify-content-between h-100 p-4">
                <div>
                  {/* Header with Logo and Preview Button */}
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center gap-3">
                      {img && (
                        <motion.img
                          src={img}
                          alt={`${name} Logo`}
                          className="rounded-3"
                          style={{
                            width: "clamp(28px, 5vw, 36px)",
                            height: "clamp(28px, 5vw, 36px)",
                            objectFit: "contain",
                            boxShadow: "0 2px 8px rgba(59, 130, 246, 0.2)"
                          }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                      <h5 className="fw-bold mb-0 text-primary"
                        style={{ fontSize: "clamp(0.9rem, 4vw, 1.25rem)" }}>
                        {name}
                      </h5>
                    </div>

                    {/* Preview Button */}
                    <motion.button
                      className="btn btn-sm border-0 rounded-circle"
                      onClick={handlePreview}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        width: "clamp(32px, 6vw, 36px)",
                        height: "clamp(32px, 6vw, 36px)",
                        background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                        color: "white",
                        boxShadow: "0 2px 10px rgba(59, 130, 246, 0.4)"
                      }}
                    >
                      <i className="fa fa-eye" style={{ fontSize: "clamp(12px, 2.5vw, 14px)" }} />
                    </motion.button>
                  </div>

                  {/* Description */}
                  <p className="text-dark mb-3 opacity-75"
                    style={{
                      fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)",
                      lineHeight: "1.5"
                    }}>
                    {desc}
                  </p>

                  {/* Tech Stack */}
                  {tech && (
                    <div className="mb-3">
                      <div className="d-flex flex-wrap gap-2">
                        {tech.map((t, idx) => (
                          <Badge
                            key={idx}
                            className="text-uppercase fw-normal rounded-pill"
                            style={{
                              background: "rgba(59, 130, 246, 0.1)",
                              color: "#1d4ed8",
                              border: "1px solid rgba(59, 130, 246, 0.2)",
                              padding: "4px 8px",
                              fontSize: "clamp(0.6rem, 1.8vw, 0.65rem)",
                              letterSpacing: "0.5px"
                            }}
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="d-flex gap-2 mt-auto">
                  {github && (
                    <Button
                      color="light"
                      size="sm"
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-fill"
                      style={{
                        borderColor: "rgba(59, 130, 246, 0.3)",
                        color: "#1d4ed8",
                        fontSize: "clamp(0.75rem, 2vw, 0.8rem)"
                      }}
                    >
                      <i className="fa fa-github me-1" />
                      GitHub
                    </Button>
                  )}
                  {link && (
                    <Button
                      color="primary"
                      size="sm"
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-fill"
                      style={{
                        background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                        border: "none",
                        fontSize: "clamp(0.75rem, 2vw, 0.8rem)"
                      }}
                    >
                      <i className="fa fa-external-link me-1" />
                      Go To
                    </Button>
                  )}
                </div>
              </CardBody>
            </Card>
          </motion.div>

          {/* Back Side - Preview */}
          <motion.div
            className="position-absolute w-100 h-100"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)"
            }}
          >
            <Card
              className="h-100 border-0 shadow-lg"
              style={{
                background: "linear-gradient(135deg, rgba(219, 234, 254, 0.95) 0%, rgba(147, 197, 253, 0.95) 100%)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(59, 130, 246, 0.2)",
                borderRadius: "16px"
              }}
            >
              <CardBody className="d-flex flex-column justify-content-center align-items-center h-100 p-4 position-relative">
                {/* Back Button */}
                <motion.button
                  className="btn btn-sm border-0 rounded-circle position-absolute"
                  onClick={handlePreview}
                  style={{
                    top: "15px",
                    right: "15px",
                    width: "32px",
                    height: "32px",
                    background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                    color: "white",
                    fontSize: "12px"
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fa fa-times" />
                </motion.button>

                {/* Preview Content */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="text-center"
                >
                  <div className="mb-3">
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-circle mb-2"
                      style={{
                        width: "60px",
                        height: "60px",
                        background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(29, 78, 216, 0.2))",
                        border: "2px solid rgba(59, 130, 246, 0.3)"
                      }}
                    >
                      {img && (
                        <motion.img
                          src={img}
                          alt={`${name} Logo`}
                          className="rounded-3"
                          style={{
                            width: "36px",
                            height: "36px",
                            objectFit: "contain",
                            // boxShadow: "0 2px 8px rgba(59, 130, 246, 0.2)"
                          }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                  </div>

                  <h6 className="text-primary mb-2 fw-bold">Preview Mode</h6>
                  <p className="text-dark opacity-75 mb-3" style={{ fontSize: "0.85rem" }}>
                    Click on the image to view a larger preview. You can also navigate back to the project details.
                  </p>

                  {/* Placeholder for preview data */}
                  <div className="d-flex justify-content-center mb-3">
                    <motion.div
                      className="rounded-3 overflow-hidden position-relative"
                      style={{
                        width: "120px",
                        height: "80px",
                        border: "2px solid rgba(59, 130, 246, 0.3)",
                        boxShadow: "0 4px 12px rgba(59, 130, 246, 0.1)",
                        cursor: preview ? "pointer" : "default"
                      }}
                      onClick={handleImageClick}
                      whileHover={preview ? { scale: 1.05 } : {}}
                      whileTap={preview ? { scale: 0.95 } : {}}
                    >
                      {preview ? (
                        <>
                          <img
                            src={preview}
                            alt={`${name} Preview`}
                            className="w-100 h-100"
                            style={{
                              objectFit: "contain",
                              filter: "brightness(1.1)"
                            }}
                          />
                          <div
                            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                            style={{
                              background: "rgba(0, 0, 0, 0.5)",
                              opacity: 0,
                              transition: "opacity 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLElement).style.opacity = "1";
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLElement).style.opacity = "0";
                            }}
                          >
                            <i className="fa fa-expand text-white" style={{ fontSize: "16px" }} />
                          </div>

                        </>
                      ) : (
                        <div
                          className="w-100 h-100 d-flex align-items-center justify-content-center"
                          style={{
                            background: "rgba(59, 130, 246, 0.1)",
                            color: "#1d4ed8"
                          }}
                        >
                          <i className="fa fa-image" style={{ fontSize: "20px" }} />
                        </div>
                      )}
                    </motion.div>
                  </div>

                </motion.div>
              </CardBody>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>

      {showModal && (
        <motion.div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            zIndex: 9999,
            backdropFilter: "blur(5px)"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="position-relative"
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
              display: "inline-block",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={preview}
              alt={`${name} Preview`}
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain",
                display: "block"
              }}
            />
            <motion.button
              className="btn btn-sm border-0 rounded-circle position-absolute"
              style={{
                top: "15px",
                right: "15px",
                width: "40px",
                height: "40px",
                background: "rgba(0, 0, 0, 0.7)",
                color: "white",
                fontSize: "16px"
              }}
              onClick={closeModal}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fa fa-times" />
            </motion.button>
          </motion.div>
        </motion.div>
      )}

    </Col>
  );
};

export default ProjectsCard;

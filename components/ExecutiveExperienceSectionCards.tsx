import React from "react";
import { Row, Col, Card, CardBody, CardTitle, CardText, Fade } from "reactstrap";
import { motion } from "framer-motion";
import { ExecutiveExperiencesType } from "../types/sections";
import { executiveexperiences } from "../portfolio";

interface ExecutiveExperienceSectionCardsProps {
  isVisible: boolean;
}

// 💡 Motion variants for card animation
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  })
};

// 💡 Modular style constants
const styles = {
  card: {
    base: {
      borderRadius: "12px",
      border: "1px solid #e5e7eb",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#ffffff",
      height: "100%",
      position: "relative" as const,
      cursor: "pointer",
      overflow: "hidden"
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)"
    },
    line: {
      position: "absolute" as const,
      top: "0",
      left: "0",
      right: "0",
      height: "4px",
      borderRadius: "12px 12px 0 0"
    }
  },
  icon: {
    container: {
      width: "44px",
      height: "44px",
      borderRadius: "10px",
      backgroundColor: "#f3f4f6",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "20px",
      marginBottom: "16px",
      border: "1px solid #e5e7eb"
    }
  },
  text: {
    timeframe: {
      fontSize: "12px",
      fontWeight: 500,
      color: "#6b7280",
      backgroundColor: "#f9fafb",
      border: "1px solid #e5e7eb",
      borderRadius: "6px",
      padding: "4px 8px",
      whiteSpace: "nowrap" as const
    },
    title: {
      fontSize: "16px",
      fontWeight: 600,
      color: "#111827",
      marginBottom: "6px",
      lineHeight: "1.3"
    },
    organization: {
      fontSize: "14px",
      fontWeight: 500,
      color: "#374151",
      marginBottom: "12px",
      lineHeight: "1.4"
    },
    location: {
      fontSize: "13px",
      color: "#6b7280",
      marginBottom: "14px",
      display: "flex" as const,
      alignItems: "center",
      gap: "6px"
    },
    locationIcon: {
      fontSize: "12px",
      color: "#8b5cf6"
    },
    description: {
      fontSize: "14px",
      color: "#4b5563",
      lineHeight: "1.5",
      margin: "0"
    }
  },
  layout: {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "16px"
    },
    leftColumn: {
      display: "flex",
      flexDirection: "column" as const
    }
  }
};

const ExecutiveExperienceSectionCards: React.FC<ExecutiveExperienceSectionCardsProps> = ({ isVisible }) => {
  return (
    <Row className="g-4">
      {executiveexperiences.map((exp, index) => (
        <Col key={exp.title} lg={4} md={6} className="d-flex">
          <motion.div
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            whileHover={styles.card.hover}
            style={styles.card.base}
          >
            <div style={{ ...styles.card.line, backgroundColor: exp.color }} />

            <CardBody style={{ padding: "20px" }}>
              <div style={styles.layout.header}>
                <div style={styles.layout.leftColumn}>
                  <div style={styles.icon.container}>
                    <img
                      src={exp.icon}
                      alt="Experience Icon"
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </div>
                </div>

                <div style={styles.text.timeframe}>{exp.timeframe}</div>
              </div>

              <CardTitle style={styles.text.title}>{exp.title}</CardTitle>

              <div style={styles.text.organization}>{exp.organization}</div>

              <div style={styles.text.location}>
                <span style={styles.text.locationIcon}>📍</span>
                {exp.location}
              </div>

              <CardText style={styles.text.description}>
                {exp.description}
              </CardText>
            </CardBody>
          </motion.div>
        </Col>
      ))}
    </Row>
  );
};

export default ExecutiveExperienceSectionCards;

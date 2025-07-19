import React from "react";
import { Row, Col, Card, CardBody, CardTitle, CardText, Fade } from "reactstrap";
import { motion, AnimatePresence } from "framer-motion";
import { ExecutiveExperiencesType } from "../types/sections";
import { executiveexperiences } from "../portfolio";

interface ExecutiveExperienceSectionCardsProps {
  isVisible: boolean;
  isExpanding: boolean;
  showAllCards: boolean;
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

// 💡 Additional card variants for expanding animation
const expandingCardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: (i - 3) * 0.15, // Delay based on position after first 3 cards
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
      scale: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }),
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.6, 1]
    }
  }
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
  },
  expandingSection: {
    marginTop: "2rem",
    position: "relative" as const
  },
  sectionDivider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "2rem 0 1.5rem",
    gap: "1rem"
  },
  dividerLine: {
    height: "2px",
    width: "60px",
    background: "linear-gradient(90deg, #87ceeb 0%, #4a90e2 100%)",
    borderRadius: "1px"
  },
  dividerText: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#4a90e2",
    backgroundColor: "#ffffff",
    padding: "0 16px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.5px"
  }
};

const ExecutiveExperienceSectionCards: React.FC<ExecutiveExperienceSectionCardsProps> = ({ 
  isVisible, 
  isExpanding, 
  showAllCards 
}) => {
  // Split experiences into initial 3 and additional ones
  const initialCards = executiveexperiences.slice(0, 3);
  const additionalCards = executiveexperiences.slice(3);

  const CardComponent = ({ exp, index, isAdditional = false }: { 
    exp: ExecutiveExperiencesType, 
    index: number, 
    isAdditional?: boolean 
  }) => (
    <Col key={`${exp.title}-${index}`} lg={4} md={6} className="d-flex">
      <motion.div
        custom={index}
        variants={isAdditional ? expandingCardVariants : cardVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        exit={isAdditional ? "exit" : undefined}
        whileHover={styles.card.hover}
        style={styles.card.base}
        layout
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
  );

  return (
    <div>
      {/* Initial 3 cards - always visible */}
      <Row className="g-4">
        {initialCards.map((exp, index) => (
          <CardComponent 
            key={exp.title} 
            exp={exp} 
            index={index} 
            isAdditional={false}
          />
        ))}
      </Row>

      {/* Additional cards with animation */}
      <AnimatePresence mode="wait">
        {showAllCards && additionalCards.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1, 
              height: "auto",
              transition: {
                height: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.4, delay: 0.2 }
              }
            }}
            exit={{ 
              opacity: 0, 
              height: 0,
              transition: {
                height: { duration: 0.4, ease: [0.4, 0, 0.6, 1] },
                opacity: { duration: 0.2 }
              }
            }}
            style={styles.expandingSection}
          >
            {/* Section divider */}
            <div style={styles.sectionDivider}>
              <div style={styles.dividerLine} />
              <div style={styles.dividerText}>
                Additional Experience
              </div>
              <div style={styles.dividerLine} />
            </div>

            {/* Additional cards */}
            <Row className="g-4">
              {additionalCards.map((exp, index) => (
                <CardComponent 
                  key={`additional-${exp.title}`} 
                  exp={exp} 
                  index={index + 3} // Continue index from where initial cards left off
                  isAdditional={true}
                />
              ))}
            </Row>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExecutiveExperienceSectionCards;
import React, { useState, useEffect, useRef } from "react";
import { Container } from "reactstrap";
import { experience } from "../portfolio";
import ExperienceCard from "../components/ExperienceCard";
import Fade from "react-reveal/Fade";
import Marquee from "react-fast-marquee";

const Experience = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  // Scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const element = containerRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;

        if (elementTop < windowHeight && elementTop + elementHeight > 0) {
          const progress = Math.max(0, Math.min(1, (scrollY + windowHeight - elementTop) / (elementHeight + windowHeight)));

          setScrollProgress(progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headingStyle = {
    background: `linear-gradient(135deg, 
  #3b82f6 0%,     /* vibrant indigo blue */
  #2563eb 25%,    /* deep brand blue */
rgb(23, 50, 61) 50%,    /* midnight navy */
  #203a43 75%,    /* deep space blue */
  #2c5364 100%    /* glacier steel blue */
    )`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundSize: "300% 300%",
    animation: "gradientShift 8s ease infinite",
    fontWeight: "800",
    letterSpacing: "-0.02em",
  };

  const cardWidth = isMobile ? "350px" : "420px";
  const cardGap = isMobile ? "1.5rem" : "2.5rem";

  if (!experience) return null;

  return (
    <>
      {/* Background Effects */}
      <div className="experience-bg-effects">
        <div className="floating-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
        </div>
      </div>

      <Fade bottom duration={1000} distance="50px">
        <section
          ref={containerRef}
          className="experience-section"
          style={{
            background: `linear-gradient(135deg, 
              rgba(255,255,255,0.1) 0%, 
              rgba(255,255,255,0.05) 100%
            )`,
            backdropFilter: "blur(20px)",
            // borderRadius: "32px",
            margin: "4rem auto",
            padding: "4rem 0",
            position: "relative",
            overflow: "hidden",
            // boxShadow: `
            //   0 25px 50px -12px rgba(0, 0, 0, 0.1),
            //   0 0 0 1px rgba(255, 255, 255, 0.1)
            // `,
          }}
        >
          {/* Progress Indicator */}
          <div
            className="progress-bar"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "4px",
              background: "linear-gradient(90deg, #667eea, #764ba2)",
              width: `${scrollProgress * 100}%`,
              transition: "width 0.3s ease",
              borderRadius: "0 4px 4px 0"
            }}
          />

          <Container fluid className="text-center">
            {/* Enhanced Header */}
            <div className="header-section" style={{ marginBottom: "3rem" }}>
              <div style={{
                display: "inline-block",
                position: "relative",
                marginBottom: "1rem"
              }}>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="ni ni-briefcase-24 text-info" />
                </div>
                <h1
                  className="display-3"
                  style={{
                    ...headingStyle,
                    fontSize: isMobile ? "3rem" : "4.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Experience
                </h1>
                <div style={{
                  position: "absolute",
                  bottom: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80px",
                  height: "4px",
                  background: "linear-gradient(90deg, #667eea, #764ba2)",
                  borderRadius: "2px",
                }} />
              </div>

              <p style={{
                fontSize: "1.2rem",
                color: "rgba(255,255,255,0.8)",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: "1.6",
                fontWeight: "300"
              }}>
                My professional journey crafting digital experiences
              </p>

              {/* Stats Counter */}
              <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "3rem",
                marginTop: "2rem",
                flexWrap: "wrap"
              }}>
                <div className="stat-item">
                  <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#667eea" }}>
                    {experience.length}+
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "rgba(0, 88, 132, 0.7)" }}>
                    Experiences
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Marquee */}
            <div style={{ position: "relative" }}>
              {/* Gradient Overlays - Only on Desktop */}
              {!isMobile && (
                <>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "100px",
                    background: "linear-gradient(90deg, rgba(0,0,0,0.1) 0%, transparent 100%)",
                    zIndex: 2,
                    pointerEvents: "none"
                  }} />
                  <div style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: "100px",
                    background: "linear-gradient(-90deg, rgba(0,0,0,0.1) 0%, transparent 100%)",
                    zIndex: 2,
                    pointerEvents: "none"
                  }} />
                </>
              )}


              <Marquee
                gradient={false}
                speed={isMobile ? 25 : 40}
                play={!isPaused}
                direction="left"
                pauseOnHover={true}
                style={{
                  padding: "2rem 0",
                }}
              >
                {experience.map((exp, index) => (
                  <div
                    key={exp.role || index}
                    onMouseEnter={() => {
                      setIsPaused(true);
                      setActiveIndex(index);
                      document.body.style.cursor = "grab";
                    }}
                    onMouseLeave={() => {
                      setIsPaused(false);
                      document.body.style.cursor = "default";
                    }}
                    className="experience-card-override"
                    style={{
                      marginRight: cardGap,
                      flexShrink: 0,
                      width: cardWidth,
                      minWidth: cardWidth,
                      maxWidth: cardWidth,
                      boxSizing: "border-box",
                      transform: `scale(${activeIndex === index ? 1.05 : 1}) translateY(${activeIndex === index ? '-10px' : '0'})`,
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      filter: `brightness(${activeIndex === index ? 1.1 : 0.95})`,
                    }}
                  >
                    <ExperienceCard {...exp} />
                  </div>
                ))}
              </Marquee>
            </div>

            {/* Navigation Dots */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
              marginTop: "2rem"
            }}>
              {experience.map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: activeIndex === index ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    background: activeIndex === index
                      ? "linear-gradient(90deg, #667eea, #764ba2)"
                      : "rgba(255,255,255,0.3)",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </Container>
        </section>
      </Fade>

      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .floating-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 {
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #667eea, #764ba2);
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 120px;
          height: 120px;
          background: linear-gradient(45deg, #f093fb, #f5576c);
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, #ffecd2, #fcb69f);
          top: 40%;
          left: 70%;
          animation-delay: 4s;
        }

        .stat-item {
          text-align: center;
          padding: 1rem;
          border-radius: 12px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
        }

        @media (max-width: 768px) {
          .experience-section {
            margin: 2rem 1rem;
            padding: 2rem 0;
            border-radius: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Experience;
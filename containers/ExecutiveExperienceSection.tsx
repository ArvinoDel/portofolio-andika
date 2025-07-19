import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Fade } from 'reactstrap';
import ExecutiveExperienceSectionCards from '../components/ExecutiveExperienceSectionCards';

const ExecutiveExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAllCards, setShowAllCards] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleToggleCards = () => {
    if (!showAllCards) {
      setIsExpanding(true);
      setShowAllCards(true);
      // Reset expanding state after animation completes
      setTimeout(() => setIsExpanding(false), 1000);
    } else {
      setShowAllCards(false);
    }
  };

  const sectionStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: `
      radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(135, 206, 235, 0.03) 0%, transparent 50%),
      linear-gradient(135deg, #ffffff 0%, #f8faff 50%, #ffffff 100%)
    `,
    paddingTop: '6rem',
    paddingBottom: '6rem',
    position: 'relative',
    overflow: 'hidden'
  };

  const backgroundPatternStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.02,
    backgroundImage: `
      radial-gradient(circle at 25% 25%, #87ceeb 2px, transparent 2px),
      radial-gradient(circle at 75% 75%, #87ceeb 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px, 40px 40px',
    zIndex: 0
  };

  const titleStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #87ceeb 0%, #4a90e2 50%, #1e40af 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '800',
    marginBottom: '1.5rem',
    letterSpacing: '-0.02em',
    lineHeight: '1.1',
    textAlign: 'center'
  };

  const subtitleStyle: React.CSSProperties = {
    color: '#4a90e2',
    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.7',
    fontWeight: '400',
    textAlign: 'center'
  };

  const dividerContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '3rem 0',
    gap: '1rem'
  };

  const dividerStyle: React.CSSProperties = {
    width: '120px',
    height: '3px',
    background: 'linear-gradient(90deg, #87ceeb 0%, #4a90e2 50%, #1e40af 100%)',
    border: 'none',
    borderRadius: '2px',
    position: 'relative',
    overflow: 'hidden'
  };

  const dividerGlowStyle: React.CSSProperties = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
    animation: 'shimmer 3s infinite'
  };

  const decorativeDotsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '8px'
  };

  const dotStyle: React.CSSProperties = {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#87ceeb',
    opacity: 0.6
  };

  const ctaButtonStyle: React.CSSProperties = {
    background: showAllCards 
      ? 'linear-gradient(135deg, #6c757d 0%, #495057 100%)'
      : 'linear-gradient(135deg, #87ceeb 0%, #4a90e2 100%)',
    borderRadius: '16px',
    padding: '16px 40px',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'white',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: showAllCards 
      ? '0 8px 32px rgba(108, 117, 125, 0.3)'
      : '0 8px 32px rgba(135, 206, 235, 0.3)',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    minWidth: '280px'
  };

  const ctaTextStyle: React.CSSProperties = {
    color: '#4a90e2',
    marginTop: '1.5rem',
    maxWidth: '600px',
    margin: '1.5rem auto 0',
    fontSize: '1rem',
    lineHeight: '1.6',
    fontWeight: '400'
  };

  const floatingElementStyle: React.CSSProperties = {
    position: 'absolute',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(135, 206, 235, 0.1) 0%, transparent 70%)',
    animation: 'float 6s ease-in-out infinite',
    zIndex: 0
  };

  const statsContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    marginBottom: '4rem',
    flexWrap: 'wrap'
  };

  const statItemStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '1.5rem',
    borderRadius: '16px',
    background: 'rgba(135, 206, 235, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(135, 206, 235, 0.1)',
    minWidth: '120px'
  };

  const statNumberStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #87ceeb 0%, #4a90e2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '0.5rem'
  };

  const statLabelStyle: React.CSSProperties = {
    color: '#4a90e2',
    fontSize: '0.9rem',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  return (
    <>
      <style jsx>{`
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(10px) rotate(-3deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @keyframes expandPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .expanding-button {
          animation: expandPulse 0.6s ease-in-out;
        }
      `}</style>

      <Fade bottom duration={1000} distance="20px">
        <div style={sectionStyle}>
          <div style={backgroundPatternStyle} />

          {/* Floating background elements */}
          <div style={{ ...floatingElementStyle, top: '10%', left: '5%', animationDelay: '0s' }} />
          <div style={{ ...floatingElementStyle, top: '60%', right: '10%', animationDelay: '2s', width: '150px', height: '150px' }} />
          <div style={{ ...floatingElementStyle, bottom: '20%', left: '15%', animationDelay: '4s', width: '100px', height: '100px' }} />

          <Container style={{ position: 'relative', zIndex: 1 }}>
            {/* Header Section */}
            <div
              className="mb-5"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <h1 style={titleStyle}>
                Executive & Representational
                <br />
                Experience
              </h1>
              <p style={subtitleStyle}>
                Leadership roles and professional representations that have shaped my career journey through innovation, collaboration, and strategic excellence.
              </p>

              <div style={dividerContainerStyle}>
                <div style={decorativeDotsStyle}>
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      style={{
                        ...dotStyle,
                        animationDelay: `${i * 0.2}s`,
                        animation: 'pulse 2s infinite'
                      }}
                    />
                  ))}
                </div>
                <div style={dividerStyle}>
                  <div style={dividerGlowStyle} />
                </div>
                <div style={decorativeDotsStyle}>
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      style={{
                        ...dotStyle,
                        animationDelay: `${(i + 3) * 0.2}s`,
                        animation: 'pulse 2s infinite'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease 0.3s'
              }}
            >
              <div style={statsContainerStyle}>
                <div style={statItemStyle}>
                  <div style={statNumberStyle}>9+</div>
                  <div style={statLabelStyle}>Years</div>
                </div>
                <div style={statItemStyle}>
                  <div style={statNumberStyle}>6</div>
                  <div style={statLabelStyle}>Positions</div>
                </div>
                <div style={statItemStyle}>
                  <div style={statNumberStyle}>50+</div>
                  <div style={statLabelStyle}>Projects</div>
                </div>
              </div>
            </div>

            {/* Experience Cards Component */}
            <ExecutiveExperienceSectionCards 
              isVisible={isVisible} 
              showAllCards={showAllCards}
              isExpanding={isExpanding}
            />

            {/* Call to Action */}
            <div
              className="text-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease 1.2s',
                marginTop: '4rem'
              }}
            >
              <button
                className={isExpanding ? 'expanding-button' : ''}
                style={ctaButtonStyle}
                onClick={handleToggleCards}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLButtonElement;
                  target.style.transform = 'translateY(-4px) scale(1.02)';
                  target.style.boxShadow = showAllCards 
                    ? '0 16px 40px rgba(108, 117, 125, 0.4)'
                    : '0 16px 40px rgba(135, 206, 235, 0.4)';
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLButtonElement;
                  target.style.transform = 'translateY(0) scale(1)';
                  target.style.boxShadow = showAllCards 
                    ? '0 8px 32px rgba(108, 117, 125, 0.3)'
                    : '0 8px 32px rgba(135, 206, 235, 0.3)';
                }}
              >
                <span style={{ position: 'relative', zIndex: 1 }}>
                  {showAllCards 
                    ? '↑ Show Less Experience' 
                    : 'View All Leadership Experience →'
                  }
                </span>
              </button>

              <p style={ctaTextStyle}>
                {showAllCards 
                  ? 'Showing complete leadership portfolio with all positions and achievements across my professional journey.'
                  : 'Connect to explore collaborative leadership possibilities and discover how we can drive innovation together through strategic partnerships and visionary thinking.'
                }
              </p>
              
              <div style={dividerContainerStyle}>
                <div style={decorativeDotsStyle}>
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      style={{
                        ...dotStyle,
                        animationDelay: `${i * 0.2}s`,
                        animation: 'pulse 2s infinite'
                      }}
                    />
                  ))}
                </div>
                <div style={dividerStyle}>
                  <div style={dividerGlowStyle} />
                </div>
                <div style={decorativeDotsStyle}>
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      style={{
                        ...dotStyle,
                        animationDelay: `${(i + 3) * 0.2}s`,
                        animation: 'pulse 2s infinite'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Fade>
    </>
  );
};

export default ExecutiveExperienceSection;
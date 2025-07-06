import React, { useState } from "react";
import { Card, Col, Row, Container } from "reactstrap";
import { GithubUserType } from "../types";
import SocialLinks from "./SocialLinks";

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleTouchStart = () => {
    window.open('https://maps.app.goo.gl/NvzYp7hHZp7Bvq3g6', '_blank'); // Opens link in a new tab
    // setTimeout(() => setIsTouched(false), 200);
  };


  return (
    <footer className="blue-sky-footer rounded-top">
      <Container fluid className="px-0">
        <Card
          className="border-0 shadow-lg"
          style={{
            background: 'linear-gradient(180deg, #87CEEB 0%, #4682B4 50%, #1E90FF 100%)',
            borderRadius: '0',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          {/* Animated Cloud Elements */}
          <div className="clouds-container">
            <div className="cloud cloud-1"></div>
            <div className="cloud cloud-2"></div>
            <div className="cloud cloud-3"></div>
            <div className="cloud cloud-4"></div>
            <div className="cloud cloud-5"></div>
          </div>

          {/* Floating Particles */}
          <div className="particles-container">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
            <div className="particle particle-6"></div>
          </div>

          {/* Sun/Moon Element */}
          <div className="sun-element">
            <div className="sun-rays"></div>
          </div>

          {/* Mobile Shimmer Effect */}
          <div className="mobile-shimmer"></div>

          <div className="position-relative" style={{ zIndex: 10 }}>
            <Container className="py-5">
              <Row className="align-items-center py-6 min-vh-60">
                {/* Mobile First: Image on top */}
                <Col lg="4" className="text-center order-1 order-lg-2 mb-4 mb-lg-0">
                  <div
                    className="profile-container position-relative d-inline-block"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    // onTouchStart={handleTouchStart}
                    style={{ animation: 'fadeInUp 1s ease-out 1s both' }}
                  >
                    {/* Floating Ring Effect - Only on desktop */}
                    <div
                      className="floating-ring d-none d-lg-block"
                      style={{
                        position: 'absolute',
                        width: '250px',
                        height: '250px',
                        border: '3px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '50%',
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) ${isHovered ? 'scale(1.1) rotate(180deg)' : 'scale(1) rotate(0deg)'}`,
                        transition: 'all 0.8s ease',
                        zIndex: 0
                      }}
                    />

                    {/* Glow Effect - Only on desktop */}
                    <div
                      className="glow-effect d-none d-lg-block"
                      style={{
                        position: 'absolute',
                        width: '200px',
                        height: '200px',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
                        borderRadius: '50%',
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) ${isHovered ? 'scale(1.2)' : 'scale(1)'}`,
                        transition: 'transform 0.5s ease',
                        zIndex: 1
                      }}
                    />

                    {/* Mobile Pulse Ring */}
                    <div
                      className="mobile-pulse-ring d-lg-none"
                      style={{
                        position: 'absolute',
                        width: '250px',
                        height: '250px',
                        border: '2px solid rgba(255, 255, 255, 0.4)',
                        borderRadius: '50%',
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) ${isTouched ? 'scale(1.1)' : 'scale(1)'}`,
                        transition: 'transform 0.3s ease',
                        zIndex: 0,
                        animation: 'mobile-pulse 3s infinite'
                      }}
                    />

                    <img
                      src={avatar_url}
                      alt="Profile"
                      className="rounded-circle shadow-lg position-relative profile-image"
                      style={{
                        width: '200px',
                        height: '200px',
                        objectFit: 'cover',
                        border: '4px solid rgba(255, 255, 255, 0.9)',
                        transform: isHovered || isTouched ? 'translateY(-8px) scale(1.05)' : 'translateY(0) scale(1)',
                        transition: 'all 0.4s ease',
                        zIndex: 2,
                        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)'
                      }}
                    />
                  </div>
                </Col>

                {/* Content section */}
                <Col lg="8" className="text-center text-lg-left order-2 order-lg-1">
                  <div className="footer-content">
                    <h2
                      className="display-4 font-weight-bold mb-3 main-heading"
                      style={{
                        textShadow: '0 6px 12px rgba(0,0,0,0.3)',
                        animation: 'fadeInUp 1s ease-out'
                      }}
                    >
                      Reach Out to me!
                    </h2>

                    <p
                      className="lead text-white mb-4 main-subtitle"
                      style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.6',
                        textShadow: '0 3px 6px rgba(0,0,0,0.5)',
                        animation: 'fadeInUp 1s ease-out 0.2s both'
                      }}
                    >
                      Have a project in mind or just want to connect?
                      <br className="d-none d-md-block" />
                      Feel free to reach out, I&apos;m always open to meaningful conversations and new opportunities.
                    </p>

                    <p
                      className="text-white mb-4 bio-text"
                      style={{
                        fontSize: '1rem',
                        lineHeight: '1.6',
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                        animation: 'fadeInUp 1s ease-out 0.4s both'
                      }}
                    >
                      {bio}
                    </p>

                    <div
                      className="d-flex align-items-center justify-content-center justify-content-lg-start mb-4"
                      style={{ animation: 'fadeInUp 1s ease-out 0.6s both' }}
                    >
                      <div
                        className="location-badge d-flex align-items-center"
                        style={{
                          background: 'rgba(255, 255, 255, 0.95)',
                          backdropFilter: 'blur(10px)',
                          border: '2px solid rgba(255, 255, 255, 0.3)',
                          borderRadius: '25px',
                          padding: '12px 20px',
                          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                          cursor: 'pointer',
                          transition: 'transform 0.2s ease'
                        }}
                        onTouchStart={handleTouchStart}
                      >
                        <i className="fa fa-map-marker mr-2" style={{ fontSize: '1.3rem', color: '#4682B4' }} />
                        <span style={{ color: '#2C3E50', fontWeight: '600' }}>{location}</span>
                      </div>
                    </div>

                    <div style={{ animation: 'fadeInUp 1s ease-out 0.8s both' }}>
                      <SocialLinks />
                    </div>
                  </div>
                </Col>
              </Row>

              {/* Bottom section */}
              <Row className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.3)' }}>
                <Col className="text-center">
                  <p className="text-white mb-0 copyright-text" style={{
                    fontSize: '0.9rem',
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                  }}>
                    © {new Date().getFullYear()} Andika SNM™. {' '}
                    {' '}All Rights Reserved.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </Card>
      </Container>

    </footer>
  );
};

export default GithubProfileCard;
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
                      Feel free to reach out, I'm always open to meaningful conversations and new opportunities.
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

      <style jsx>{`
        .blue-sky-footer {
          position: relative;
          overflow: hidden;
        }
        
        .min-vh-60 {
          min-height: 60vh;
        }
        
        /* Mobile Shimmer Effect */
        .mobile-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          animation: shimmer 6s infinite;
          pointer-events: none;
        }
        
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        @keyframes mobile-pulse {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.05);
            opacity: 0.8;
          }
        }
        
        /* Cloud Animations - Desktop Only */
        .clouds-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
        }
        
        @media (min-width: 992px) {
          .cloud {
            position: absolute;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 50px;
            opacity: 0.6;
          }
          
          .cloud:before,
          .cloud:after {
            content: '';
            position: absolute;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 50px;
          }
          
          .cloud-1 {
            width: 60px;
            height: 25px;
            top: 20%;
            left: 10%;
            animation: float-cloud 30s infinite linear;
          }
          
          .cloud-1:before {
            width: 30px;
            height: 30px;
            top: -15px;
            left: 8px;
          }
          
          .cloud-1:after {
            width: 25px;
            height: 25px;
            top: -12px;
            right: 8px;
          }
          
          .cloud-2 {
            width: 50px;
            height: 20px;
            top: 15%;
            left: 70%;
            animation: float-cloud 35s infinite linear reverse;
          }
          
          .cloud-2:before {
            width: 25px;
            height: 25px;
            top: -12px;
            left: 6px;
          }
          
          .cloud-2:after {
            width: 20px;
            height: 20px;
            top: -10px;
            right: 6px;
          }
          
          .cloud-3 {
            width: 70px;
            height: 28px;
            top: 60%;
            left: 30%;
            animation: float-cloud 40s infinite linear;
          }
          
          .cloud-3:before {
            width: 35px;
            height: 35px;
            top: -18px;
            left: 12px;
          }
          
          .cloud-3:after {
            width: 28px;
            height: 28px;
            top: -14px;
            right: 12px;
          }
        }
        
        /* Simplified Particles - Desktop Only */
        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
        }
        
        @media (min-width: 992px) {
          .particle {
            position: absolute;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 50%;
            animation: float-particle 12s infinite ease-in-out;
          }
          
          .particle-1 { width: 3px; height: 3px; top: 25%; left: 15%; animation-delay: 0s; }
          .particle-2 { width: 4px; height: 4px; top: 35%; left: 85%; animation-delay: 2s; }
          .particle-3 { width: 2px; height: 2px; top: 55%; left: 25%; animation-delay: 4s; }
        }
        
        /* Sun Element - Desktop Only */
        @media (min-width: 992px) {
          .sun-element {
            position: absolute;
            top: 10%;
            right: 10%;
            width: 40px;
            height: 40px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 70%);
            border-radius: 50%;
            animation: rotate-sun 30s infinite linear;
          }
          
          .sun-rays {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 60px;
            height: 60px;
            transform: translate(-50%, -50%);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            animation: rotate-sun 25s infinite linear reverse;
          }
        }
        
        /* Animations - Optimized */
        @keyframes float-cloud {
          0% { transform: translateX(-100px); }
          100% { transform: translateX(calc(100vw + 100px)); }
        }
        
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.4; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
        
        @keyframes rotate-sun {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        
        .footer-content h2 {
          background: linear-gradient(45deg, #ffffff, #f0f8ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Enhanced Mobile Interactions */
        .location-badge:active {
          transform: scale(0.95);
        }
        
        .profile-image:active {
          transform: translateY(-4px) scale(1.02) !important;
        }
        
        /* Responsive Design */
        @media (max-width: 991.98px) {
          .min-vh-60 {
            min-height: auto;
          }
          
          .footer-content h2.main-heading {
            font-size: 2.5rem !important;
            margin-bottom: 1.5rem;
          }
          
          .footer-content .lead.main-subtitle {
            font-size: 1.3rem !important;
            margin-bottom: 1.5rem;
            text-shadow: 0 3px 6px rgba(0,0,0,0.6) !important;
          }
          
          .bio-text {
            font-size: 1.1rem !important;
            text-shadow: 0 2px 4px rgba(0,0,0,0.6) !important;
          }
          
          .copyright-text {
            font-size: 1rem !important;
            text-shadow: 0 2px 4px rgba(0,0,0,0.6) !important;
          }
          
          .profile-container img {
            width: 200px !important;
            height: 200px !important;
            margin-bottom: 2rem;
            border-width: 5px !important;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4) !important;
          }
          
          .location-badge {
            padding: 14px 24px !important;
            font-size: 1.1rem !important;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3) !important;
          }
          
          .location-badge i {
            font-size: 1.4rem !important;
          }
          
          /* Hide decorative elements on mobile */
          .clouds-container,
          .particles-container,
          .sun-element {
            display: none;
          }
        }
        
        @media (max-width: 767.98px) {
          .footer-content h2.main-heading {
            font-size: 2.2rem !important;
          }
          
          .footer-content .lead.main-subtitle {
            font-size: 1.2rem !important;
          }
          
          .bio-text {
            font-size: 1rem !important;
          }
          
          .profile-container img {
            width: 200px !important;
            height: 200px !important;
          }
          
          .location-badge {
            font-size: 1rem !important;
            padding: 12px 20px !important;
          }
          
          .location-badge i {
            font-size: 1.3rem !important;
          }
        }
        
        @media (max-width: 575.98px) {
          .footer-content h2.main-heading {
            font-size: 2rem !important;
          }
          
          .footer-content .lead.main-subtitle {
            font-size: 1.1rem !important;
          }
          
          .profile-container img {
            width: 200px !important;
            height: 200px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default GithubProfileCard;
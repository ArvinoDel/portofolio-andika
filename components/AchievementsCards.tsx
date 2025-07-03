import React, { useEffect, useState } from "react";
import { Badge, Button } from "reactstrap";
import { AchievementsType } from "../types/sections";
import Fade from "react-reveal/Fade";

const AchievementsCards = ({
    title,
    issuer,
    description,
    tags = [],
    date,
    scores,
    link,
    img,
}: AchievementsType) => {

    const [isHovered, setIsHovered] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    // Responsive breakpoint detection
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
            setIsTablet(width >= 768 && width < 1024);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Responsive styles based on screen size
    const getResponsiveStyles = () => {
        if (isMobile) {
            return {
                cardPadding: '16px',
                innerPadding: '20px',
                borderRadius: '20px',
                innerBorderRadius: '19px',
                logoSize: '48px',
                titleSize: '1.2rem',
                descSize: '0.9rem',
                tagSize: '0.75rem',
                buttonSize: '0.85rem',
                hoverTransform: 'translateY(-4px) scale(1.01)',
                maxTagsPerRow: 2,
            };
        } else if (isTablet) {
            return {
                cardPadding: '20px',
                innerPadding: '28px',
                borderRadius: '22px',
                innerBorderRadius: '21px',
                logoSize: '56px',
                titleSize: '1.3rem',
                descSize: '0.92rem',
                tagSize: '0.78rem',
                buttonSize: '0.87rem',
                hoverTransform: 'translateY(-6px) scale(1.015)',
                maxTagsPerRow: 3,
            };
        } else {
            return {
                cardPadding: '24px',
                innerPadding: '32px',
                borderRadius: '24px',
                innerBorderRadius: '23px',
                logoSize: '64px',
                titleSize: '1.4rem',
                descSize: '0.95rem',
                tagSize: '0.8rem',
                buttonSize: '0.9rem',
                hoverTransform: 'translateY(-8px) scale(1.02)',
                maxTagsPerRow: 4,
            };
        }
    };

    const styles = getResponsiveStyles();

    return (
        <Fade bottom duration={1000} distance="40px">
            <div className="fade-bottom" style={{ padding: styles.cardPadding }}>
                <div
                    className="achievement-card position-relative overflow-hidden h-100"
                    style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: styles.borderRadius,
                        padding: '1px',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: isHovered && !isMobile ? styles.hoverTransform : 'translateY(0) scale(1)',
                        boxShadow: isHovered && !isMobile
                            ? '0 32px 64px rgba(102, 126, 234, 0.3), 0 16px 32px rgba(0, 0, 0, 0.1)'
                            : isMobile
                                ? '0 4px 16px rgba(0, 0, 0, 0.1)'
                                : '0 8px 32px rgba(0, 0, 0, 0.12)',
                    }}
                    onMouseEnter={() => !isMobile && setIsHovered(true)}
                    onMouseLeave={() => !isMobile && setIsHovered(false)}
                    onTouchStart={() => isMobile && setIsHovered(true)}
                    onTouchEnd={() => isMobile && setTimeout(() => setIsHovered(false), 150)}
                >
                    {/* Inner card with backdrop blur effect */}
                    <div
  className="h-100 w-100 position-relative overflow-hidden"
  style={{
    width: '100%',
    maxWidth: 'none',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: isMobile ? 'blur(10px)' : 'blur(20px)',
    borderRadius: styles.innerBorderRadius,
    padding: styles.innerPadding,
  }}
>

                        {/* Animated background patterns - Hide on mobile for performance */}
                        {!isMobile && (
                            <>
                                <div
                                    className="position-absolute"
                                    style={{
                                        top: '-50%',
                                        right: '-20%',
                                        width: isTablet ? '150px' : '200px',
                                        height: isTablet ? '150px' : '200px',
                                        background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
                                        borderRadius: '50%',
                                        transform: isHovered ? 'scale(1.2) rotate(45deg)' : 'scale(1) rotate(0deg)',
                                        transition: 'all 0.6s ease',
                                        zIndex: 0,
                                    }}
                                />

                                <div
                                    className="position-absolute"
                                    style={{
                                        bottom: '-30%',
                                        left: '-10%',
                                        width: isTablet ? '120px' : '150px',
                                        height: isTablet ? '120px' : '150px',
                                        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.08), transparent)',
                                        borderRadius: '50%',
                                        transform: isHovered ? 'scale(1.3) rotate(-30deg)' : 'scale(1) rotate(0deg)',
                                        transition: 'all 0.8s ease',
                                        zIndex: 0,
                                    }}
                                />
                            </>
                        )}

                        {/* Content wrapper */}
                        <div className="position-relative h-100 d-flex flex-column" style={{ zIndex: 2 }}>
                            {/* Header section with logo and status - Responsive layout */}
                            <div className={`d-flex ${isMobile ? 'flex-column' : 'align-items-start justify-content-between'} mb-${isMobile ? '3' : '4'}`}>
                                <div className={`d-flex align-items-center ${isMobile ? 'mb-2' : ''}`} style={{ gap: isMobile ? '12px' : '16px' }}>
                                    {img && !imageError && (
                                        <div
                                            className="d-flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: styles.logoSize,
                                                height: styles.logoSize,
                                                background: 'linear-gradient(135deg, #fff, #f8f9fa)',
                                                borderRadius: isMobile ? '12px' : '16px',
                                                boxShadow: isMobile ? '0 4px 16px rgba(0, 0, 0, 0.08)' : '0 8px 32px rgba(0, 0, 0, 0.1)',
                                                border: '2px solid rgba(255, 255, 255, 0.8)',
                                            }}
                                        >
                                            <img
                                                src={img}
                                                alt={issuer}
                                                onError={() => setImageError(true)}
                                                style={{
                                                    maxWidth: '70%',
                                                    maxHeight: '70%',
                                                    objectFit: 'contain',
                                                }}
                                            />
                                        </div>
                                    )}

                                    <div className="flex-grow-1 min-width-0">
                                        <div
                                            className={`d-inline-flex align-items-center px-${isMobile ? '2' : '3'} py-1 rounded-pill mb-${isMobile ? '1' : '2'}`}
                                            style={{
                                                background: 'linear-gradient(90deg, #667eea, #764ba2)',
                                                fontSize: isMobile ? '0.65rem' : '0.75rem',
                                                fontWeight: '600',
                                                color: 'white',
                                                letterSpacing: '0.5px',
                                                textTransform: 'uppercase',
                                            }}
                                        >
                                            ✨ Certified
                                        </div>
                                        <div
                                            className={`text-muted d-flex align-items-center ${isMobile ? 'flex-column align-items-start' : ''}`}
                                            style={{
                                                fontSize: isMobile ? '0.75rem' : '0.85rem',
                                                fontWeight: '500',
                                                gap: isMobile ? '2px' : '8px',
                                                lineHeight: isMobile ? '1.3' : '1.5'
                                            }}
                                        >
                                            <span className="text-truncate" style={{ maxWidth: '100%' }}>
                                                {issuer}
                                            </span>
                                            {date && (
                                                <>
                                                    {!isMobile && <span style={{ opacity: 0.5 }}>•</span>}
                                                    <span className="text-truncate" style={{ fontSize: isMobile ? '0.7rem' : '0.8rem' }}>
                                                        {date}
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {scores && (
                                    <div className="d-flex justify-content-center w-100 mb-3">
                                        <div
                                            className={`text-center px-${isMobile ? '2' : '3'} py-${isMobile ? '1' : '2'} rounded-3`}
                                            style={{
                                                background: 'linear-gradient(135deg, #00b894, #00cec9)',
                                                color: 'white',
                                                minWidth: isMobile ? '60px' : '80px',
                                                fontSize: isMobile ? '0.8rem' : '1rem',
                                            }}
                                        >
                                            <div
                                                style={{
                                                    fontSize: isMobile ? '1rem' : '1.25rem',
                                                    fontWeight: 700,
                                                    lineHeight: 1,
                                                }}
                                            >
                                                {scores}
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>

                            {/* Title - Responsive typography */}
                            <h3
                                className="fw-bold mb-3"
                                style={{
                                    fontSize: styles.titleSize,
                                    lineHeight: isMobile ? '1.3' : '1.4',
                                    color: '#2d3436',
                                    letterSpacing: '-0.02em',
                                    marginBottom: isMobile ? '8px' : '16px'
                                }}
                            >
                                {title}
                            </h3>

                            {/* Description - Responsive with line clamping */}
                            <p
                                className="text-muted mb-4 flex-grow-1"
                                style={{
                                    fontSize: styles.descSize,
                                    lineHeight: isMobile ? '1.4' : '1.6',
                                    color: '#636e72',
                                    display: '-webkit-box',
                                    WebkitLineClamp: isMobile ? 3 : 4,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    marginBottom: isMobile ? '12px' : '16px'
                                }}
                            >
                                {description}
                            </p>

                            {/* Skills tags - Responsive grid */}
                            {tags && tags.length > 0 && (
                                <div
                                    className="d-flex flex-wrap mb-4"
                                    style={{
                                        gap: isMobile ? '4px' : '8px',
                                        maxHeight: isMobile ? '60px' : 'none',
                                        overflow: isMobile ? 'hidden' : 'visible',
                                        marginBottom: isMobile ? '12px' : '16px'
                                    }}
                                >
                                    {tags.slice(0, isMobile ? 3 : tags.length).map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="d-inline-flex align-items-center rounded-pill"
                                            style={{
                                                background: idx % 2 === 0
                                                    ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(102, 126, 234, 0.2))'
                                                    : 'linear-gradient(135deg, rgba(118, 75, 162, 0.1), rgba(118, 75, 162, 0.2))',
                                                fontSize: styles.tagSize,
                                                fontWeight: '600',
                                                color: '#2d3436',
                                                border: `1px solid ${idx % 2 === 0 ? 'rgba(102, 126, 234, 0.2)' : 'rgba(118, 75, 162, 0.2)'}`,
                                                transition: 'all 0.3s ease',
                                                padding: isMobile ? '3px 8px' : '6px 12px',
                                                maxWidth: isMobile ? 'calc(33% - 3px)' : 'none',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {isMobile && tags.length > 3 && (
                                        <span
                                            className="d-inline-flex align-items-center rounded-pill"
                                            style={{
                                                background: 'rgba(0, 0, 0, 0.05)',
                                                fontSize: styles.tagSize,
                                                fontWeight: '600',
                                                color: '#666',
                                                padding: '3px 8px',
                                            }}
                                        >
                                            +{tags.length - 3}
                                        </span>
                                    )}
                                </div>
                            )}

                            {/* Action buttons - Responsive layout */}
                            {link && (
                                <div className={`d-flex ${isMobile ? 'flex-column gap-2' : 'justify-content-between align-items-center'} mt-auto`}>
                                    <button
                                        className={`btn d-flex align-items-center justify-content-center gap-2 rounded-pill border-0 ${isMobile ? 'w-100' : ''}`}
                                        style={{
                                            background: 'linear-gradient(135deg, #667eea, #764ba2)',
                                            fontSize: styles.buttonSize,
                                            fontWeight: '600',
                                            color: 'white',
                                            transition: 'all 0.3s ease',
                                            transform: isHovered && !isMobile ? 'scale(1.05)' : 'scale(1)',
                                            boxShadow: isHovered && !isMobile
                                                ? '0 8px 24px rgba(102, 126, 234, 0.4)'
                                                : '0 4px 16px rgba(102, 126, 234, 0.2)',
                                            padding: isMobile ? '10px 20px' : '8px 16px',
                                            minHeight: isMobile ? '44px' : 'auto',
                                        }}
                                        onClick={() => window.open(link, '_blank')}
                                    >
                                        <span>View Certificate</span>
                                        <svg width={isMobile ? "16" : "16"} height={isMobile ? "16" : "16"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M17 7H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Subtle shine effect - Simplified for mobile */}
                        {!isMobile && (
                            <div
                                className="position-absolute"
                                style={{
                                    top: 0,
                                    left: isHovered ? '0%' : '-100%',
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                                    transition: 'left 0.6s ease',
                                    pointerEvents: 'none',
                                    zIndex: 3,
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default AchievementsCards;

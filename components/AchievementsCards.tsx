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

    return (
        <Fade bottom duration={1000} distance="40px">
            <div className="p-4">
                <div
                    className="achievement-card position-relative overflow-hidden h-100"
                    style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '24px',
                        padding: '1px',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                        boxShadow: isHovered
                            ? '0 32px 64px rgba(102, 126, 234, 0.3), 0 16px 32px rgba(0, 0, 0, 0.1)'
                            : '0 8px 32px rgba(0, 0, 0, 0.12)',
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Inner card with backdrop blur effect */}
                    <div
                        className="h-100 position-relative overflow-hidden"
                        style={{
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(20px)',
                            borderRadius: '23px',
                            padding: '32px',
                        }}
                    >
                        {/* Animated background patterns */}
                        <div
                            className="position-absolute"
                            style={{
                                top: '-50%',
                                right: '-20%',
                                width: '200px',
                                height: '200px',
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
                                width: '150px',
                                height: '150px',
                                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.08), transparent)',
                                borderRadius: '50%',
                                transform: isHovered ? 'scale(1.3) rotate(-30deg)' : 'scale(1) rotate(0deg)',
                                transition: 'all 0.8s ease',
                                zIndex: 0,
                            }}
                        />

                        {/* Content wrapper */}
                        <div className="position-relative" style={{ zIndex: 2 }}>
                            {/* Header section with logo and status */}
                            <div className="d-flex align-items-start justify-content-between mb-4">
                                <div className="d-flex align-items-center gap-3">
                                    {img && !imageError && (
                                        <div
                                            className="d-flex align-items-center justify-content-center"
                                            style={{
                                                width: '64px',
                                                height: '64px',
                                                background: 'linear-gradient(135deg, #fff, #f8f9fa)',
                                                borderRadius: '20px',
                                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
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

                                    <div>
                                        <div
                                            className="d-inline-flex align-items-center px-3 py-1 rounded-pill mb-2"
                                            style={{
                                                background: 'linear-gradient(90deg, #667eea, #764ba2)',
                                                fontSize: '0.75rem',
                                                fontWeight: '600',
                                                color: 'white',
                                                letterSpacing: '0.5px',
                                                textTransform: 'uppercase',
                                            }}
                                        >
                                            ✨ Certified
                                        </div>
                                        <div
                                            className="text-muted d-flex align-items-center gap-2"
                                            style={{ fontSize: '0.85rem', fontWeight: '500' }}
                                        >
                                            <span>{issuer}</span>
                                            {date && (
                                                <>
                                                    <span style={{ opacity: 0.5 }}>•</span>
                                                    <span>{date}</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {scores && (
                                    <div
                                        className="text-center px-3 py-2 rounded-3"
                                        style={{
                                            background: 'linear-gradient(135deg, #00b894, #00cec9)',
                                            color: 'white',
                                            minWidth: '80px',
                                        }}
                                    >
                                        <div style={{ fontSize: '1.25rem', fontWeight: '700', lineHeight: 1 }}>
                                            {scores.split('/')[0]}
                                        </div>
                                        <div style={{ fontSize: '0.7rem', opacity: 0.9 }}>
                                            /{scores.split('/')[1]}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Title */}
                            <h3
                                className="fw-bold mb-3"
                                style={{
                                    fontSize: '1.4rem',
                                    lineHeight: '1.3',
                                    color: '#2d3436',
                                    letterSpacing: '-0.02em'
                                }}
                            >
                                {title}
                            </h3>

                            {/* Description */}
                            <p
                                className="text-muted mb-4"
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    color: '#636e72'
                                }}
                            >
                                {description}
                            </p>

                            {/* Skills tags with modern design */}
                            {tags && tags.length > 0 && (
                                <div className="d-flex flex-wrap gap-2 mb-4">
                                    {tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="d-inline-flex align-items-center px-3 py-1 rounded-pill"
                                            style={{
                                                background: idx % 2 === 0
                                                    ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(102, 126, 234, 0.2))'
                                                    : 'linear-gradient(135deg, rgba(118, 75, 162, 0.1), rgba(118, 75, 162, 0.2))',
                                                fontSize: '0.8rem',
                                                fontWeight: '600',
                                                color: '#2d3436',
                                                border: `1px solid ${idx % 2 === 0 ? 'rgba(102, 126, 234, 0.2)' : 'rgba(118, 75, 162, 0.2)'}`,
                                                transition: 'all 0.3s ease',
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Action button */}
                            {link && (
                                <div className="d-flex justify-content-between align-items-center">
                                    <Button
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="d-flex align-items-center gap-2 px-4 py-2 rounded-pill border-0"
                                        style={{
                                            background: 'linear-gradient(135deg, #667eea, #764ba2)',
                                            fontSize: '0.9rem',
                                            fontWeight: '600',
                                            color: 'white',
                                            transition: 'all 0.3s ease',
                                            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                                            boxShadow: isHovered
                                                ? '0 8px 24px rgba(102, 126, 234, 0.4)'
                                                : '0 4px 16px rgba(102, 126, 234, 0.2)',
                                        }}
                                    >
                                        <span>View Certificate</span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M17 7H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </Button>

                                    {/* Share button */}
                                    <button
                                        className="btn d-flex align-items-center justify-content-center rounded-circle border-0"
                                        style={{
                                            width: '44px',
                                            height: '44px',
                                            background: 'rgba(102, 126, 234, 0.1)',
                                            color: '#667eea',
                                            transition: 'all 0.3s ease',
                                        }}
                                        onMouseEnter={(e) => {
                                            const target = e.target as HTMLButtonElement;
                                            target.style.background = 'rgba(102, 126, 234, 0.2)';
                                            target.style.transform = 'scale(1.1)';
                                        }}
                                        onMouseLeave={(e) => {
                                            const target = e.target as HTMLButtonElement;
                                            target.style.background = 'rgba(102, 126, 234, 0.1)';
                                            target.style.transform = 'scale(1)';
                                        }}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 12V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M16 6L12 2L8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M12 2V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Subtle shine effect */}
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
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default AchievementsCards;

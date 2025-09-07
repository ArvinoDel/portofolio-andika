import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, CardBody, Button } from 'reactstrap';
import { QuotesType } from '../types/sections';
import { quotes } from '../portfolio';


const Quotes = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [copied, setCopied] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [quoteVisible, setQuoteVisible] = useState(false);
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

    const handleShare = (platform: string) => {
        const text = `${quotes.quote} - ${quotes.name} on andikasnm.my.id`;

        if (platform === 'twitter') {
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`);
        } else if (platform === 'linkedin') {
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`);
        } else if (platform === 'copy') {
            navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const cardStyle: React.CSSProperties = {
        backgroundColor: 'white',
        borderRadius: '20px',
        border: 'none',
        boxShadow: isHovered
            ? `
        0 12px 24px rgba(16, 139, 215, 0.35),
        0 8px 16px rgba(22, 152, 232, 0.25)
      `
            : `
        0 9px 20px rgba(0, 0, 0, 0.2),
        0 8px 10px rgba(0, 0, 0, 0.1)
      `,
        transform: isHovered ? 'translateY(-6px) scale(1.015)' : 'translateY(0) scale(1)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
        position: 'relative'
    };


    const imageStyle: React.CSSProperties = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '15px',
        transition: 'transform 0.4s ease, filter 0.3s ease',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        // filter: imageLoaded ? 'blur(0px)' : 'blur(5px)',
        // opacity: imageLoaded ? 1 : 0.8
    };

    const quoteIconStyle: React.CSSProperties = {
        fontSize: '2rem',
        color: '#87CEEB',
        opacity: '0.7'
    };

    const quoteTextStyle: React.CSSProperties = {
        fontSize: '1.3rem',
        fontStyle: 'italic',
        color: '#2c3e50',
        lineHeight: '1.6',
        marginBottom: '20px',
        fontWeight: '400',
        transform: quoteVisible ? 'translateY(0)' : 'translateY(20px)',
        opacity: quoteVisible ? 1 : 0,
        transition: 'all 0.6s ease 0.2s'
    };

    const nameStyle: React.CSSProperties = {
        fontSize: '1.2rem',
        fontWeight: '600',
        color: '#87CEEB',
        marginBottom: '5px'
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '1rem',
        color: '#6c757d',
        fontWeight: '500'
    };

    const socialButtonStyle: React.CSSProperties = {
        background: 'none',
        border: '1px solid #87CEEB',
        borderRadius: '8px',
        padding: '8px 12px',
        color: '#87CEEB',
        fontSize: '0.9rem',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        marginRight: '8px',
        position: 'relative',
        overflow: 'hidden'
    };

    const likeButtonStyle: React.CSSProperties = {
        background: 'none',
        border: 'none',
        color: '#87CEEB',
        fontSize: '0.9rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        transition: 'all 0.3s ease'
    };

    return (
        <>
            <Container className="py-5 my-4">
                <Row className="justify-content-center">
                    <Col lg={10} xl={8}>
                        <Card
                            style={cardStyle}
                            onMouseEnter={() => {
                                setIsHovered(true);
                                setQuoteVisible(true);
                            }}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {/* Animated background gradient */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(45deg, rgba(135, 206, 235, 0.02) 0%, rgba(176, 224, 230, 0.02) 100%)',
                                opacity: isHovered ? 1 : 0,
                                transition: 'opacity 0.3s ease'
                            }}></div>

                            {/* Floating particles effect */}
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                width: '6px',
                                height: '6px',
                                backgroundColor: '#87CEEB',
                                borderRadius: '50%',
                                opacity: isHovered ? 0.6 : 0.2,
                                transform: isHovered ? 'translate(10px, -10px)' : 'translate(0, 0)',
                                transition: 'all 0.6s ease'
                            }}></div>
                            <div style={{
                                position: 'absolute',
                                bottom: '30px',
                                left: '30px',
                                width: '4px',
                                height: '4px',
                                backgroundColor: '#B0E0E6',
                                borderRadius: '50%',
                                opacity: isHovered ? 0.4 : 0.1,
                                transform: isHovered ? 'translate(-15px, 15px)' : 'translate(0, 0)',
                                transition: 'all 0.8s ease'
                            }}></div>

                            <CardBody className="p-0" style={{ position: 'relative', zIndex: 2 }}>
                                <Row className="no-gutters h-100">
                                    {/* Image Section */}
                                    <Col md={5} className="order-1 order-md-1">
                                        <div className="p-4 h-100">
                                            {isMobile &&
                                                <div style={{
                                                    height: '450px',
                                                    position: 'relative',
                                                    overflow: 'hidden',
                                                    borderRadius: '15px',
                                                    boxShadow: '0 8px 25px rgba(135, 206, 235, 0.1)'
                                                }}>
                                                    {/* Image loading skeleton */}
                                                    {!imageLoaded && (
                                                        <div style={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            right: 0,
                                                            bottom: 0,
                                                            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                                                            backgroundSize: '200% 100%',
                                                            animation: 'loading 1.5s infinite',
                                                            borderRadius: '15px'
                                                        }}></div>
                                                    )}

                                                    <img
                                                        src={quotes.img}
                                                        alt="Profile"
                                                        style={imageStyle}
                                                        onLoad={() => setImageLoaded(true)}
                                                    />

                                                    {/* Image overlay effect */}
                                                    <div style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        background: 'linear-gradient(45deg, rgba(135, 206, 235, 0.1) 0%, rgba(176, 224, 230, 0.1) 100%)',
                                                        opacity: isHovered ? 1 : 0,
                                                        transition: 'opacity 0.3s ease',
                                                        borderRadius: '15px'
                                                    }}></div>
                                                </div>
                                            }
                                            {!isMobile &&
                                                <div style={{
                                                    height: '290px',
                                                    position: 'relative',
                                                    overflow: 'hidden',
                                                    borderRadius: '15px',
                                                    boxShadow: '0 8px 25px rgba(135, 206, 235, 0.1)'
                                                }}>
                                                    {/* Image loading skeleton */}
                                                    {!imageLoaded && (
                                                        <div style={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            right: 0,
                                                            bottom: 0,
                                                            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                                                            backgroundSize: '200% 100%',
                                                            animation: 'loading 1.5s infinite',
                                                            borderRadius: '15px'
                                                        }}></div>
                                                    )}

                                                    <img
                                                        src={quotes.img}
                                                        alt="Profile"
                                                        style={imageStyle}
                                                        onLoad={() => setImageLoaded(true)}
                                                    />

                                                    {/* Image overlay effect */}
                                                    <div style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        background: 'linear-gradient(45deg, rgba(135, 206, 235, 0.1) 0%, rgba(176, 224, 230, 0.1) 100%)',
                                                        opacity: isHovered ? 1 : 0,
                                                        transition: 'opacity 0.3s ease',
                                                        borderRadius: '15px'
                                                    }}></div>
                                                </div>
                                            }
                                        </div>
                                    </Col>

                                    {/* Quote Section */}
                                    <Col md={7} className="order-2 order-md-2">
                                        <div className="p-4 h-100 d-flex flex-column justify-content-center">
                                            {/* Quote Icon */}
                                            <div className="text-right mb-3">
                                                <i className="fa fa-quote-left" style={{
                                                    ...quoteIconStyle,
                                                    transform: isHovered ? 'rotate(-5deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                                                    transition: 'all 0.3s ease'
                                                }}></i>
                                            </div>

                                            {/* Quote Text */}
                                            <blockquote style={quoteTextStyle}>
                                                "{quotes.quote}"
                                            </blockquote>

                                            {/* Author Info */}
                                            <div className="mb-4" style={{
                                                transform: quoteVisible ? 'translateY(0)' : 'translateY(20px)',
                                                opacity: quoteVisible ? 1 : 0,
                                                transition: 'all 0.6s ease 0.4s'
                                            }}>
                                                <div style={nameStyle}>
                                                    {quotes.name}
                                                </div>
                                                <div style={titleStyle}>
                                                    {quotes.title}
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="d-flex justify-content-between align-items-center flex-wrap" style={{
                                                transform: quoteVisible ? 'translateY(0)' : 'translateY(20px)',
                                                opacity: quoteVisible ? 1 : 0,
                                                transition: 'all 0.6s ease 0.6s'
                                            }}>
                                                <button
                                                    style={{
                                                        ...likeButtonStyle,
                                                        color: isLiked ? '#e74c3c' : '#87CEEB',
                                                        transform: isLiked ? 'scale(1.15)' : 'scale(1)'
                                                    }}
                                                    onClick={() => setIsLiked(!isLiked)}
                                                >
                                                    <i className={`fa fa-heart${isLiked ? '' : '-o'}`} style={{
                                                        animation: isLiked ? 'heartPulse 0.6s ease' : 'none'
                                                    }}></i>
                                                    <span>{isLiked ? 'Liked' : 'Like'}</span>
                                                </button>

                                                <div className="d-flex">
                                                    <button
                                                        style={socialButtonStyle}
                                                        onClick={() => handleShare('twitter')}
                                                        onMouseEnter={(e) => {
                                                            const target = e.currentTarget as HTMLButtonElement;
                                                            target.style.backgroundColor = '#1da1f2';
                                                            target.style.color = 'white';
                                                            target.style.transform = 'translateY(-2px)';
                                                            target.style.boxShadow = '0 5px 15px rgba(29, 161, 242, 0.3)';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            const target = e.currentTarget as HTMLButtonElement;
                                                            target.style.backgroundColor = 'transparent';
                                                            target.style.color = '#87CEEB';
                                                            target.style.transform = 'translateY(0)';
                                                            target.style.boxShadow = 'none';
                                                        }}

                                                    >
                                                        <i className="fa fa-twitter"></i>
                                                    </button>

                                                    <button
                                                        style={socialButtonStyle}
                                                        onClick={() => handleShare('linkedin')}
                                                        onMouseEnter={(e) => {
                                                            const target = e.currentTarget as HTMLButtonElement;
                                                            target.style.backgroundColor = '#1da1f2';
                                                            target.style.color = 'white';
                                                            target.style.transform = 'translateY(-2px)';
                                                            target.style.boxShadow = '0 5px 15px rgba(29, 161, 242, 0.3)';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            const target = e.currentTarget as HTMLButtonElement;
                                                            target.style.backgroundColor = 'transparent';
                                                            target.style.color = '#87CEEB';
                                                            target.style.transform = 'translateY(0)';
                                                            target.style.boxShadow = 'none';
                                                        }}

                                                    >
                                                        <i className="fa fa-linkedin"></i>
                                                    </button>

                                                    <button
                                                        style={{
                                                            ...socialButtonStyle,
                                                            marginRight: '0',
                                                            backgroundColor: copied ? '#2ecc71' : 'transparent',
                                                            color: copied ? 'white' : '#87CEEB',
                                                            transform: copied ? 'scale(1.1)' : 'scale(1)'
                                                        }}
                                                        onClick={() => handleShare('copy')}
                                                    >
                                                        <i className={`fa fa-${copied ? 'check' : 'copy'}`}></i>
                                                        {copied && <span className="ml-1">Copied!</span>}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Font Awesome CSS */}
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />

            {/* Custom CSS animations */}
            <style jsx>{`
                @keyframes loading {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
                
                @keyframes heartPulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.3); }
                    100% { transform: scale(1); }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
            `}</style>
        </>
    );
};

export default Quotes;
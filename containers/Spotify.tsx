import React, { useState, useEffect } from 'react';
import { Card, CardBody } from 'reactstrap';

const Spotify = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleCardClick = () => {
        setIsExpanded(!isExpanded);
    };

    // Auto close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;

            if (
                isExpanded &&
                !target.closest('.spotify-card') &&
                !target.closest('.spotify-player')
            ) {
                setIsExpanded(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isExpanded]);


    if (!isMounted) {
        return null;
    }

    return (

        <div
            className={`position-relative ${!isMobile ? 'mt-7 ml-8' : 'mt-1 ml-1'
                }`}
        >

            {/* Main Card */}
            <Card
                className="spotify-card"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleCardClick}
                style={{
                    width: '150px',
                    height: '150px',
                    backgroundColor: '#1a1a1a',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    transform: isHovered ? 'scale(1.05) translateY(-5px)' : 'scale(1)',
                    boxShadow: isHovered
                        ? '0 25px 50px rgba(29, 185, 84, 0.3), 0 0 0 1px rgba(29, 185, 84, 0.2)'
                        : '0 8px 24px rgba(0, 0, 0, 0.4)',
                    overflow: 'hidden',
                    position: 'relative',
                    zIndex: 2
                }}
            >
                <CardBody className="p-0 h-100 position-relative">
                    {/* Animated Background Gradient */}
                    <div
                        className="position-absolute w-100 h-100"
                        style={{
                            background: `linear-gradient(135deg, 
                  #1DB954 0%, 
                  #1ed760 25%, 
                  #1DB954 50%, 
                  #17a648 75%, 
                  #1DB954 100%)`,
                            backgroundSize: '200% 200%',
                            animation: isHovered ? 'gradientShift 2s ease infinite' : 'none',
                            zIndex: 1
                        }}
                    />

                    {/* Spotify Logo */}
                    <div
                        className="position-absolute"
                        style={{
                            top: '12px',
                            left: '12px',
                            zIndex: 3
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.32 11.28-1.08 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                        </svg>
                    </div>

                    {/* Daily Mix Badge */}
                    <div
                        className="position-absolute"
                        style={{
                            top: '12px',
                            right: '12px',
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            borderRadius: '12px',
                            padding: '4px 8px',
                            fontSize: '9px',
                            fontWeight: 'bold',
                            color: 'white',
                            zIndex: 3,
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        Daily Mix 1
                    </div>

                    {/* Artist Names */}
                    <div
                        className="position-absolute"
                        style={{
                            bottom: '45px',
                            left: '12px',
                            right: '12px',
                            zIndex: 3
                        }}
                    >
                        <h6
                            className="text-white mb-0"
                            style={{
                                fontSize: '11px',
                                fontWeight: '700',
                                lineHeight: '1.3',
                                textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                            }}
                        >
                            Taylor Swift, Olivia Rodrigo, Sabrina Carpenter
                        </h6>
                    </div>

                    {/* Play Button */}
                    <div
                        className="position-absolute"
                        style={{
                            bottom: '12px',
                            right: '12px',
                            zIndex: 3
                        }}
                    >
                        <button
                            className="btn p-0 d-flex align-items-center justify-content-center"
                            style={{
                                width: '32px',
                                height: '32px',
                                backgroundColor: '#1DB954',
                                border: 'none',
                                borderRadius: '50%',
                                transition: 'all 0.3s ease',
                                opacity: isHovered ? 1 : 0,
                                transform: isHovered ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(8px)',
                                boxShadow: '0 4px 16px rgba(29, 185, 84, 0.4)',
                                fontSize: '12px',
                                color: 'white'
                            }}
                            onMouseEnter={(e) => {
                                const target = e.target as HTMLButtonElement;
                                target.style.transform = 'scale(1.1)';
                                target.style.backgroundColor = '#1ed760';
                            }}
                            onMouseLeave={(e) => {
                                const target = e.target as HTMLButtonElement;
                                target.style.transform = 'scale(1)';
                                target.style.backgroundColor = '#1DB954';
                            }}
                        >
                            ▶
                        </button>
                    </div>

                    {/* Subtle Pattern Overlay */}
                    <div
                        className="position-absolute w-100 h-100"
                        style={{
                            background: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20zm0 0v20h20c0-11.046-8.954-20-20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
                            zIndex: 2,
                            pointerEvents: 'none',
                        }}
                    />

                </CardBody>
            </Card>

            {/* Expanded Spotify Player */}
            <div
                className="position-absolute spotify-player"
                style={{
                    top: '0',
                    left: isExpanded ? '170px' : '150px',
                    width: isExpanded ? '400px' : '0',
                    height: '150px',
                    backgroundColor: '#000000',
                    borderRadius: '12px',
                    transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    overflow: 'hidden',
                    opacity: isExpanded ? 1 : 0,
                    transform: isExpanded ? 'translateX(0)' : 'translateX(-20px)',
                    boxShadow: isExpanded ? '0 15px 35px rgba(0, 0, 0, 0.6)' : 'none',
                    zIndex: 1,
                    border: '1px solid rgba(29, 185, 84, 0.2)'
                }}
            >
                {isExpanded && (
                    <div className="h-100 w-100">
                        <iframe
                            src="https://open.spotify.com/embed/track/4D7BCuvgdJlYvlX5WlN54t?utm_source=generator&theme=0"
                            width="100%"
                            height="100%"
                            frameBorder={0}
                            allowTransparency={true}
                            allow="encrypted-media"
                            style={{
                                borderRadius: '12px',
                                filter: 'brightness(1.1) contrast(1.1)',
                                minHeight: '200px',
                            }}
                        />
                    </div>

                )}
            </div>
        </div>
    );
};

export default Spotify;
import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Paper,
    CircularProgress
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const PortfolioPage = ({ markdownUrl }) => {
    const [markdownContent, setMarkdownContent] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);

        fetch(markdownUrl)
            .then(response => response.text())
            .then(text => {
                // Replace %PUBLIC_URL% placeholders with actual path
                const processedText = text.replace(/%PUBLIC_URL%/g, process.env.PUBLIC_URL);
                setMarkdownContent(processedText);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading markdown:', error);
                setLoading(false);
            });
    }, [markdownUrl]);

    // Custom renderer for images to handle audio and video files
    const components = {
        img: ({ src, alt, width, style, ...props }) => {
            // Check if the src is a video file
            if (src && src.match(/\.(mp4|webm|mov)$/i)) {
                const baseStyle = width
                    ? { width: `${width}px`, maxWidth: '100%', height: 'auto', display: 'block' }
                    : { width: '100%', height: 'auto', display: 'block' };

                const mergedStyle = { ...baseStyle, ...style };

                return (
                    <Box sx={{ my: 3, display: 'flex' }}>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{ ...mergedStyle, objectFit: 'cover' }}
                        >
                            <source src={src} type="video/mp4" />
                            Your browser does not support the video element.
                        </video>
                    </Box>
                );
            }

            // Check if the src is an audio file
            if (src && src.match(/\.(m4a|mp3|wav|ogg)$/i)) {
                const extension = src.split('.').pop().toLowerCase();
                // Map file extensions to proper MIME types
                const mimeTypes = {
                    'm4a': 'audio/mp4',
                    'mp3': 'audio/mpeg',
                    'wav': 'audio/wav',
                    'ogg': 'audio/ogg'
                };

                return (
                    <Box sx={{ my: 3 }}>
                        <audio controls style={{ width: '100%', maxWidth: '500px' }}>
                            <source src={src} type={mimeTypes[extension] || `audio/${extension}`} />
                            Your browser does not support the audio element.
                        </audio>
                    </Box>
                );
            }

            // Regular image rendering - respect width attribute if provided
            // Merge inline styles from markdown with width handling
            const baseStyle = width
                ? { width: `${width}px`, maxWidth: '100%', height: 'auto' }
                : { width: '100%' };

            const mergedStyle = { ...baseStyle, ...style };

            return <img src={src} alt={alt} style={mergedStyle} {...props} />;
        }
    };

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: 'white', py: 8 }}>
            <Container maxWidth="lg">
                {/* Back Button */}
                <Button
                    startIcon={<ArrowBackIcon />}
                    href="/portfolio/"
                    sx={{
                        mb: 6,
                        color: 'black',
                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.05)' }
                    }}
                >
                    Back to Portfolio
                </Button>

                {/* Loading State */}
                {loading ? (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minHeight: '50vh'
                        }}
                    >
                        <CircularProgress size={60} sx={{ color: 'black' }} />
                    </Box>
                ) : (
                    /* Markdown Content */
                    <Box sx={{
                        maxWidth: '900px',
                        mx: 'auto',
                        '& h1': { fontWeight: 300, mb: 4, fontSize: '3.5rem', fontFamily: '"Montserrat", Arial, sans-serif' },
                        '& h2': { fontWeight: 300, mt: 6, mb: 3, fontSize: '2.25rem', fontFamily: '"Montserrat", Arial, sans-serif' },
                        '& h3': { fontWeight: 400, mt: 4, mb: 2, fontSize: '1.75rem', fontFamily: '"Montserrat", Arial, sans-serif' },
                        '& p': { lineHeight: 1.8, mb: 2, fontSize: '1.125rem' },
                        '& ul, & ol': { lineHeight: 1.8, mb: 2, pl: 3, fontSize: '1.125rem' },
                        '& img': { borderRadius: 2, mb: 3, mt: 2 },
                        '& hr': { my: 6, border: 'none', borderTop: '1px solid #e0e0e0' }
                    }}>
                        <ReactMarkdown components={components} rehypePlugins={[rehypeRaw]}>{markdownContent}</ReactMarkdown>
                    </Box>
                )}
            </Container>
        </Box>
    );
};

export default PortfolioPage;
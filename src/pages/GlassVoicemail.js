import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Paper
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReactMarkdown from 'react-markdown';

const GlassVoicemail = () => {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/assets/glass_voicemail/content/glass_voicemail.md`)
            .then(response => response.text())
            .then(text => {
                // Replace %PUBLIC_URL% placeholders with actual path
                const processedText = text.replace(/%PUBLIC_URL%/g, process.env.PUBLIC_URL);
                setMarkdownContent(processedText);
            })
            .catch(error => console.error('Error loading markdown:', error));
    }, []);

    // Custom renderer for images to handle audio files
    const components = {
        img: ({ src, alt }) => {
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
            // Regular image rendering
            return <img src={src} alt={alt} />;
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

                {/* Markdown Content */}
                <Box sx={{
                    maxWidth: '900px',
                    mx: 'auto',
                    '& h1': { fontWeight: 300, mb: 4, fontSize: '3.5rem', fontFamily: '"Helvetica Neue", Arial, sans-serif' },
                    '& h2': { fontWeight: 300, mt: 6, mb: 3, fontSize: '2.25rem', fontFamily: '"Helvetica Neue", Arial, sans-serif' },
                    '& h3': { fontWeight: 400, mt: 4, mb: 2, fontSize: '1.75rem', fontFamily: '"Helvetica Neue", Arial, sans-serif' },
                    '& p': { lineHeight: 1.8, mb: 2, fontSize: '1.125rem' },
                    '& ul, & ol': { lineHeight: 1.8, mb: 2, pl: 3, fontSize: '1.125rem' },
                    '& img': { width: '100%', borderRadius: 2, mb: 3, mt: 2 },
                    '& hr': { my: 6, border: 'none', borderTop: '1px solid #e0e0e0' }
                }}>
                    <ReactMarkdown components={components}>{markdownContent}</ReactMarkdown>
                </Box>
            </Container>
        </Box>
    );
};

export default GlassVoicemail;
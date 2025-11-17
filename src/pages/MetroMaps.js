import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Paper,
    ImageList,
    ImageListItem
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const MetroMaps = () => {
    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: 'white', py: 8 }}>
            <Container maxWidth="lg">
                {/* Back Button */}
                <Button
                    startIcon={<ArrowBackIcon />}
                    href="/"
                    sx={{
                        mb: 6,
                        color: 'black',
                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.05)' }
                    }}
                >
                    Back to Portfolio
                </Button>

                {/* Project Title */}

                {/* Main Content */}
                <Grid container spacing={6}>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h4" gutterBottom sx={{ fontWeight: 300 }}>
                            Under construction!
                        </Typography>
                    </Grid>
                    {

                        <Grid item xs={12} md={4}>
                            <Paper elevation={0} sx={{ p: 3, border: '1px solid #e0e0e0', borderRadius: 2 }}>
                                <Typography variant="h6" gutterBottom>
                                    Project Details
                                </Typography>
                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="overline" display="block" color="text.secondary">
                                        MATERIALS
                                    </Typography>
                                    <Typography variant="body2">
                                        Stained glass, copper foil, solder
                                    </Typography>
                                </Box>
                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="overline" display="block" color="text.secondary">
                                        DIMENSIONS
                                    </Typography>
                                    <Typography variant="body2">
                                        24" × 36"
                                    </Typography>
                                </Box>
                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="overline" display="block" color="text.secondary">
                                        TECHNIQUES
                                    </Typography>
                                    <Typography variant="body2">
                                        Digital audio processing, Voronoi tessellation, Traditional stained glass
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="overline" display="block" color="text.secondary">
                                        YEAR
                                    </Typography>
                                    <Typography variant="body2">
                                        2025
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default MetroMaps;
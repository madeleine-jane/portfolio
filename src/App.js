import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  IconButton,
  ImageList,
  ImageListItem,
  Modal,
  Fade,
  Paper
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import GlassVoicemail from './pages/GlassVoicemail';
import MetroMaps from './pages/MetroMaps';

// ==== DATA ====
const glassPortfolio = [
  { title: 'Chicago Metro Map', image_filename: 'chicago_metro.jpg', caption: 'The Chicago L metro system map, rendered in glass.' },
  { title: 'Miniature Coffee Shop', image_filename: 'coffee_shop.jpg', caption: 'My favorite coffee shop, rendered in miniature as a gift for the owners.' },
  { title: 'Ursa Major and Ursa Minor', image_filename: 'constellation_bears.jpg', caption: 'Glass constellations.' },
  { title: 'Pomegranates', image_filename: 'pomegranates.jpg', caption: 'A transom window with pomegranates and bees.' },
  { title: 'DC Metro Map', image_filename: 'dc_metro.jpg', caption: 'The DC metro system map, rendered in glass.' },
  { title: 'Stand Mixer', image_filename: 'stand_mixer.jpg', caption: 'An image from the Kitchenaid stand mixer user manual, rendered in glass.' },
  { title: 'Kintsugi China Fish', image_filename: 'china_fish.jpg', caption: 'A fish made from broken china plates.' },
  { title: 'Koi and Water Lilies', image_filename: 'koi_window.jpg', caption: 'A five foot tall sidelight depicting water lilies and koi fish.' },
  { title: 'Peacock', image_filename: 'peacock.jpg', caption: 'An abstract peacock sitting on a metal hoop.' },
  { title: 'Dog Portrait', image_filename: 'guinness.jpg', caption: 'A glass pet portrait.' },
  { title: 'River Eddy', image_filename: 'river_bubbles.jpg', caption: 'A large circular window showing river currents.' },
  { title: 'Sun, Fog and Ocean', image_filename: 'sunset_ocean.jpg', caption: 'A commission for a Santa Cruz beach house.' },
  { title: 'Glass X-Ray', image_filename: 'xray.jpg', caption: 'A commission from a radiologist, showing his favorite x-ray of a broken bone.' },
  { title: 'TV Test Pattern', image_filename: 'test_pattern.jpg', caption: 'A design inspired by the SMPTE television test pattern used in the 70s and 80s.' },
  { title: 'Tensegrity Glass', image_filename: 'tensegrity.jpg', caption: 'A tensegrity experiment! The top piece of glass hangs from the bottom piece of glass, giving the illusion that it\'s floating.' },
];

// ==== THEME ====
const theme = createTheme({
  palette: {
    primary: { main: '#000000' },
    background: { default: '#ffffff' },
  },
  typography: {
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    h2: { fontFamily: '"Pacifico", Arial, sans-serif' },
  },
});

// ==== COMPONENTS ====
const SectionTitle = ({ children }) => (
  <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 300, mb: 6 }}>
    {children}
  </Typography>
);

const Navigation = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <AppBar position="sticky" color="default" elevation={1} sx={{ backgroundColor: 'black', top: 0 }}>
      <Toolbar sx={{ justifyContent: 'space-between', color: 'white' }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {['home', 'glasswork', 'code', 'about'].map((id) => (
            <Button key={id} color="inherit" onClick={() => scrollToSection(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton href="mailto:madeleinejane.andersen@gmail.com" color="inherit"><EmailIcon /></IconButton>
          <IconButton href="https://www.linkedin.com/in/madeleine-andersen-0153a91b9/" target="_blank" color="inherit"><LinkedInIcon /></IconButton>
          <IconButton href="https://www.instagram.com/mattiejane.art/" target="_blank" color="inherit"><InstagramIcon /></IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

// ==== SECTIONS ====
const HomeSection = () => (
  <Box id="home" sx={{ minHeight: '50vh', display: 'flex', alignItems: 'center', py: 8 }}>
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', gap: 8, alignItems: 'center', flexDirection: { xs: 'column', md: 'row' } }}>
        <Box sx={{ flex: '2' }}>
          <Typography variant="h5" component="h1" gutterBottom sx={{ fontWeight: 300 }}>Hi! I'm</Typography>
          <Typography component="h1" gutterBottom sx={{ fontFamily: '"Pacifico", Arial, sans-serif', fontWeight: 300, fontSize: '4rem', lineHeight: 1.2 }}>Madeleine Andersen</Typography>
          <Typography variant="h5" sx={{ fontWeight: 300, color: 'text.secondary', lineHeight: 1.8 }}>
            I'm a stained glass artist and creative technologist. I'm exploring the intersection of software engineering, data visualization, and tactile art.
          </Typography>
        </Box>
        <Box sx={{ flex: '1' }}>
          <Box
            component="img"
            src="/portfolio/assets/an_art_squiggle.png"
            alt="Decorative art squiggle"
            sx={{
              width: '100%',
              height: 600,
              objectFit: 'contain',
              borderRadius: 1
            }}
          />
        </Box>
      </Box>
    </Container>
  </Box>
);


const ProjectsSection = () => {
  const projects = [
    {
      title: 'Glass Voicemail',
      description: 'Using a Voronoi diagram to represent a voicemail from my mom.',
      image: '/portfolio/assets/glass_voicemail/glass_voicemail_header.png',
      link: '/glass-voicemail'
    },
    {
      title: 'Metro Windows',
      description: 'Depicting public transit maps in stained glass.',
      image: '/portfolio/assets/glass_portfolio/chicago_metro.jpg',
      link: '/metro-maps',
    }
  ];

  return (
    <Box sx={{ backgroundColor: 'white', py: 8 }}>
      <Container maxWidth="lg">
        <SectionTitle>Here's what I'm working on!</SectionTitle>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} key={index}>
              <Card elevation={0} sx={{ border: '1px solid #e0e0e0', transition: 'all 0.3s ease-in-out', '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 12px 24px rgba(0,0,0,0.1)' } }}>
                <CardActionArea href={project.link} sx={{ '&:hover': { bgcolor: 'transparent' } }}>
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, height: { md: 300 }, width: { md: 900 }, overflow: 'hidden' }}>
                    <Box sx={{ flex: 1, position: 'relative', '&:after': { content: '""', display: 'block', paddingTop: '100%' } }}>
                      <CardMedia component="img" image={project.image} alt={project.title} sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                    <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 4 }}>
                      <Typography variant="h4" gutterBottom sx={{ fontWeight: 300 }}>{project.title}</Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.2rem', lineHeight: 1.8 }}>{project.description}</Typography>
                    </CardContent>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// ==== CODE SECTION ====
const CodeSection = () => (
  <Box id="code" sx={{ py: 8 }}>
    <Container maxWidth="lg">
      <SectionTitle>Code Sketches</SectionTitle>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          {[
            { title: 'Fruit Salad', src: '/portfolio/assets/code_portfolio/fruit_salad.mov', desc: 'Fruits that morph into other fruits!', link: 'https://editor.p5js.org/madeleinejane.andersen/full/4zdqLO3t1' },
            { title: 'Eternity Simulator', src: '/portfolio/assets/code_portfolio/eternity_sim.mov', desc: 'Every thousand years, a pixel erodes.', link: 'https://editor.p5js.org/madeleinejane.andersen/full/uPr_kHg8j', mt: 4 }
          ].map((item, i) => (
            <Paper key={i} elevation={0} sx={{ p: 2, mt: item.mt || 0, border: '1px solid #e0e0e0', cursor: 'pointer', transition: 'transform 0.2s ease', '&:hover': { transform: 'translateY(-4px)' } }} onClick={() => window.open(item.link, '_blank')}>
              <Box sx={{ width: '100%', height: 400, backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, borderRadius: 1, overflow: 'hidden' }}>
                <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'contain' }}>
                  <source src={item.src} type="video/mp4" />
                </video>
              </Box>
              <Typography variant="h6" gutterBottom>{item.title}</Typography>
              <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
            </Paper>
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ p: 2, border: '1px solid #e0e0e0', cursor: 'pointer', transition: 'transform 0.2s ease', width: 'fit-content', '&:hover': { transform: 'translateY(-4px)' } }} onClick={() => window.open('https://editor.p5js.org/madeleinejane.andersen/full/ciMHviYwq', '_blank')}>
            <Box sx={{ width: { xs: '100%', md: 525 }, height: { xs: 'auto', md: 700 }, aspectRatio: '3/4', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, borderRadius: 1, overflow: 'hidden' }}>
              <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'contain' }}>
                <source src="/portfolio/assets/code_portfolio/migration_station.mov" type="video/mp4" />
              </video>
            </Box>
            <Box sx={{ width: { xs: '100%', md: 525 } }}>
              <Typography variant="h6" gutterBottom>Migration Station</Typography>
              <Typography variant="body2" color="text.secondary">
                A travel poster for birdwatching! Birds fly across the screen in randomly generated, naturalistic flight patterns.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

// ==== GLASSWORK SECTION ====
const GlassworkSection = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const handleClose = () => setSelectedImage(null);
  const handleNext = () => setSelectedImage(glassPortfolio[(glassPortfolio.findIndex(item => item === selectedImage) + 1) % glassPortfolio.length]);
  const handlePrev = () => setSelectedImage(glassPortfolio[(glassPortfolio.findIndex(item => item === selectedImage) - 1 + glassPortfolio.length) % glassPortfolio.length]);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <Box id="glasswork" sx={{ py: 8, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <SectionTitle>Glasswork</SectionTitle>
        <ImageList variant="masonry" cols={3} gap={16}>
          {glassPortfolio.map((item, index) => (
            <ImageListItem key={index} onClick={() => setSelectedImage(item)} sx={{ cursor: 'pointer', position: 'relative', '&:hover .image-overlay': { opacity: 1 } }}>
              <img src={`/assets/glass_portfolio/${item.image_filename}`} alt={item.title} loading="lazy" style={{ display: 'block', borderRadius: 8, width: '100%' }} />
              <Box className="image-overlay" sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)', padding: 1.5, opacity: 0, transition: 'opacity 0.2s ease', borderRadius: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="subtitle2" sx={{ color: 'white', textAlign: 'center' }}>{item.title}</Typography>
              </Box>
            </ImageListItem>
          ))}
        </ImageList>

        <Modal open={selectedImage !== null} onClose={handleClose} closeAfterTransition sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
          <Fade in={selectedImage !== null}>
            <Box sx={{ maxWidth: '90vw', maxHeight: '90vh', outline: 'none', backgroundColor: 'white', borderRadius: 2, position: 'relative', border: '20px solid white' }} onClick={(e) => e.stopPropagation()}>
              {selectedImage && (
                <>
                  <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 2 }}>
                    <img src={`/assets/glass_portfolio/${selectedImage.image_filename}`} alt={selectedImage.title} style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain', borderRadius: 2, display: 'block' }} />
                    <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 2, backgroundColor: 'rgba(0,0,0,0.75)', color: 'white', borderRadius: 2 }}>
                      <Typography variant="h6" component="h2">{selectedImage.title}</Typography>
                      {selectedImage.caption && <Typography variant="subtitle2" sx={{ mt: 1, color: 'rgba(255,255,255,0.9)' }}>{selectedImage.caption}</Typography>}
                    </Box>
                  </Box>
                  <IconButton onClick={handlePrev} sx={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.3)', color: 'white', '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' } }}><NavigateBeforeIcon /></IconButton>
                  <IconButton onClick={handleNext} sx={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.3)', color: 'white', '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' } }}><NavigateNextIcon /></IconButton>
                </>
              )}
            </Box>
          </Fade>
        </Modal>
      </Container>
    </Box>
  );
};

// ==== ABOUT SECTION ====
const AboutSection = () => (
  <Box id="about" sx={{ py: 4 }}>
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', gap: 8, flexDirection: { xs: 'column', md: 'row' } }}>
        <Box sx={{ flex: 1 }}>
          <SectionTitle>About</SectionTitle>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            I'm a graduate student at CU Boulder's ATLAS institute, pursuing a degree in Creative Technology and Design. I've been a software engineer for four years, and in my free time I've found success as a stained glass artist.<br /><br />
            I'm trying to merge my technical skills and artistic proclivities and build weird and beautiful things! These days I'm interested in:
          </Typography>
          <Box component="ul" sx={{ mt: 2, mb: 3 }}>
            {['Strange lamps', 'Turning industrial engineering diagrams into art', 'Embedded systems programming'].map((item, i) => (
              <Typography key={i} component="li" variant="body1" sx={{ mb: i < 2 ? 1 : 0 }}>{item}</Typography>
            ))}
          </Box>
          <Button variant="contained" href="/portfolio/assets/madeleine_portfolio.pdf" target="_blank" sx={{ py: 1.5, mt: 4, backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: 'black' } }}>View Resume (PDF)</Button>
        </Box>

        <Box sx={{ width: { xs: '100%', md: 320 }, flexShrink: 0, position: 'sticky', top: 100, alignSelf: 'flex-start' }}>
          <Box component="img" src="/portfolio/assets/portfolio_pic.jpg" alt="Madeleine Andersen" sx={{ width: 280, height: 280, mx: 'auto', mb: 4, borderRadius: '50%', objectFit: 'cover' }} />
        </Box>
      </Box>
    </Container>
  </Box>
);

// ==== FOOTER ====
const Footer = () => (
  <Box sx={{ backgroundColor: '#1a1a1a', color: 'white', py: 4, mt: 8 }}>
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
        <Box>
          <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>Quick Links</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {['home', 'glasswork', 'code', 'about'].map((id) => (
              <Button key={id} color="inherit" onClick={() => document.getElementById(id).scrollIntoView({ behavior: 'smooth' })} sx={{ color: '#aaa', justifyContent: 'flex-start', p: 0 }}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Button>
            ))}
          </Box>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>Connect</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton href="mailto:madeleinejane.andersen@gmail.com" sx={{ color: '#aaa' }}><EmailIcon /></IconButton>
            <IconButton href="https://www.linkedin.com/in/madeleine-andersen-0153a91b9/" target="_blank" sx={{ color: '#aaa' }}><LinkedInIcon /></IconButton>
            <IconButton href="https://www.instagram.com/mattiejane.art/" target="_blank" sx={{ color: '#aaa' }}><InstagramIcon /></IconButton>
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
);

// ==== MAIN EXPORT ====
export default function Portfolio() {
  return (
    <Router basename="/portfolio">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/glass-voicemail" element={<GlassVoicemail />} />
          <Route path="/metro-maps" element={<MetroMaps />} />
          <Route path="/" element={
            <Box sx={{ backgroundColor: 'white' }}>
              <Navigation />
              <HomeSection />
              <ProjectsSection />
              <CodeSection />
              <GlassworkSection />
              <AboutSection />
              <Footer />
            </Box>
          } />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

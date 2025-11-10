import React from 'react';
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
  Paper,
  ImageList,
  ImageListItem,
  Modal,
  Fade
} from '@mui/material';


import { ThemeProvider, createTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const codePortfolio = [
  {
    title: 'Fruit Salad',
    filename: 'fruit_salad.mov',
    caption: 'Fruits that morph into other fruits!',
    link: 'https://editor.p5js.org/madeleinejane.andersen/full/4zdqLO3t1'
  },
  {
    title: 'Eternity Simulator',
    filename: 'eternity_sim.mov',
    caption: 'Every thousand years, a pixel erodes.',
    link: 'https://editor.p5js.org/madeleinejane.andersen/full/Qz2T_aMY-'
  },
  {
    title: 'Migration Station',
    filename: 'migration_station.mov',
    caption: 'A travel poster for birdwatching! Birds fly across the screen in randomly generated, naturalistic flight patterns.',
    link: 'https://editor.p5js.org/madeleinejane.andersen/full/ciMHviYwq'
  }
]

const glassPortfolio = [
  {
    title: 'Chicago Metro Map',
    image_filename: 'chicago_metro.jpg',
    caption: 'The Chicago L metro system map, rendered in glass.',
    redirect: 'fillmein',
  },
  {
    title: 'Miniature Coffee Shop',
    image_filename: 'coffee_shop.jpg',
    caption: 'My favorite coffee shop, rendered in miniature as a gift for the owners.',
  },
  {
    title: 'Ursa Major and Ursa Minor',
    image_filename: 'constellation_bears.jpg',
    caption: 'Glass constellations.'
  },
  {
    title: 'Pomegranates',
    image_filename: 'pomegranates.jpg',
    caption: 'A transom window with pomegranates and bees.',

  },

  {
    title: 'DC Metro Map',
    image_filename: 'dc_metro.jpg',
    caption: 'The DC metro system map, rendered in glass.',
    redirect: 'fillmein'
  },

  {
    title: 'Stand Mixer',
    image_filename: 'stand_mixer.jpg',
    caption: 'An image from the Kitchenaid stand mixer user manual, rendered in glass.',
    redirect: 'fillmein'
  },

  {
    title: 'Kintsugi China Fish',
    image_filename: 'china_fish.jpg',
    caption: 'A fish made from broken china plates.',
  },
  {
    title: 'Koi and Water Lilies',
    image_filename: 'koi_window.jpg',
    caption: 'A five foot tall sidelight depicting water lilies and koi fish.',
    redirect: 'fillmein'
  },
  {
    title: 'Peacock',
    image_filename: 'peacock.jpg',
    caption: 'An abstract peacock sitting on a metal hoop.'
  },
  {
    title: 'Dog Portrait',
    image_filename: 'guinness.jpg',
    caption: 'A glass pet portrait.'
  },
  {
    title: 'River Eddy',
    image_filename: 'river_bubbles.jpg',
    caption: 'A large circular window showing river currents.'
  },
  {
    title: 'Sun, Fog and Ocean',
    image_filename: 'sunset_ocean.jpg',
    caption: 'A commission for a Santa Cruz beach house.'
  },

  {
    title: 'Glass X-Ray',
    image_filename: 'xray.jpg',
    caption: 'A commission from a radiologist, showing his favorite x-ray of a broken bone.'
  },

  {
    title: 'TV Test Pattern',
    image_filename: 'test_pattern.jpg',
    caption: 'A design inspired by the SMPTE television test pattern used in the 70s and 80s.'
  },


  {
    title: 'Tensegrity Glass',
    image_filename: 'tensegrity.jpg',
    caption: 'A tensegrity experiment! The top piece of glass hangs from the bottom piece of glass, giving the illusion that it\'s floating.',
  },
]

const SectionTitle = ({ children }) => (
  <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 300, mb: 6 }}>
    {children}
  </Typography>
);

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    h2: {
      fontFamily: '"Pacifico", Arial, sans-serif',
    },
  },
});

const Navigation = ({ position = 'top' }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AppBar
      position={'static'}
      color="default"
      elevation={1}
      sx={{ backgroundColor: 'black' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', color: 'white' }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" onClick={() => scrollToSection('home')}>
            Home
          </Button>
          <Button color="inherit" onClick={() => scrollToSection('glasswork')}>
            Glasswork
          </Button>
          <Button color="inherit" onClick={() => scrollToSection('code')}>
            Code
          </Button>
          <Button color="inherit" onClick={() => scrollToSection('about')}>
            About
          </Button>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton href="mailto:your.email@example.com" color="inherit">
            <EmailIcon />
          </IconButton>
          <IconButton href="https://instagram.com/yourusername" target="_blank" color="inherit">
            <InstagramIcon />
          </IconButton>
          <IconButton href="https://linkedin.com/in/yourusername" target="_blank" color="inherit">
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const HomeSection = () => (
  <Box id="home" sx={{ minHeight: '50vh', display: 'flex', alignItems: 'center', py: 8 }}>
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <Box sx={{ flex: '0 0 66.666%' }}>
          <Typography variant="h5" component="h1" gutterBottom sx={{ fontWeight: 300 }}>
            Hi! I'm
          </Typography>
          <Typography component="h1" gutterBottom sx={{
            fontFamily: '"Pacifico", Arial, sans-serif',
            fontWeight: 300,
            fontSize: '4rem',  // This is equivalent to 64px
            lineHeight: 1.2    // Adjust line height for better spacing
          }}>
            Madeleine Andersen
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 300, color: 'text.secondary', lineHeight: 1.8 }}>
            I'm a stained glass artist and creative technologist. I'm exploring the intersection
            of software engineering, data visualization, and tactile art.
          </Typography>
        </Box>
        <Box sx={{ flex: '0 0 33.333%' }}>
          <Box
            sx={{
              width: '100%',
              height: 400,
              backgroundColor: '#f5f5f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 1
            }}
          >
            <Typography variant="body2" color="text.secondary">
              [Your Image Here]
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A beautiful intersection of glass and light exploring geometric patterns.',
      image: 'https://via.placeholder.com/400x300',
      link: '/project-one'
    },
    {
      title: 'Project Two',
      description: 'Interactive data visualization bringing environmental data to life.',
      image: 'https://via.placeholder.com/400x300',
      link: '/project-two'
    },
    {
      title: 'Project Three',
      description: 'Commissioned stained glass piece for a community art center.',
      image: 'https://via.placeholder.com/400x300',
      link: '/project-three'
    }
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <SectionTitle>
          Here's what I'm working on!
        </SectionTitle>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card elevation={0} sx={{ border: '1px solid #e0e0e0' }}>
                <CardActionArea href={project.link}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const CodeSection = () => {

  return (
    <Box id="code" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <SectionTitle>
          Code
        </SectionTitle>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                border: '1px solid #e0e0e0',
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }}
              onClick={() => window.open('https://editor.p5js.org/madeleinejane.andersen/full/4zdqLO3t1', '_blank')}
            >
              <Box
                sx={{
                  width: '100%',
                  height: 400,
                  backgroundColor: '#f5f5f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                  borderRadius: 1,
                  overflow: 'hidden'
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                >
                  <source src="/assets/code_portfolio/fruit_salad.mov" type="video/mp4" />
                </video>
              </Box>
              <Typography variant="h6" gutterBottom>
                Fruit Salad
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Fruits that morph into other fruits!
              </Typography>
            </Paper>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                mt: 4,
                border: '1px solid #e0e0e0',
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }}
              onClick={() => window.open('https://editor.p5js.org/madeleinejane.andersen/full/uPr_kHg8j', '_blank')}
            >
              <Box
                sx={{
                  width: '100%',
                  height: 400,
                  backgroundColor: '#f5f5f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                  borderRadius: 1,
                  overflow: 'hidden'
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                >
                  <source src="/assets/code_portfolio/eternity_sim.mov" type="video/mp4" />
                </video>
              </Box>
              <Typography variant="h6" gutterBottom>
                Eternity Simulator
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Every thousand years, a pixel erodes.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                border: '1px solid #e0e0e0',
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                width: 'fit-content',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }}
              onClick={() => window.open('https://editor.p5js.org/madeleinejane.andersen/full/ciMHviYwq', '_blank')}
            >
              <Box
                sx={{
                  width: { xs: '100%', md: 525 },
                  height: { xs: 'auto', md: 700 },
                  aspectRatio: '3/4',
                  backgroundColor: '#f5f5f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                  borderRadius: 1,
                  overflow: 'hidden'
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                >
                  <source src="/assets/code_portfolio/migration_station.mov" type="video/mp4" />
                </video>
              </Box>
              <Box sx={{ width: { xs: '100%', md: 525 } }}>
                <Typography variant="h6" gutterBottom>
                  Migration Station
                </Typography>
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
};


//i kind of hate the font on the title/captions but oh well
const GlassworkSection = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    const currentIndex = glassPortfolio.findIndex(item => item === selectedImage);
    const nextIndex = (currentIndex + 1) % glassPortfolio.length;
    setSelectedImage(glassPortfolio[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = glassPortfolio.findIndex(item => item === selectedImage);
    const prevIndex = (currentIndex - 1 + glassPortfolio.length) % glassPortfolio.length;
    setSelectedImage(glassPortfolio[prevIndex]);
  };

  // Add keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'Escape') handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <Box id="glasswork" sx={{ py: 8, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <SectionTitle>
          Glasswork
        </SectionTitle>
        <ImageList variant="masonry" cols={3} gap={16}>
          {glassPortfolio.map((item, index) => (
            <ImageListItem
              key={index}
              onClick={() => setSelectedImage(item)}
              sx={{
                cursor: 'pointer',
                position: 'relative',
                '&:hover .image-overlay': {
                  opacity: 1
                }
              }}
            >
              <img
                src={`/assets/glass_portfolio/${item.image_filename}`}
                alt={item.title}
                loading="lazy"
                style={{
                  display: 'block',
                  borderRadius: 8,
                  width: '100%'
                }}
              />
              <Box
                className="image-overlay"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: 1.5,
                  opacity: 0,
                  transition: 'opacity 0.2s ease',
                  borderRadius: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Typography variant="subtitle2" sx={{ color: 'white', textAlign: 'center' }}>
                  {item.title}
                </Typography>
              </Box>
            </ImageListItem>
          ))}
        </ImageList>

        <Modal
          open={selectedImage !== null}
          onClose={handleClose}
          closeAfterTransition
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2
          }}
        >
          <Fade in={selectedImage !== null}>
            <Box
              sx={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                outline: 'none',
                backgroundColor: 'white',
                borderRadius: 8,
                position: 'relative',
                border: '20px solid white'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImage && (
                <>
                  <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 8 }}>
                    <img
                      src={'/assets/glass_portfolio/' + selectedImage.image_filename}
                      alt={selectedImage.title}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '90vh',
                        objectFit: 'contain',
                        borderRadius: 8,
                        display: 'block'
                      }}
                    />
                    <Box sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 2,
                      backgroundColor: 'rgba(0,0,0,0.75)',
                      color: 'white',
                      borderRadius: 4,
                    }}>
                      <Typography variant="h6" component="h2">
                        {selectedImage.title}
                      </Typography>
                      {selectedImage.caption && (
                        <Typography variant="subtitle2" sx={{ mt: 1, color: 'rgba(255, 255, 255, 0.9)' }}>
                          {selectedImage.caption}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                  <IconButton
                    onClick={handlePrev}
                    sx={{
                      position: 'absolute',
                      left: 16,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      backgroundColor: 'rgba(0,0,0,0.3)',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'rgba(0,0,0,0.5)'
                      }
                    }}
                  >
                    <NavigateBeforeIcon />
                  </IconButton>
                  <IconButton
                    onClick={handleNext}
                    sx={{
                      position: 'absolute',
                      right: 16,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      backgroundColor: 'rgba(0,0,0,0.3)',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'rgba(0,0,0,0.5)'
                      }
                    }}
                  >
                    <NavigateNextIcon />
                  </IconButton>
                </>
              )}
            </Box>
          </Fade>
        </Modal>
      </Container>
    </Box>
  );
};

const AboutSection = () => (
  <Box id="about" sx={{ py: 8 }}>
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', gap: 8, flexDirection: { xs: 'column', md: 'row' } }}>
        {/* Main Content */}
        <Box sx={{ flex: 1 }}>
          <SectionTitle>
            About
          </SectionTitle>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            I'm a graduate student at CU Boulder's ATLAS institute, pursuing a degree in Creative Technology and Design. I've been a software engineer for four years, and in my free time I've found success as a stained glass artist. <br /> <br />
            I'm trying to merge my techical skills and artistic proclivities and build weird and beautiful things! <br /> These days I'm interested in:
          </Typography>
          <Box component="ul" sx={{ mt: 2, mb: 3 }}>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>
              Strange lamps
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>
              Turning industrial engineering diagrams into art
            </Typography>
            <Typography component="li" variant="body1">
              Embedded systems programming
            </Typography>
          </Box>

          <Button
            variant="contained"
            href="/assets/madeleine_portfolio.pdf"
            target="_blank"
            sx={{
              py: 1.5,
              mt: 4,
              backgroundColor: 'black',
              color: 'white',
              '&:hover': {
                backgroundColor: 'black'
              }
            }}
          >
            View Resume (PDF)
          </Button>
        </Box>

        {/* Right Sidebar */}
        <Box sx={{
          width: { xs: '100%', md: '320px' },
          flexShrink: 0,
          position: 'sticky',
          top: 100,
          alignSelf: 'flex-start'
        }}>
          <Box
            component="img"
            src="/assets/portfolio_pic.jpg"
            alt="Madeleine Andersen"
            sx={{
              width: 280,
              height: 280,
              mx: 'auto',
              mb: 4,
              borderRadius: '50%',
              objectFit: 'cover',
              overflow: 'hidden'
            }}
          />
        </Box>
      </Box>
    </Container >
  </Box >
);

export default function Portfolio() {
  const Footer = () => (
    <Box sx={{
      backgroundColor: '#1a1a1a',
      color: 'white',
      py: 4,
      mt: 8
    }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
          <Box>
            <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Button
                color="inherit"
                onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
                sx={{ color: '#aaa', justifyContent: 'flex-start', p: 0 }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => document.getElementById('glasswork').scrollIntoView({ behavior: 'smooth' })}
                sx={{ color: '#aaa', justifyContent: 'flex-start', p: 0 }}
              >
                Glasswork
              </Button>
              <Button
                color="inherit"
                onClick={() => document.getElementById('code').scrollIntoView({ behavior: 'smooth' })}
                sx={{ color: '#aaa', justifyContent: 'flex-start', p: 0 }}
              >
                Code
              </Button>
              <Button
                color="inherit"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                sx={{ color: '#aaa', justifyContent: 'flex-start', p: 0 }}
              >
                About
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>
              Connect
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton href="mailto:your.email@example.com" sx={{ color: '#aaa' }}>
                <EmailIcon />
              </IconButton>
              <IconButton href="https://linkedin.com/in/yourusername" target="_blank" sx={{ color: '#aaa' }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://instagram.com/yourusername" target="_blank" sx={{ color: '#aaa' }}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: 'white' }}>
        <Navigation position="top" />
        <HomeSection />
        <ProjectsSection />
        <CodeSection />
        <GlassworkSection />
        <AboutSection />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
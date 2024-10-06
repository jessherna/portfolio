import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import { styled } from '@mui/system';

const AboutContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  maxWidth: '800px',
  margin: 'auto',
});

const ImageContainer = styled(Box)({
  width: '450px',
  height: '300px',
  marginRight: '2rem',
  overflow: 'hidden',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
});

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const TextContainer = styled(Box)({
  textAlign: 'left',
});

function About() {
  return (
    <AboutContainer>
      <ImageContainer>
        <StyledImage src='/jessica.jpg' alt="About Me" />
      </ImageContainer>
      <TextContainer>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Divider sx={{ width: '50px', borderBottomWidth: '3px', backgroundColor: 'blue', marginBottom: '1rem' }} />
        <Typography variant="body1" paragraph>
          I am an AI enthusiast and aspiring software developer, transitioning from over 5 years of experience in manufacturing to an exciting new career in software engineering and data analysis.
        </Typography>
        <Typography variant="body1" paragraph>
          My journey has been driven by a passion for innovation and a desire to create impactful solutions in the tech world.
        </Typography>

      </TextContainer>
    </AboutContainer>
  );
}

export default About;

import React from 'react';
import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material'; // Import Email icon
import { SiKaggle } from 'react-icons/si';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <IconButton aria-label="Email" href="mailto:jessicamariep.hernandez@gmail.com" target="_blank" color="inherit">
            <Email sx={{ fontSize: 40 }} /> {/* Added Email icon */}
          </IconButton>
          <IconButton aria-label="GitHub" href="https://github.com/jessherna" target="_blank" color="inherit">
            <GitHub sx={{ fontSize: 40 }} />
          </IconButton>
          <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/jessherna/" target="_blank" color="inherit">
            <LinkedIn sx={{ fontSize: 40 }} /> 
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
          Copyright
          {' © '}
          {new Date().getFullYear()}
          {' | '}
          Jessica Hernandez
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
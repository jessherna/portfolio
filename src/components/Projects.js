import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1.',
    image: 'https://via.placeholder.com/150',
    link: '/project1'
  },
  {
    title: 'Project 2',
    description: 'Description of project 2.',
    image: 'https://via.placeholder.com/150',
    link: '/project2'
  },
  {
    title: 'Project 3',
    description: 'Description of project 3.',
    image: 'https://via.placeholder.com/150',
    link: '/project3'
  }
];

const useStyles = makeStyles({
  card: {
    position: 'relative',
    '&:hover $overlay': {
      opacity: 1,
    },
  },
  media: {
    height: 350,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
});

function Projects() {
  const classes = useStyles();

  return (
    <section>
      <Typography variant="h2" gutterBottom align="center">
        Projects
      </Typography>
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link to={project.link} style={{ textDecoration: 'none' }}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={project.image}
                      title={project.title}
                    />
                    <Box className={classes.overlay}>
                      <Typography variant="h5" component="div" align="center">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" align="center">
                        {project.description}
                      </Typography>
                    </Box>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
}

export default Projects;
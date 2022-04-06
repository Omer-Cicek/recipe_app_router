import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import navbarStyling from './style';

const useStyles = makeStyles(navbarStyling);

const Navbar = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className={classes.linkColor}>
              Recipe App
            </Link>
          </Typography>
          <Link to={'/about'} className={classes.linkColor}>
            ABOUT
          </Link>
          <a
            href="https://github.com/Omer-Cicek"
            target={'_blank'}
            rel="noreferrer"
            className={classes.linkColor}
          >
            GITHUB
          </a>
          <Link to={'/login'} className={classes.linkColor}>
            LOGOUT
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

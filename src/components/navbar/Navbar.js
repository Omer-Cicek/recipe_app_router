// imports react router
import { Link } from 'react-router-dom';
// material ui imports
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import navbarStyling from './style';

const useStyles = makeStyles(navbarStyling);

// component
const Navbar = () => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/home'} className={classes.linkColor}>
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
          <Link
            to={'/'}
            className={classes.linkColor}
            onClick={() => sessionStorage.clear()}
          >
            LOGOUT
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

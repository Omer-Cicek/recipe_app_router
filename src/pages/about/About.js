import React from 'react';
import coding from '../../assets/coding.svg';
import { makeStyles } from '@mui/styles';
import aboutStyling from './style';

const useStyles = makeStyles(aboutStyling);

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={coding} alt="" className={classes.img} />
      <h3>
        About Fullstack Web Developer
        <span className={classes.nameSpan}> Omer Faruk</span>
      </h3>
      <div className={classes.about}>
        <h3>I'm Omer</h3>
        <h3>I'm currently learning Full-Stack Development Languages</h3>
        <h3>
          I've already known HTML, CSS, Javascript, ReactJS and some of their
          libraries.
        </h3>
        <h3>
          <span className={classes.whiteText}>Send message: </span>
          <a
            className={classes.link}
            href="https://www.linkedin.com/in/omercicek97/"
            target={'_blank'}
            rel="noreferrer"
          >
            LinkedIn Account
          </a>
        </h3>
      </div>
    </div>
  );
};

export default About;

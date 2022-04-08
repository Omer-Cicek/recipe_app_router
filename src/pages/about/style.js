const aboutStyling = {
  root: {
    backgroundColor: '#00ADB5',
    minHeight: '100vh',
    textAlign: 'center',
    marginTop: '60px',
  },
  nameSpan: {
    color: 'white',
    fontSize: '2rem',
    fontStyle: 'italic',
    fontFamily: 'Dancing Script',
  },
  img: {
    width: '75%',
  },
  about: {
    textAlign: 'right',
    border: '3px #e5e5e5 solid',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '80%',
    margin: 'auto',
  },
  whiteText: {
    color: 'white',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontStyle: 'italic',
    '&:hover': {
      color: 'white',
      transition: 'color .3s',
    },
  },
};

export default aboutStyling;

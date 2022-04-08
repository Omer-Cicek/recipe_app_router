const navbarStyling = {
  root: {
    '&.MuiPaper-root': {
      backgroundColor: '#E0F1DD',
    },
    display: 'block',
  },

  linkColor: {
    color: '#245867',
    textDecoration: 'none',
    padding: '10px',
    transform: 'scale(1)',
    transition: 'transform .1s ease-in-out',
    fontWeight: 500,

    '&:hover': {
      color: '#3993ad',
      transform: 'scale(1.1)',
      transition: 'transform .3s ease-in-out',
    },
  },
};

export default navbarStyling;

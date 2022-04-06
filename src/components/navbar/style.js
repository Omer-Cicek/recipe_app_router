const navbarStyling = {
  root: {
    background: 'linear-gradient( #E0F1DD , #E0F1DD )',
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

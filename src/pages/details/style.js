const detailStyles = {
  root: {
    width: '100vw',
    minHeight: '100vh',
    padding: '100px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overFlowX: 'none',

    '&.MuiBox-root': {
      backgroundColor: '#00ADB5',
    },

    '& h1': {
      color: '#E0F1DD',
      marginBottom: '10px',
    },

    '& img': {
      width: '300px',
      height: '300px',
      border: '5px solid #E0F1DD',
      borderRadius: '30px',
    },
  },

  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '600px',
    margin: '50px 0',
    gap: '30px',

    '& h3': {
      color: '#E0F1DD',
      marginBottom: '10px',
    },
  },

  ingredients: {
    width: '400px',

    '& h3': {
      color: '#E0F1DD',
      textAlign: 'center',
      marginBottom: '10px',
    },
  },

  button: {
    width: '200px',
    height: '55px',

    '&.MuiButton-root': {
      backgroundColor: '#E0F1DD',
      color: '#272727',
      fontSize: '15px',
      marginTop: '100px',
    },
    '&.MuiButton-root:hover': {
      backgroundColor: '#E0F1DD',
      color: '#272727',
      fontSize: '15px',
    },
  },
};

//     backgroundColor: '#00ADB5',
//     border: '3px solid #E0F1DD',
export default detailStyles;

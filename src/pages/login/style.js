const loginStyling = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: '#00ADB5',
    color: 'red ',
    gap: '10px',
  },
  button: {
    '&.MuiButton-contained': {
      color: '#333',
    },
    '&.MuiButton-root': {
      backgroundColor: '#E0F1DD',
    },
    '&.MuiButton-root:hover': {
      backgroundColor: '#e3ffde',
    },
  },

  textfield: {
    width: '100%',

    '& input': {
      color: 'white',
    },

    '& label': {
      color: 'white',
    },

    '& label.Mui-focused': {
      color: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: '#fff',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#fff',
      },
    },
  },
};

export default loginStyling;

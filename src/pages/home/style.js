const homeStyling = {
  root: {
    minHeight: '100vh',
    minWidth: '90vw',
    marginTop: '60px',
    backgroundColor: '#00ADB5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  userInput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    border: '2px #E0F1DD solid',
    borderRadius: '10px',
    padding: '30px',
  },

  input: {
    width: '200px',
    '& input': {
      color: 'white',
    },

    '& label': {
      color: 'white',
    },

    '& label.Mui-focused': {
      color: '#fff',
    },
    '&.MuiTextField-root': {
      color: '#E0F1DD',
    },
  },
  button: {
    width: '150px',
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
  dropdown: {
    '&.MuiFormLabel-root': {
      color: 'white',
    },
  },
};

export default homeStyling;

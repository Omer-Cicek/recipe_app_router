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
    gap: '10px',
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
    '& .MuiInput-underline:after': {
      borderBottomColor: '#E0F1DD',
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
    width: '200px',

    '& input': {
      color: 'purple',
    },

    '& label': {
      color: 'white',
    },

    '& label.Mui-focused': {
      color: '#E0F1DD',
    },

    '& .MuiInput-underline:after': {
      borderBottomColor: '#E0F1DD',
    },

    '& .MuiOutlinedInput-root': {
      color: 'white',
      '& fieldset': {
        borderColor: 'white',
      },

      '&:hover fieldset': {
        borderColor: '#E0F1DD',
      },

      '&.Mui-focused fieldset': {
        borderColor: '#E0F1DD',
      },
    },

    '& div.MuiOutlinedInput-root div.MuiSelect-select': {
      color: 'white',
    },
  },
  mealCard: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
export const recipeCardStyling = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '20px',
  },
  card: {
    margin: '10px',
    transition: 'transform 0.3s',

    '&:hover': {
      transform: 'scale(1.05)',
      cursor: 'pointer',
      transition: 'transform 0.4s',
    },
  },
};

export default homeStyling;

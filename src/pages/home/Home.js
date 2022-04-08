import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Box,
  InputLabel,
  FormControl,
  NativeSelect,
  Button,
  TextField,
} from '@mui/material';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    minWidth: '90vw',
    marginTop: '60px',
    backgroundColor: '#00ADB5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
});

const Home = () => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <Box className={classes.userInput}>
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          className={classes.input}
        />
        <Button variant="contained" className={classes.button}>
          Search
        </Button>
        <FormControl>
          <InputLabel
            variant="standard"
            htmlFor="uncontrolled-native"
            className={classes.dropdown}
          >
            Age
          </InputLabel>
          <NativeSelect
            defaultValue={'Breakfast'}
            inputProps={{
              name: 'food',
              id: 'uncontrolled-native',
            }}
          >
            <option value={'Breakfast'}>Breakfast</option>
            <option value={'Lunch'}>Lunch</option>
            <option value={'Dinner'}>Dinner</option>
            <option value={'Snack'}>Snack</option>
            <option value={'Teatime'}>Teatime</option>
          </NativeSelect>
        </FormControl>
      </Box>
    </main>
  );
};

export default Home;

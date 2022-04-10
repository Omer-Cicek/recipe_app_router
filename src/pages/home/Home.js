//imports
import { makeStyles } from '@mui/styles';
import {
  Box,
  InputLabel,
  FormControl,
  NativeSelect,
  Button,
  TextField,
} from '@mui/material';
import homeStyling from './style';
import { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';

const useStyles = makeStyles(homeStyling);

const Home = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const [meal, setMeal] = useState('');
  const [dataFood, setDataFood] = useState([]);

  //api keys and url
  const APP_KEY = '8e0de6073bcc7125b71b0c0d3fd7ce03';
  const APP_ID = '2061853d';
  const apiUrl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  // fetch data function when click button
  const fetchData = async () => {
    try {
      const res = await axios(apiUrl);
      const hits = await res.data.hits;
      setDataFood(hits);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={classes.root}>
      <h1>Food App</h1>
      <Box className={classes.userInput}>
        {/* textfield */}
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          className={classes.input}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* dropdown list */}
        <FormControl className={classes.dropdown}>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Meal
          </InputLabel>
          <NativeSelect
            defaultValue={'breakfast'}
            inputProps={{
              name: 'food',
              id: 'uncontrolled-native',
            }}
            onChange={(e) => setMeal(e.target.value)}
          >
            <option value={'breakfast'}>Breakfast</option>
            <option value={'lunch'}>Lunch</option>
            <option value={'dinner'}>Dinner</option>
            <option value={'snack'}>Snack</option>
            <option value={'teatime'}>Teatime</option>
          </NativeSelect>
        </FormControl>
        {/* button */}
        <Button
          variant="contained"
          className={classes.button}
          onClick={fetchData}
        >
          Search
        </Button>
      </Box>
      {/* sending data to RecipeCard component */}
      <Box className={classes.mealCard}>
        {dataFood &&
          dataFood.map((eachFood, index) => {
            return <RecipeCard eachFood={eachFood} key={index} id={index} />;
          })}
      </Box>
    </main>
  );
};

export default Home;

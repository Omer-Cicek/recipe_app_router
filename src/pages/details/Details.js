// imports
import { useLocation, useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Box, Button } from '@mui/material';
import detailStyles from './style';

const useStyles = makeStyles(detailStyles);

//details component
const Details = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const detail = location?.state?.eachFood?.recipe;

  // destructuring data that comes with useNavigate-useLocation
  const {
    label: name,
    image: imgUrl,
    ingredientLines: ingredients,
    digest: nutrients,
  } = detail;

  //nutrients array
  const nutrientsArr = nutrients.map((nutrient, i) => {
    return (
      i < 8 && (
        <p key={i}>
          {nutrient.label}: {nutrient.total.toFixed(2)}
          {nutrient.unit}
        </p>
      )
    );
  });
  //ingredients array
  const ingredientsArr = ingredients.map((ingredient, i) => (
    <p key={i}>{`${i + 1} - ${ingredient}`}</p>
  ));

  return (
    <Box className={classes.root}>
      <h1>{name}</h1>
      {/* img and nutrients */}
      <Box className={classes.container}>
        <img src={imgUrl} alt="" />
        <Box className={classes.nutrients}>
          <h3>Nutrients</h3>
          {nutrientsArr}
        </Box>
      </Box>
      {/* ingredients */}
      <Box className={classes.ingredients}>
        <h3>Ingredients</h3>
        {ingredientsArr}
      </Box>
      {/* button to go previous page */}
      <Button className={classes.button} onClick={() => navigate(-1)}>
        Back to Recipes
      </Button>
    </Box>
  );
};

export default Details;

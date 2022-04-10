//imports material ui
import { makeStyles } from '@mui/styles';
import { Card, Typography, CardMedia, CardContent } from '@mui/material';
import { recipeCardStyling } from './style';
//imports react router
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(recipeCardStyling);

//component
const RecipeCard = ({ eachFood, id }) => {
  const classes = useStyles();
  let navigate = useNavigate();
  //show details page and send data to details component
  const clickHandler = (e) => {
    navigate('/details', { state: { eachFood } });
  };

  return (
    <div className={classes.root}>
      <Card
        sx={{ maxWidth: 350 }}
        id={id}
        className={classes.card}
        onClick={(e) => clickHandler(e.currentTarget)}
      >
        {/* image Card */}
        <CardMedia
          component="img"
          height="200"
          image={eachFood.recipe.image}
          alt="food"
        />
        {/* card information part  */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {eachFood.recipe.label}
          </Typography>
          <hr />
          Calories: {eachFood.recipe.calories.toFixed(2)} j
          <pre />
          <Typography variant="body2" color="text.secondary">
            You can click the card to see details for each food!
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecipeCard;

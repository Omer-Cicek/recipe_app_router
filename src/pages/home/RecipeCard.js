import { makeStyles } from '@mui/styles';
import { Card, Typography, CardMedia, CardContent } from '@mui/material';
import { recipeCardStyling } from './style';
import Details from '../details/Details';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(recipeCardStyling);

const RecipeCard = ({ dataFood }) => {
  const classes = useStyles();
  let navigate = useNavigate();
  //card click handler func
  const clickHandler = (id) => {
    const asArray = Object.values(dataFood);
    asArray.filter(
      (item, index) =>
        id == index &&
        console.log(item.recipe.label) && <Details item={item.recipe.label} />
    );
  };
  return (
    <div className={classes.root}>
      {dataFood.map((eachFood, index) => {
        return (
          <Card
            sx={{ maxWidth: 350 }}
            key={index}
            id={index}
            className={classes.card}
            onClick={(e) => clickHandler(e.currentTarget.id)}
          >
            <CardMedia
              component="img"
              height="200"
              image={eachFood.recipe.image}
              alt="food"
            />
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
        );
      })}
    </div>
  );
};

export default RecipeCard;

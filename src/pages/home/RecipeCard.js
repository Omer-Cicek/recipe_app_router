import React from 'react';
import useId from 'react-use-uuid';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
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
});

const RecipeCard = ({ dataFood }) => {
  const id = useId();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {dataFood.map((eachFood, uniqueid = id) => {
        return (
          <Card sx={{ maxWidth: 300 }} key={uniqueid} className={classes.card}>
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
              <Typography variant="body2" color="text.secondary">
                You can click the button to see the details about each food!
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default RecipeCard;

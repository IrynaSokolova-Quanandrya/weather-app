import * as React from 'react';
import { NavLink } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import s from './CityCard.module.css';

export default function CityCard({
  id,
  temp, 
  name, 
  country, 
  weather, 
  coord, 
  refetch}) {

  return (
    <div>
    <Card sx={{ maxWidth: 345 }} className={s.list__item}>
      {coord.lon} {coord.lat}
      <CardMedia
        component="img"
        alt={weather[0].description}
        height="140"
        image={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
      />
      <CardContent>
        {Math.round(temp.temp)} &#8451;
        <Typography gutterBottom variant="h5" component="div">
          {name}, {country.country}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {weather[0].main}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="big">
          <NavLink to={`/cities/${id}`} state={{from: coord}}>See more</NavLink>
        </Button>
        <Button size="big" onClick={refetch}>Update</Button>
        <Button size="big">Delete</Button>
        
      </CardActions>
    </Card>
    </div>
  );
}

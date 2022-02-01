import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import s from './CityCard.module.css';
const icon = 'http://openweathermap.org/img/wn/10d@2x.png'
export default function CityCard({temp, name, country, weather}) {
  console.log('temp:', temp);
  console.log('name:', name);
  console.log('country:', country);
  console.log('weather:', weather);
  return (
    // <div>
    //    <h3>{name}, {country.country}</h3>
    //    <p>{temp.temp}</p>

    // </div>
    <Card sx={{ maxWidth: 345 }} className={s.list__item}>
      <CardMedia
        component="img"
        alt={weather[0].description}
        height="140"
        image={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}, {country.country}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

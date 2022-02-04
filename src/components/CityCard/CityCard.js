import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import weatherActions from '../../redux/actions'
import {updateCity, getHourlyWeather} from '../../redux/operations'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import s from './CityCard.module.css';


export default function CityCard({data}) {
  const dispatch = useDispatch();
    const {id,
            main, 
            name, 
            sys, 
            weather, 
            coord,
            wind} = data;
            const{lat, lon} = coord;
  const onDeleteCity = e => {
    const id = e.target.id;
    dispatch(weatherActions.deleteCity(+id));
  }
  const onDetails = (e) => {
    const id = e.currentTarget.id;
    dispatch(weatherActions.cityId(id))
    
  };

  const updateData = () => {
    dispatch(updateCity(name));
  };

  

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
        {Math.round(main.temp)} &#8451;
        <Typography gutterBottom variant="h5" component="div">
          {name}, {sys.country}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {weather[0].main}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="big">
        <NavLink to={`/cities/${id}`} 
            ditails={onDetails}
            state={{from: data}}
        >See more</NavLink>
        </Button>
        <Button size="big" onClick={updateData}>Update</Button>
        <Button size="big" onClick={onDeleteCity} id={id}>Delete</Button>
        
      </CardActions>
    </Card>
    </div>
  );
}

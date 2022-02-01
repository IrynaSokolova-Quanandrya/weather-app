import { current } from '@reduxjs/toolkit';
import { NavLink, Outlet, useLocation, useNavigate} from 'react-router-dom';
import { useGetCityDitailsQuery } from '../../../redux/slice';
import s from './CityDitailPage.module.css'

export default function CityDitailPage(){
    const location = useLocation();
    const navigate = useNavigate();

    const {from, pathname} = location.state;
console.log(from);
    const {data, error, isLoading} = useGetCityDitailsQuery(from, {
        skip: pathname === '/cities/:cityId'
    })
    console.log(data);
    const {current, timezone} = data;
    return(
        <>
        <button 
        onClick={() => navigate(-1)}
        className={s.button}>
            Go Back
        </button>
        <h2>Name, Country</h2>
        <ul>
            <li>{current.weather[0].description}</li>
            <li>Temperature {current.temp}</li>
            <li>Feels like {current.feels_like}</li>
            <li>Humidity {current.humidity}</li>
            <li>Pressure {current.pressure}</li>
            <li>Wind speed {current.wind_speed}</li>
            <li>Timezone {timezone}</li>
            <li>
                <img 
                src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
                alt={current.weather[0].description}/>
            </li>

        </ul>

        

        <NavLink to={'/cities/:cityId/hourly'}>Show hourly forecast</NavLink>
        <Outlet/>
</>
    )
}
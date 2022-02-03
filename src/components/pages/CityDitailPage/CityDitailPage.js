import { NavLink, Outlet, useLocation, useNavigate} from 'react-router-dom';
import s from './CityDitailPage.module.css'

export default function CityDitailPage(){
    const location = useLocation();
    const navigate = useNavigate();
    const {from} = location.state;
    const {
        id,
        weather,
        main,
        timezone,
        sys,
        name,
        wind,
        coord
    } = from;
    return(
        <>
        <button 
        onClick={() => navigate(-1)}
        className={s.button}>
            Go Back
        </button>
        <h2>{name}, {sys.country}</h2> 
         {from &&    
        <ul>
            <li>{weather[0].description}</li>
            <li>Temperature {main.temp}</li>
            <li>Feels like {main.feels_like}</li> 
            <li>min:{main.temp_max}, max:{main.temp_min}</li>
            <li>Humidity {main.humidity}%</li>
            <li>Pressure {main.pressure}</li>
            <li>Wind speed {wind.speed}</li>
            <li>Timezone {timezone}</li>
            <li>
                <img 
                src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt={weather[0].description}/>
            </li>
        </ul>
    }
        <NavLink to={`/cities/${id}/hourly`} state={{from: coord}} >Show hourly forecast</NavLink> 
        <Outlet/>
        </>
    )
}
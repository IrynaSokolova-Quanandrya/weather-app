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
        <div className={s.weather__ditails}>
        <h2>{name}, {sys.country}</h2> 
         {from &&    
        <ul className={s.weather__list}>
            <li className={s.weather__item}>Temperature {main.temp} &#8451;</li>
            <li className={s.weather__item}>Feels like {main.feels_like} &#8451;</li> 
            <li className={s.weather__item}>min:{main.temp_max} &#8451;, max:{main.temp_min} &#8451;</li>
            <li className={s.weather__item}>Humidity {main.humidity}%</li>
            <li className={s.weather__item}>Pressure {main.pressure} Pa</li>
            <li className={s.weather__item}>Wind speed {wind.speed} m/s</li>
            <li className={s.weather__item}>Timezone {timezone}</li>
            <li className={s.weather__item}>
                <img 
                src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt={weather[0].description}/>
            </li>            
            <li className={s.weather__item}>{weather[0].description}</li>

        </ul>
    }
        </div>
        {/* <NavLink 
            to={`/cities/${id}/hourly`} 
            state={{from: coord}} 
            className={s.link}
            >
                Show hourly forecast
        </NavLink>  */}
        <Outlet/>
        </>
    )
}
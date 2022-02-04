import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useLocation} from 'react-router-dom'
import {getHourlyWeather} from '../../../redux/operations'
import s from './HourlyForecast'


export default function HourlyForecast(){
  
  const dispatch = useDispatch
  const location = useLocation;
  const {from} = location.state;
  const {lat, lon} = from
  useEffect(() => {
    dispatch(
      getHourlyWeather(lat, lon)
    );
  }, [from, dispatch]);
  
    return(
        <>
        {/* <div>
        <div className={s.hourlyTemp}> */}
          {/* <ul className={s.listHourTemp}> */}
            {/* {hourlyTemp.map((hour, idx) => {
              let timeHour = new Date(hour.dt * 1000).getHours();

              if (timeHour < 10) {
                timeHour = `0${timeHour}`;
              }

              const red = 125;
              const green = 125;
              const blue = 255;

              const tempColor = hour.temp - 273;
              const x = (tempColor / 10) * 100;
              const r = Math.floor(((255 - 125) * x) / 100);

              return (
                <li key={hour.dt} className={s.itemHourTemp}>
                  <p
                    className={s.temp}
                    style={{
                      marginTop: `${40 - Math.floor(hour.temp - 273)}px`,
                      backgroundColor: `rgb(${red + r}, ${green}, ${blue - r})`,
                    }}
                  >
                    {Math.floor(hour.temp - 273)}
                  </p>
                  {/* <div className={s.overlay}></div> */}
                  {/* <p className={s.time}>{timeHour}:00</p>
                </li>
              );
            })}
          </ul>
        </div>
        </div> */}
         {/* */} 
        </>
        
    )
}


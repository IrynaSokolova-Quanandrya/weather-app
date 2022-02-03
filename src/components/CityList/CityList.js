import s from './CityList.module.css'
import CityCard from "../CityCard/CityCard";
import { useSelector } from 'react-redux';
import { cityList } from '../../redux/selectors';

export default function CityList(){
    const cityListWeather = useSelector(cityList)
    console.log(cityListWeather);
    return(
        <div>
        <ul className={s.list}>
            {cityListWeather.map((data)=>(
            <CityCard key={data.id} data={data}/>
            )) 
            }
        </ul>
        </div>
    )
}
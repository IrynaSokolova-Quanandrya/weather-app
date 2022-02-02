import s from './CityList.module.css'
import CityCard from "../CityCard/CityCard";
import { useLocation } from 'react-router-dom';

export default function CityList({data, onRefetch}){
const location = useLocation();
// console.log(location);
    // console.log(onGetCoord());
    const {
        id,
        coord,
        main, 
        name,
        sys,
        weather
    } = data
    // console.log(main);
    return(
        <div>
        <ul className={s.list}>
            <CityCard 
            id={id}
            refetch={onRefetch}
            coord={coord}
            temp={main}
            name={name}
            country={sys}
            weather={weather}/>
        </ul>
        </div>
    )
}
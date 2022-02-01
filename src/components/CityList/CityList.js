import s from './CityList.module.css'
import CityCard from "../CityCard/CityCard";
// import { Outlet } from 'react-router-dom';

export default function CityList({data}){
    console.log(data.main);
    const {
        main, 
        name,
        sys,
        weather
    } = data
    console.log(main);
    return(
        <div>
        <ul className={s.list}>
            <CityCard 
            temp={main}
            name={name}
            country={sys}
            weather={weather}/>
        </ul>
        {/* <Outlet/> */}
        </div>
    )
}
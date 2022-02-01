import s from './CityList.module.css'
import CityCard from "../CityCard/CityCard";

export default function CityList({data}){

    // console.log(onGetCoord());
    const {
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
            coord={coord}
            temp={main}
            name={name}
            country={sys}
            weather={weather}/>
        </ul>
        </div>
    )
}
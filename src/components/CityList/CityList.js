import s from './CityList.module.css'
import CityCard from "../CityCard/CityCard";

export default function CityList(){
    return(
        <ul className={s.list}>
            <CityCard/>
        </ul>
    )
}
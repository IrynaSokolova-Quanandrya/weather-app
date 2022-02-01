import { NavLink, Outlet} from 'react-router-dom';
import s from './CityDitailPage.module.css'

export default function CityDitailPage(){
    return(
        <>
        <h2>City name</h2>
        
        <NavLink to={'/cities/:cityId/hourly'}>Show hourly forecast</NavLink>
        <Outlet/>
</>
    )
}
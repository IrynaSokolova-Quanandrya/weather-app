import { Link } from 'react-router-dom'
import CityList from '../../CityList/CityList'
import Search from '../../Search/Search'

export default function CitiesPage(){
    return(
        <>
            <Search/>
            <CityList/>
            <Link to={'/city/:cityId'}>See more</Link>
            <Link to={'/city/:cityId/hourly'}>Hourly forecast</Link>
        </>
        
    )
}
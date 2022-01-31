import { Link } from 'react-router-dom'
import CityCard from '../../CityCard/CityCard'
import Search from '../../Search/Search'

export default function CitiesPage(){
    return(
        <>
            <Search/>
            <CityCard/>
            <Link to={'/city/:cityId'}>See more</Link>
            <Link to={'/city/:cityId/hourly'}>Hourly forecast</Link>
        </>
        
    )
}
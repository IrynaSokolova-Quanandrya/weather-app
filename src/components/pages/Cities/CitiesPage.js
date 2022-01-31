import { Link } from 'react-router-dom'
import Search from '../../Search/Search'

export default function CitiesPage(){
    return(
        <>
            <Search/>
            <h2>Cities page</h2>
            <Link to={'/city/:cityId'}>See more</Link>
            <Link to={'/city/:cityId/hourly'}>Hourly forecast</Link>
        </>
        
    )
}
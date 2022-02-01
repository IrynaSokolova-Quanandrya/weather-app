import { useState } from 'react';
import CityList from '../../CityList/CityList'
import Search from '../../Search/Search'
import {useGetCityByNameQuery} from '../../../redux/slice'


export default function CitiesPage(){
    const [cityName, setCityName] = useState('')
    const {data, error, isLoading} = useGetCityByNameQuery(cityName, {
        skip: cityName === '',
    })
console.log(data);

    const searchQuery = (query) => {
        setCityName(query)
    }
    return(
        <>
            <Search onSubmit={searchQuery}/>
            {data && <CityList data={data}/>}
        </>
        
    )
}
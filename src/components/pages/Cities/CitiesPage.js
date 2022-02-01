import { useState } from 'react';
import { toast } from 'react-toastify';
import CityList from '../../CityList/CityList'
import Search from '../../Search/Search'
import {useGetCityByNameQuery} from '../../../redux/slice'
import { Hearts } from 'react-loader-spinner';

export default function CitiesPage(){
    const [cityName, setCityName] = useState('')
    const {data, error, isLoading} = useGetCityByNameQuery(cityName, {
        skip: cityName === '',
    })
    const searchQuery = (query) => {
        setCityName(query)
    }
    return(
        <>
            <Search onSubmit={searchQuery}/>
            {isLoading && <Hearts color="#00BFFF" height={80} width={80} />}
            {data && <CityList data={data}/>}
            {error && toast('Oops! Something went wrong((', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })}
        </>
        
    )
}
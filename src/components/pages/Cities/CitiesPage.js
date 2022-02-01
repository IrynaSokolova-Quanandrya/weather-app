import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import CityList from '../../CityList/CityList'
import Search from '../../Search/Search'
import {useGetCityByNameQuery} from '../../../redux/slice'
import { Hearts } from 'react-loader-spinner';

export default function CitiesPage(){
    const [cityName, setCityName] = useState('')
    const {data, error, isLoading, refetch} = useGetCityByNameQuery(cityName, {
        skip: cityName === '',
    })
    // console.log(error);
    const searchQuery = (query) => {
        setCityName(query)
    }
    const notify = () => toast(`Can't find ${cityName}`);
    return(
        <>
            <Search onSubmit={searchQuery}/>
            {isLoading && <Hearts color="#00BFFF" height={80} width={80} />}
            {data && <CityList data={data} onRefetch={refetch}/>}
            {error && notify()}
        </>
        
    )
}
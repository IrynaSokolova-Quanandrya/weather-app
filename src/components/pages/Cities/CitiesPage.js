import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import {citiesList, loading, error} from '../../../redux/selectors'
import CityList from '../../CityList/CityList'
// import Search from '../../Search/Search'
// import {useGetWeatherByCityNameQuery} from '../../../redux/slices/weatherSlice';
import Alert from '@mui/material/Alert';
import { Hearts } from 'react-loader-spinner';
import { addCity} from '../../../redux/operations';
import weatherActions from '../../../redux/actions'
import s from './CitiesPage.module.css'


export default function CitiesPage(){
    const [query, setQuery] = useState('')

    const list = useSelector(citiesList)
    const isLoading = useSelector(loading)
    const dataError = useSelector(error)

    const dispatch = useDispatch();
    
    const handleSubmit = e => {
        e.preventDefault()
        if(query.trim() === ''){
            return toast.error("Enter city")
        }
        dispatch(addCity(query, list))
        setQuery('')
    }
    const handleChange = e => {
        setQuery(e.target.value)
    }
    const handleClose = () => {
        dispatch(weatherActions.errorOff({ error: false }));
      }
    return(
        <>
            <form onSubmit={handleSubmit} className={s.SearchForm}>
                    <input
                        className={s.SearchForm__input}
                        onChange={handleChange}
                        value={query}
                        name='query'
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Enter city you want to add"
                    />
                    <button type="submit" className={s.SearchForm__button}>
                        <span className={s.SearchForm__buttonLabel}>Add</span>
                    </button>
                </form>
            {isLoading && <Hearts color="#00BFFF" height={80} width={80} />} 
            <CityList />
            {dataError && 
            <Alert
                severity="error"
                onClose={handleClose}
            >
              {error.message}
            </Alert>}
        </>
        
    )
}
import { useState } from 'react';
import { toast } from 'react-toastify';
import s from './Search.module.css'


export default function Search({onSubmit}){
    const [query, setQuery] = useState('');

    const handleSubmit = e => {
        e.preventDefault()
        if(query.trim() === ''){
            return toast.error("Enter city")
        }
        onSubmit(query)
        setQuery('');
    }
    const handleChange = e => {
        setQuery(e.target.value.toLowerCase())
    }

    return(
        <form onSubmit={handleSubmit} className={s.SearchForm}>
                    <input
                        className={s.SearchForm__input}
                        onChange={handleChange}
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
    )
}
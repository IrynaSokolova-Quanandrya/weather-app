import s from './Search.module.css'


export default function Search(){
    return(
        <form  className={s.SearchForm}>
                    <input
                        className={s.SearchForm__input}
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
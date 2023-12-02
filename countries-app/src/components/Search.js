import '../styles/Search.css'
import { useContext } from 'react'
import { SearchContext } from '../contexts/SearchContext'


function Search() {
    const {setInputTxt} = useContext(SearchContext)

    function searchChange(e) {
        setInputTxt(e.currentTarget.value.toLowerCase())
    }
    
    return (
        <div className="Search">
            <label htmlFor="searchInput"></label>
            <input type="text" placeholder="Search for a country..." name="searchInput" maxLength="40" onChange={searchChange}></input>
        </div>
    )
}

export default Search
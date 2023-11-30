import '../styles/Search.css'
import { useState } from 'react'


function Search() {
    const [inputTxt, setInputTxt] = useState('')

    function searchChange(e) {
        
    }
    
    return (
        <div className="Search">
            <label htmlFor="searchInput"></label>
            <input type="text" placeholder="Search for a country..." name="searchInput" maxLength="40" onChange={searchChange}></input>
        </div>
    )
}

export default Search
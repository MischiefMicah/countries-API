import '../styles/Search.css'

function Search() {
    return (
        <div className="Search">
            <label htmlFor="searchInput"></label>
            <input type="text" placeholder="Search for a country..." name="searchInput" maxLength="40"></input>
        </div>
    )
}

export default Search
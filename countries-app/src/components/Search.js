import '../styles/Search.css'

function Search() {
    return (
        <div className="Search">
            <label for="searchInput"></label>
            <input type="text" placeholder="Search for a country..." name="searchInput"></input>
        </div>
    )
}

export default Search
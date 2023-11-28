import '../styles/Filter.css'
import downSvg from '../styles/icons/chevron-down-outline.svg'

function Filter() {
    return (
        <div className="Filter">
            <button>Filter by Region<img src={downSvg}></img></button>
            <ul className="dropDwn">
                <li>Africa</li>
                <li>America</li>
                <li>Asia</li>
                <li>Europe</li>
                <li>Oceania</li>
            </ul>
        </div>
    )
}

export default Filter
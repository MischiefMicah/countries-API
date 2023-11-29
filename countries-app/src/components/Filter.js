import '../styles/Filter.css'
import downSvg from '../styles/icons/chevron-down-outline.svg'

const dropDwnFunc = () => {
    const dropDwn = document.querySelector(".dropDwn")
    if (dropDwn.classList.contains("show")) {
        dropDwn.classList.remove("show")
    } else dropDwn.classList.add("show")
}

function Filter() {
    return (
        <div className="Filter">
            <button onClick={dropDwnFunc}>Filter by Region<img src={downSvg}></img></button>
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
import '../styles/Filter.css'
import downSvg from '../styles/icons/chevron-down-outline.svg'
import { SearchContext } from '../contexts/SearchContext'
import { useContext } from 'react'

function Filter() {

    const {setDropFil} = useContext(SearchContext)

    const dropDwnFunc = () => {
        const dropDwn = document.querySelector(".dropDwn")
        if (dropDwn.classList.contains("show")) {
            dropDwn.classList.remove("show")
        } else dropDwn.classList.add("show")
    }

    function liClickHandler(e){
        if (e.currentTarget.classList.contains('liBlue')) {
            document.querySelectorAll('ul.dropDwn > li').forEach((li) => li.classList.remove('liBlue'))
            setDropFil('')
        } else {
            document.querySelectorAll('ul.dropDwn > li').forEach((li) => li.classList.remove('liBlue'))
            e.currentTarget.classList.add('liBlue')
            setDropFil(e.currentTarget.innerHTML.toLowerCase())
        }
    }

    document.querySelectorAll('ul.dropDwn > li').forEach((li) => li.onclick=liClickHandler)
    
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
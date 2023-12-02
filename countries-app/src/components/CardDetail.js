import { useContext } from 'react'
import { SearchContext } from '../contexts/SearchContext'
import { useLocation } from 'react-router-dom'

function CardDetail() {
    const location = useLocation()
    console.log(location.state.data)
    return (
        <div>
            
        </div>
    )
}

export default CardDetail
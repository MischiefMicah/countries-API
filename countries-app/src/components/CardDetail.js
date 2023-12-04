import { useContext } from 'react'
import { SearchContext } from '../contexts/SearchContext'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

function CardDetail() {
    let navigate = useNavigate()
    let {} = useParams()
    const location = useLocation()
    const data = location.state.data
    const allData = location.state.allData
    const mapData = (arg) => {
        return (
            arg.map((x, i, arr) => {
                if (i + 1 === arr.length) {
                    return x.name
                } else {
                    return `${x.name}, `
                }
            }))
    }
    const deBorders = (borders, data) => {
        return (
            <div>
                <h2>Border Countries:</h2>
                <ul>
                    {
                    borders.map((code) => {
                        return data.map((country, key) => {
                            if (country.alpha3Code === code) {
                                return <li key={key} onClick={() => navigate(`/card/${country.name}`, {state: {data:country, allData:allData}})}>{country.name}</li>
                            }
                        })
                    })
                    }
                </ul>
            </div>
        )


    }
    
    return (
        <div>
            <button onClick={() => {navigate('/')}}><img/>Back</button>
            <div className='deFlag'><img  src={data.flags.svg} alt={`${data.name}'s' flag`}/></div>
            <div className='deTop'>
                <div className='deName'>{data.name}</div>
                <div className='deNatName'>Native Name: {data.nativeName}</div>
                <div className='dePop'>Population: {data.population}</div>
                <div className='deReg'>Region: {data.region}</div>
                <div className='deSubReg'>Sub Region: {data.subregion}</div>
                <div className='deCap'>Capital: {data.capital}</div>
            </div>
            <div className='deBot'>
                <div className='deDom'>Top Level Domain: {data.topLevelDomain}</div>
                <div className='deCurr'>Currencies: {mapData(data.currencies)}</div>
                <div className='deLang'>Languages: {mapData(data.languages)}</div>
            </div>
            {data.borders === undefined ? console.log('no borders') : deBorders(data.borders, allData)}
        </div>
    )
}

export default CardDetail
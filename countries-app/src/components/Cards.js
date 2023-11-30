import countData from '../data.json'
import '../styles/Cards.css'

function numCommas (arg){
    return arg.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Cards() {
    return (
        <div>
            <div className="cardsContainer">
                {countData.map((data, key) => {
                    return (
                        <div className="card" key={key}>
                            <div className="cardFlag">
                                <img src={data.flags.svg} alt="Country's flag"></img>
                            </div>
                            <div className="cardName">
                                {data.name}
                            </div>
                            <div className="cardPop">
                                Population: <span>{numCommas(data.population)}</span>
                            </div>
                            <div className="cardReg">
                                Region: <span>{data.region}</span>
                            </div>
                            <div className="cardCap">
                                Capital: <span>{data.capital}</span>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Cards
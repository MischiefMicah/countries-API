import countData from '../data.json'
import '../styles/Cards.css'

function Cards() {
    return (
        <div>
            <div className="cardsContainer">
                {countData.map((data, key) => {
                    return (
                        <div className="card" key={key}>
                            <div className="cardFlag">
                                <img src={data.flags.svg}></img>
                            </div>
                            <div className="cardName">
                                {data.name}
                            </div>
                            <div className="cardPop">
                                {data.population}
                            </div>
                            <div className="cardReg">
                                {data.region}
                            </div>
                            <div className="cardCap">
                                {data.capital}
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Cards
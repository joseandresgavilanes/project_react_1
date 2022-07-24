import quotes from "../JSON/quotes.json"
import React, { useState } from 'react'
import FinalResult from "./FinalResult"
import '../App.css'



const colors = [
    "#d3f9a9",
    "#64cde0",
    "#efe44c",
    "#8728fc",
    "#7cffed",
    "#4e21e0",
    "#44e298",
    "#4c5ead",
    "#c93a3a",
    "#f2b38e",
]

const Card = () => {

    const getRandomNumber = (array) => {
        const random = Math.floor(Math.random() * array.length)
        return array[random]

    }

    let finalRandomQuote = getRandomNumber(quotes)
    let finalRandomColor = getRandomNumber(colors)

    const [quoteRandom, setQuoteRandom] = useState(finalRandomQuote)
    const [colorRandom, setColorRandom] = useState(finalRandomColor)


    const changeColor = () => {
        finalRandomQuote = getRandomNumber(quotes)
        finalRandomColor = getRandomNumber(colors)
    
        setQuoteRandom(finalRandomQuote)
        setColorRandom(finalRandomColor)
    

    }

    return (
        <div className="quotesContainer"  style={{backgroundColor: `${colorRandom}`}}>
            
            <div className="quotes" style={{color: `${colorRandom}`}}>
                <i className="fa-solid fa-quote-left"></i>
                <FinalResult quoteRandomGenerator={quoteRandom}/>
                <div className="buttonContainer">
                    <h2>{quoteRandom.author}</h2>
                    <div className="changeQuote" style={{backgroundColor: `${colorRandom}`}} onClick={changeColor}>
                        <h3 style={{color: "white", fontSize: "30px"}}>&#62;</h3>
                    </div>
                </div>      
            </div>
            
        </div>
    )
}

export default Card

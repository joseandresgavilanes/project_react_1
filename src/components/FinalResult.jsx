import React from 'react'

const FinalResult = ({ quoteRandomGenerator}) => {

    return (
        <div className='dataContainer'>
            <h1>{quoteRandomGenerator.quote}</h1>
        </div>
    )
}
export default FinalResult
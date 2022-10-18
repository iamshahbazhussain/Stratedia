import React from 'react'

// CSS :
import "./Cards.scss"




const Cards = ({ title, result, total, detail , borderColor }) => {
    return (
        <>
            <div className='card_container' style={borderColor ? {borderLeft:`3px solid ${borderColor}`} : null}>
                <div className='title'>
                    {title}
                </div>
                <div className='result'>
                    <b>{result}</b> {total && <> <b>/</b> {total} </>}
                </div>
                <div className='detail'>
                    {detail}
                </div>
            </div>
        </>
    )
}

export default Cards
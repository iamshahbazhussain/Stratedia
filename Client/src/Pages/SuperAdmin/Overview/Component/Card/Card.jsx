import React from 'react'

import './Card.scss'

const Card = ({title,para,num,borderColor}) => {
  return (
    <div className='main_card'>
      <div className="card_title">
       {title}
      </div>
      <div className="para">
      {para}
      </div>

<div className="num" style={borderColor ? { border: `1px solid ${borderColor}` } : null}  >
  {num}
</div>

    </div>
  )
}

export default Card

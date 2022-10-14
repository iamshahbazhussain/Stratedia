import React from 'react'

// image 
import wer from '../../../../Assets/wherebg.png';

// css 
import './Where.scss'




const Where = () => {
  return (
    <div className='main_where'>
      <div className="title">
        Be where your customers are
      </div>
      <div className="para">
        People spend, on average, almost 2.5 hours on social media every day.​​Let them <br /> find your brand more easily through these four simple steps:
      </div>
      <img src={wer} />
    </div>
  )
}

export default Where

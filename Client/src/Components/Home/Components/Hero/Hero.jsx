import React from 'react'

import box from '../../../../Assets/box.png'
import set from '../../../../Assets/set.png'
import cod from '../../../../Assets/cod.png'
import i from '../../../../Assets/i.png'
import line from '../../../../Assets/line.png'
import tick from '../../../../Assets/tick.png'
import mark from '../../../../Assets/mark.png'
import prog from '../../../../Assets/prog.png'
import add from '../../../../Assets/add.png'

import './Hero.scss'

const cards = [
    {
        img: box,
        name: 'Creative & design',
    },
    {
        img: cod,
        name: 'Software development',
    },
    {
        img: mark,
        name: 'Marketing',
    },
    {
        img: line,
        name: 'Project Management',
    },
    {
        img: prog,
        name: 'Sales & CRM',
    },
    {
        img: tick,
        name: 'Task Management',
    },
    {
        img: i,
        name: 'HR',
    },
    {
        img: set,
        name: 'Operations',
    },
    {
        img: add,
        name: 'More workflows',
    },
]

const Hero = () => {
    return (
        <div className='hero_main'>
            <div className="title">
                A platform built for a <br /> new way of working
            </div>

            <div className="para">
                What would you like to manage with monday.com Work OS?
            </div>

            <div className="cards_main">

                {cards.map((e) => {
                    return (
                        <>
                            <div className="card">
                                <img src={e.img} />
                                <div className="name">{e.name}</div>
                            </div>
                        </>
                    )
                })}

            </div>

            <button>
                Get Started
                <svg
                    width="14"
                    height="18"
                    viewBox="0 0 9 7"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.628.616a.5.5 0 1 0-.64.768L6.203 3.23H.5a.5.5 0 0 0 0 1h5.612L3.988 6a.5.5 0 1 0 .64.769l3.23-2.693a.5.5 0 0 0 0-.768L4.628.616z"
                    ></path>
                </svg>
            </button>

            <div className="no">
                No credit card needed &nbsp;✦ &nbsp; Unlimited time on Free plan
            </div>

        </div>
    )
}

export default Hero

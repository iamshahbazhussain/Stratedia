import React from "react";

// images 
import box from "../../../../Assets/box.png";
import set from "../../../../Assets/set.png";
import cod from "../../../../Assets/cod.png";
import i from "../../../../Assets/i.png";
import line from "../../../../Assets/line.png";
import tick from "../../../../Assets/tick.png";
import mark from "../../../../Assets/mark.png";
import prog from "../../../../Assets/prog.png";
import add from "../../../../Assets/add.png";

// react icons 
import { BsArrowRight } from "react-icons/bs";

// css 
import "./Hero.scss";


// card map 
const cards = [
    {
        img: box,
        name: "Creative & design",
    },
    {
        img: cod,
        name: "Software development",
    },
    {
        img: mark,
        name: "Marketing",
    },
    {
        img: line,
        name: "Project Management",
    },
    {
        img: prog,
        name: "Sales & CRM",
    },
    {
        img: tick,
        name: "Task Management",
    },
    {
        img: i,
        name: "HR",
    },
    {
        img: set,
        name: "Operations",
    },
    {
        img: add,
        name: "More workflows",
    },
];

const Hero = () => {
    return (
        <div className="hero_main">
            <div className="title">
                A platform built for a <br /> new way of working
            </div>
            <div className="para">
                What would you like to manage with monday.com Work OS?
            </div>
            <div className="cards_main">

                {/* card map  */}

                {cards.map((e) => {
                    return (
                        <>
                            <div className="card">
                                <img src={e.img} />
                                <div className="name">{e.name}</div>
                            </div>
                        </>
                    );
                })}


            </div>
            <button>
                Get Started
               <BsArrowRight/>
            </button>
            <div className="no">
                No credit card needed &nbsp;✦ &nbsp; Unlimited time on Free plan
            </div>
        </div>
    );
};

export default Hero;

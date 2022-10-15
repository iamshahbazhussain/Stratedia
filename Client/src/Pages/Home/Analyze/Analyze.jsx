import React from "react";

// imgs 
import ana from "../../../Assets/ana.webp";

// css 
import "./Analyze.scss";




const Analyze = () => {
    return (
        <div className="main_ana">
            <div className="left_ana">
                <div className="title_blue">1. ANALYZE</div>
                <div className="title">
                    Measure your social media performance in a few clicks
                </div>
                <div className="para">
                    See what’s working and deliver high engagement content.
                </div>
                <div className="btn_sec">
                    <button className="btn1">Get Started Now</button>
                    <button className="btn2">Learn More</button>
                </div>
            </div>
            <div className="right_ana">
                <img src={ana} />
            </div>
        </div>
    );
};

export default Analyze;

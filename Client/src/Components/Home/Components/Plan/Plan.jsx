import React from "react";

// imgs
import ana from "../../../../Assets/plan.webp";

// css
import "./Plan.scss";




const Plan = () => {
  return (
    <div className="main_plan">
      <div className="right_ana">
        <img src={ana} />
      </div>
      <div className="left_ana">
        <div className="title_blue">2. PLAN AND PUBLISH YOUR CONTENT</div>
        <div className="title">Collaborate and plan your campaigns</div>
        <div className="para">
          Schedule your posts in advance so you can focus on other things.
        </div>
        <div className="btn_sec">
          <button className="btn1">Get Started Now</button>
          <button className="btn2">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;

import React, { useState } from "react";

// Components :
import TopBar from "../../../Components/TabsBar/TopBar";
import Cards from "./Components/Cards/Cards";
import DonutChart from "./Components/DonutChart/DonutChart";
import ProgressBarChart from "./Components/ProgressBarChart/ProgressBarChart";


// CSS :
import "./Dashboard.scss";

// TopBar Tabs :
let Tabs = ["Dashboard"];


// Charts Data :
const data = {
  labels: [],
  datasets: [
    {
      data: [40, 56, 40],
      backgroundColor: ["green", "#00caef", "orange"],
      hoverBackgroundColor: ["#717274", "#36A2EB"],
      borderWidth: 1,
    },
  ],
};
const vendingdata = {
  labels: [],
  datasets: [
    {
      data: [50, 36, 40],
      backgroundColor: ["#00caef", "#e13976", "orange"],
      hoverBackgroundColor: ["#36A2EB", "#717274"],
      borderWidth: 1,
    },
  ],
};




const Dashboard = () => {
  let [selectedTab, setSelectedTab] = useState("Dashboard");

  return (
    <>
      <div className="dashboard_container">
        <TopBar
          tabs={Tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />

        <div className="das_content">
          <div className="cards_box">
            <Cards
              title="Total Followers"
              result={23}
              total={3}
              detail={"Across all Channels"}
            />
            <Cards
              title="Total Likes"
              result={7}
              total={3}
              detail={"Across all Channels"}
              borderColor="#E13976"
            />
            <Cards
              title="Total Impressions"
              result={"6.10k"}
              total={"3"}
              detail={" Across all Channels"}
              borderColor="Green"
            />
            <Cards
              title="Total Comments"
              result={"15.3k"}
              detail={"Across all Channels"}
              borderColor="Orange"
            />
          </div>
          <div className="charts_box">
            <div className="donut_chart">
              <DonutChart title={"Videos Analysis"} data={data} />
              <div className="centre_line"></div>
              <DonutChart title={"Pictures Analysis"} data={vendingdata} />
            </div>
            <div className="progressbar_box">
              <div className="title">Engagements Comparisons</div>
              <ProgressBarChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

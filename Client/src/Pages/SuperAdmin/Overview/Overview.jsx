import React from "react";
import Card from "./Component/Card/Card";
import DonutChart from "react-donut-chart";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

import "./Overview.scss";


const data = [
    {
      name: "October 6",
      pv: 2400,
      amt: 2400
    },
    {
      name: "October 8",
      pv: 1398,
      amt: 2210
    },
    {
      name: "October 11",
      pv: 9800,
      amt: 2290
    },
    {
      name: "October 15",
      pv: 3908,
      amt: 2000
    },
    {
      name: "October 16",
      pv: 4800,
      amt: 2181
    },
    {
      name: "October 18",
      pv: 3800,
      amt: 2500
    },
    {
      name: "October 19",
      pv: 4300,
      amt: 2100
    }
  ];


const reactDonutChartdata = [
  {
    label: "Referral",
    value: 12,
    color: "#00caef",
  },
  {
    label: "Organic Search",
    value: 12,
    color: "Orange",
  },
  {
    label: "Direct",
    value: 12,
    color: "green",
  },
  {
    label: "Other",
    value: 12,
    color: "#e13976",
  },
  {
    label: "Paid Search",
    value: 11,
    color: "yellow",
  },
  {
    label: "Social",
    value: 11,
    color: "gray",
  },
  {
    label: "Display",
    value: 11,
    color: "black",
  },
  {
    label: "Email",
    value: 11,
    color: "brown",
  },
];
const reactDonutChartBackgroundColor = [
  "#00caef",
  "Orange",
  "green",
  "#e13976",
  "yellow",
  "gray",
  "whitesmoke",
  "wheat",
];
const reactDonutChartInnerRadius = 0.6;
const reactDonutChartSelectedOffset = 0.0;
const reactDonutChartHandleClick = (item, toggled) => {
  if (toggled) {
    console.log(item);
  }
};
let reactDonutChartStrokeColor = "#FFFFFF";
const reactDonutChartOnMouseEnter = (item) => {
  let color = reactDonutChartdata.find((q) => q.label === item.label).color;
  reactDonutChartStrokeColor = color;
};

const Overview = () => {

   


  return (
    <div className="main_overview">
      <div className="tile_main">
        <div className="rank">
        <div className="ran">
        Rankings
        </div>
        <div className="cards">
              <Card
                title={"10"}
                para={"Google Rankings"}
                num={"2 %"}
                borderColor="Green"
              />
              <Card
                title={"4"}
                para={"Google Change"}
                num={"77 %"}
                borderColor="Red"
              />
            </div>

<div className="line_chart">

<div className="title">
    Google Ranking
</div>

<LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="orange"
        activeDot={{ r: 8 }}
      />
    </LineChart>
</div>

        </div>
        <div className="goog">
          <div className="ana">
          Google Analytics
          </div>
          <div className="donut">
              <DonutChart
                width={600}
                onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
                strokeColor={reactDonutChartStrokeColor}
                data={reactDonutChartdata}
                colors={reactDonutChartBackgroundColor}
                innerRadius={reactDonutChartInnerRadius}
                selectedOffset={reactDonutChartSelectedOffset}
                onClick={(item, toggled) =>
                  reactDonutChartHandleClick(item, toggled)
                }
              />
            </div>
            <div className="cards">
            <Card
                title={"3,306"}
                para={"Goal Completion"}
                num={"56 %"}
                borderColor="orange"
              />
              <Card
                title={"10"}
                para={"Google Rankings"}
                num={"2 %"}
                borderColor="Green"
              />
             
            </div>
          
        </div>
      </div>

      <div className="tile_below">

<div className="tile_1">
    <div className="title">
Facebook
    </div>
    <Card
    
                title={"1,105"}
                para={"Facebook Total Likes"}
                num={"42 %"}
                borderColor="Green"
              />

</div>
<div className="tile_1">
    <div className="title">
Backlinks
    </div>
    <Card
    
                title={"691k"}
                para={"Total Backlinks"}
                
              />

</div>
<div className="tile_1">
    <div className="title">
Google Ads
    </div>
    <Card
    
                title={"$6,596.00"}
                para={"Google Ads Cost"}
                num={"13 %"}
                borderColor="Red"
              />

</div>
<div className="tile_1">
    <div className="title">
Google Search Console
    </div>
    <Card
    
                title={"262 k"}
                para={"Impressions"}
                num={"92 %"}
                borderColor="Green"
              />

</div>


      </div>
      
    </div>
  );
};

export default Overview;

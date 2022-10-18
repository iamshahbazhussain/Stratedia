import React, { useState } from 'react'

// Components :
import TopBar from '../../../Components/TabsBar/TopBar';
import Cards from './Components/Cards/Cards';
import DonutChart from './Components/DonutChart/DonutChart';
import ProgressBarChart from './Components/ProgressBarChart/ProgressBarChart';

// CSS :
import "./Dashboard.scss"




// TopBar Tabs :
let Tabs = ["Instagram" , "Facebook" , "Twitter"]
// Charts Data :
const data = {
    labels: [],
    datasets: [
        {
            data: [40, 166],
            backgroundColor: ["#D72A5E", "#259E55"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            borderWidth: 1
        }
    ]
};
const vendingdata = {
    labels: [],
    datasets: [
        {
            data: [50, 166, 10],
            backgroundColor: ["#F49C4B", "#D72A5E", '#259E55'],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            borderWidth: 1
        }
    ]
};
// ProgressBarData :
let barData = [
    { title: "CAMEL", value: 20 },
    { title: "UFC", value: 40 },
    { title: "VUSE", value: 60 },
    { title: "COKE", value: 80 },
    { title: "UFC", value: 70 },
    { title: "DIET", value: 20 },
    { title: "CAMEL", value: 50 },
    { title: "VUSE", value: 60 },
    { title: "CAMEL", value: 45 },
    { title: "UFC", value: 70 },
    { title: "CAMEL", value: 55 },
    { title: "VUFC", value: 75 },
    { title: "VUFC", value: 95 },
    { title: "COKE", value: 35 },
    { title: "CAMEL", value: 55 },
    { title: "COKE", value: 90 },
    { title: "DIET", value: 100 },
    { title: "VUFC", value: 75 },
]

const Dashboard = () => {

    let [selectedTab, setSelectedTab] = useState("Instagram")


    return (
        <>
            <div className="dashboard_container">
                <TopBar tabs={Tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                <div className='cards_box'>
                    <Cards title="Total Followers" result={23} total={3} detail={"Across all Channels"} />
                    <Cards title="Total Likes" result={7} total={3} detail={"Across all Channels"} borderColor="#E13976" />
                    <Cards title="Total Impressions" result={'6.10k'} total={"3"} detail={" Across all Channels"} borderColor="#FFA96B" />
                    <Cards title="Total Comments" result={'15.3k'} detail={"Across all Channels"} borderColor="#DE7142" />
                </div>
                <div className='charts_box'>
                    <div className='donut_chart'>
                        <DonutChart title={"Video"} data={data} />
                        <div className='centre_line'></div>
                        <DonutChart title={"Image"} data={vendingdata} />
                    </div>
                    <div className='progressbar_box'>
                    <div className="title">Engagements Comparisons</div>
                        <ProgressBarChart/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
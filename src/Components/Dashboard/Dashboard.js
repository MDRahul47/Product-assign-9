import React from 'react';
import MyBarChart from '../Bar-chart/MyBarChart';
import MyLineChart from '../line-chart/MyLineChart ';
import './Dashboard.css';



const Dashboard = () => {
    return (
        <div className='main-chart'>
            <div className='lineChart'>
                <h3>Investment VS Reveneu</h3>
                <MyBarChart></MyBarChart>
            </div>
            <div className="barchart">
                <h3>Month wise sell vs investment</h3>
                <MyLineChart></MyLineChart>
            </div>
        </div>
    );
};

export default Dashboard;
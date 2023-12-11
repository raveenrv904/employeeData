import React from "react";
import "./Dashboard.css";

import { Navbar } from "../../components";
import { Body } from "../../containers";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__navbar">
        <Navbar />
      </div>
      <div className="dashboard__title">
        <h1 className="dashboard__title-content">Dashboard</h1>
      </div>
      <div className="dashboard__body">
        <Body />
      </div>
    </div>
  );
};

export default Dashboard;

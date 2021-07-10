import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import DashboardBody from "./DashboardBody/DashboardBody";
const Dashboard = () => {
  return (
      <div style={{ display: 'flex',}}>
        <div style={{ flex: 0.2 }}>
          <Sidebar />
        </div>
        <div style={{ flex: 0.8 }}>
          <DashboardBody />
        </div>
      </div>
  );
};

export default Dashboard;

import { Grid } from "@material-ui/core";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import DashboardBody from "./DashboardBody/DashboardBody"
const Dashboard = () => {
  return (
    <Grid container className="app">
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={9}>
        <DashboardBody />
      </Grid>
    </Grid>
  );
};

export default Dashboard;

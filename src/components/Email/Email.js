import { Grid } from "@material-ui/core";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import EmailBody from "./EmailBody/EmailBody";

const Email = () => {
  return (
    <Grid container className="app">
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={9}>
        <EmailBody />
      </Grid>
    </Grid>
  );
};

export default Email;

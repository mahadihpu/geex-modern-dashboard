import { Grid } from "@material-ui/core";
import React from "react";
import DashboardRight from "../DashboardRight/DashboardRight";

const Body = () => {
  return (
    <Grid style={{display: "flex"}}>
      <Grid item xs={8}>
          <h3>Body  Content</h3>
      </Grid>
      <Grid item xs={4}>
        <DashboardRight />
      </Grid>
    </Grid>
  );
};

export default Body;

import { Grid } from "@material-ui/core";
import React from "react";
import CryptoRight from "./CryptoRight";

const CryptoBody = () => {
  return (
    <Grid style={{ display: "flex" }}>
      <Grid item xs={8}>
        <h3>CryptoBody Content</h3>
      </Grid>
      <Grid item xs={4}>
        <CryptoRight />
      </Grid>
    </Grid>
  );
};

export default CryptoBody;

import React from "react";
import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import "./EmailBody.css";
import StarBorderSharpIcon from '@material-ui/icons/StarBorderSharp';
const EmailBody = () => {
  return (
    <Grid container>
      <Grid item xs={8}>
        <h1>Email</h1>
        <p>Welcome to Geex Modern dashboard Email</p>
        <Grid container>
          <Grid xs={4}>Email Navigation bar</Grid>
          <Grid xs={8}>
            <div style={{ height: "200px" }}></div>
            <Card className="message__card">
              <Grid container>
                <Grid xs={2}>
                  <div className="sender__box"></div>
                </Grid>
                <Grid xs={8}>
                    <h4>Tamara Scevenco <StarBorderSharpIcon className="star" /></h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odio pariatur sit ad quod dolorum illum?
                    </p>
                </Grid>
                <Grid xs={2}>
                  <p>18min ago</p>
                  <span
                    style={{
                      color: "#fff",
                      backgroundColor: "#ff5b5a",
                      padding: "5px 10px",
                      borderRadius: "30%",
                      marginLeft: '30px'
                    }}
                  >
                    2
                  </span>
                </Grid>
              </Grid>
              <button className="important__button">Important</button>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <h3>Sidebar</h3>
      </Grid>
    </Grid>
  );
};

export default EmailBody;

import { Grid } from "@material-ui/core";
import React from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import './CryptoRight.css';

const CryptoRight = () => {
  const recentTrading = [
    { name: "Sell Bitcoin", time: "4 min ago", amount: 100.21, status: "sell" },
    { name: "Sell Bitcoin", time: "4 min ago", amount: 500, status: "buy" },
    { name: "Sell Bitcoin", time: "4 min ago", amount: 250, status: "buy" },
    { name: "Sell Bitcoin", time: "4 min ago", amount: 330, status: "sell" },
    { name: "Sell Bitcoin", time: "4 min ago", amount: 250, status: "buy" },
  ];
  return (
    <div className="crypto__right">
      <div style={{ height: "300px" }}></div>
      <div style={{ margin: "30px" }}>
        <h3>Recent Trading</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        {recentTrading.map((trade) => (
          <Grid style={{ display: "flex", marginBottom: "15px",backgroundColor:"white",padding:"0px 18px 4px 18px",borderRadius: "15px"}}>
            <Grid xs={3}>
              <div
                className="status__iconContainer"
                style={{
                  backgroundColor: `${
                    trade.status === "buy" ? "#e0faf1" : "#ffe6e7"
                  }`,
                }}
              >
                {trade.status === "sell" ? (
                  <ArrowDownwardIcon className="status__icon icon__red" />
                ) : (
                  <ArrowUpwardIcon className="status__icon icon__green" />
                )}
              </div>
            </Grid>
            <Grid xs={6}>
              <div className="trade__infoContainer">
                <p className="trade__name">{trade.name}</p>
                <p className="trade__time">{trade.time}</p>
              </div>
            </Grid>
            <Grid xs={3}>
              <h3
                className={`trade__amount ${
                  trade.status === "buy" ? "trade__plus" : "trade__minus"
                }`}
              >
                {trade.status === "sell" ? "-" : "+  "}${trade.amount}
              </h3>
            </Grid>
          </Grid>
        ))}
      </div>
    </div>
  );
};

export default CryptoRight;

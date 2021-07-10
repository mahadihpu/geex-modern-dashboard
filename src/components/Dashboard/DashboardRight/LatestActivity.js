import React from "react";
import "./LatestActivity.css";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
const LatestActivity = () => {
  return (
    <div className="latest__activity">
      <h3>Latest Activity</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      <div className="latest_activityContainer" style={{ display: "flex" }}>
        <RadioButtonUncheckedIcon
          style={{ marginTop: "15px", marginRight: "10px", color: "#ab53db" }}
        />
        <div className="latest__activityContent">
          <p className="latest__activityTime">January 2nd, 4.35 AM</p>
          <p className="latest__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            accusantium 
          </p>
        </div>
      </div>
      <div className="latest_activityContainer" style={{ display: "flex" }}>
        <RadioButtonUncheckedIcon
          style={{ marginTop: "15px", marginRight: "10px", color: "#ab53db" }}
        />
        <div className="latest__activityContent">
          <p className="latest__activityTime">January 2nd, 4.35 AM</p>
          <p className="latest__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            accusantium officiis molestias voluptatibus explicabo aspernatur?
          </p>
        </div>
      </div>
      <div className="latest_activityContainer" style={{ display: "flex" }}>
        <RadioButtonUncheckedIcon
          style={{ marginTop: "15px", marginRight: "10px", color: "#ab53db" }}
        />
        <div className="latest__activityContent">
          <p className="latest__activityTime">January 2nd, 4.35 AM</p>
          <p className="latest__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatestActivity;

import React from "react";
import google from "../../../google__icon.png";
import facebook from "../../../facebook__icon.png";
import youtube from "../../../youtube__icon.png";
import "./RecentProblems.css";
const RecentProblems = () => {
  return (
    <div className="recent__problems">
      <h3>Recent Problems</h3>
      <p>Lorem ipsum dolor sit amet.</p>
      <div className="recent__problemsContent">
        <img src={google} className="social__icons" alt="" />
        <div className="social__links">
          <h5>Google</h5>
          <p>https://google.com</p>
        </div>
        <button className="btn btn__down">down</button>
      </div>
      <div className="recent__problemsContent">
        <img src={facebook} className="social__icons" alt="" />
        <div className="social__links">
          <h5>Facebook</h5>
          <p>https://facebook.com</p>
        </div>
        <button className="btn btn__stable">Stable</button>
      </div>
      <div className="recent__problemsContent">
        <img src={youtube} className="social__icons" alt="" />
        <div className="social__links">
          <h5>YouTube</h5>
          <p>https://youtube.com</p>
        </div>
        <button className="btn btn__warning">Warning</button>
      </div>
    </div>
  );
};

export default RecentProblems;

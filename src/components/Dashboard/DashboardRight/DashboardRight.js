import React from "react";
import LatestActivity from "./LatestActivity";
import RecentProblems from "./RecentProblems";

const DashboardRight = () => {
  return (
    <div>
      <div style={{height: "200px" }}></div>
      <div>
          <RecentProblems />
      </div>
      <div>
          <LatestActivity />
      </div>
    </div>
  );
};

export default DashboardRight;

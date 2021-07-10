import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import EmailBody from "./EmailBody";

const Email = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 0.2 }}>
        <Sidebar />
      </div>
      <div style={{ flex: 0.8 }}>
        <EmailBody />
      </div>
    </div>
  );
};

export default Email;

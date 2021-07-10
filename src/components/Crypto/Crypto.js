import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import CryptoBody from "./CryptoBody";

const Crypto = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 0.2 }}>
        <Sidebar />
      </div>
      <div style={{ flex: 0.8 }}>
        <CryptoBody />
      </div>
    </div>
  );
};

export default Crypto;

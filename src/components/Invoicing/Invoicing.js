import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import InvoicingBody from "./InvoicingBody";

const Invoicing = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 0.2 }}>
        <Sidebar />
      </div>
      <div style={{ flex: 0.8 }}>
        <InvoicingBody />
      </div>
    </div>
  );
};

export default Invoicing;

import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import ContactsBody from "./ContactsBody";

const Contacts = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 0.2 }}>
        <Sidebar />
      </div>
      <div style={{ flex: 0.8 }}>
        <ContactsBody />
      </div>
    </div>
  );
};

export default Contacts;

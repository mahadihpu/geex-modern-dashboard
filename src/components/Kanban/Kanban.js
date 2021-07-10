import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import KanbanBody from "./KanbanBody";

const Kanban = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 0.2 }}>
        <Sidebar />
      </div>
      <div style={{ flex: 0.8 }}>
        <KanbanBody />
      </div>
    </div>
  );
};

export default Kanban;

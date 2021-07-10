import { Card, Grid } from "@material-ui/core";
import React from "react";
import "./kanban.css";
import AddIcon from '@material-ui/icons/Add';
const KanbanBody = () => {
  return (
    <div>
      <h1>Kanban</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <div style={{ height: "200px" }}></div>
      <div className="kanban__board">
        <div className="kanban__todo">
          <Grid container>
            <Grid xs={8}><h3 style={{marginTop:"0"}}>To-Do</h3></Grid>
            <Grid xs={4}>
                <AddIcon />
            </Grid>
          </Grid>
          <Card className="kanban__card">
              <button className="ui__design">
                  ui Design
              </button>
              <h4>Revision 1: Fixing Navbar at dashboard page</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              <div className="tasked__persons">
              <div className="tasked__person"></div>
              <div className="tasked__person"></div>
              </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KanbanBody;

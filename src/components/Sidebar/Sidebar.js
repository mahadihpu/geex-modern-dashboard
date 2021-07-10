import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import logo from "../../logo.png";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Grid container justify="center" alignItems="center">
        <img className="brand__logo" src={logo} alt="" />
      </Grid>
      <br />
      <Link to="/" className="sidebar__links">
        <SidebarRow
          className="icon"
          title="Dashboard"
          Icon={HomeOutlinedIcon}
        />
      </Link>
      <Link to="/email" className="sidebar__links">
        <SidebarRow className="icon" title="Email" Icon={EmailOutlinedIcon} />
      </Link>
      <Link to="/contacts" className="sidebar__links">
        <SidebarRow
          className="icon"
          title="Contacts"
          Icon={PersonOutlineOutlinedIcon}
        />
      </Link>
      <Link to="/crypto" className="sidebar__links">
        <SidebarRow
          className="icon"
          title="Crypto"
          Icon={MonetizationOnOutlinedIcon}
        />
      </Link>
      <Link to="/kanban" className="sidebar__links">
        <SidebarRow
          className="icon"
          title="Kanban"
          Icon={DashboardOutlinedIcon}
        />
      </Link>
      <Link to="/invoicing" className="sidebar__links">
        <SidebarRow
          className="icon"
          title="Invoicing"
          Icon={InsertDriveFileOutlinedIcon}
        />
      </Link>
      <Link to="/banking" className="sidebar__links">
        <SidebarRow
          className="icon"
          title="Banking"
          Icon={AccountBalanceWalletOutlinedIcon}
        />
      </Link>
      <Link to="file-manager" className="sidebar__links">
        <SidebarRow
          className="icon"
          title="File Manager"
          Icon={FolderOutlinedIcon}
        />
      </Link>
      <Link to="/calendar" className="sidebar__links">
        <SidebarRow
          className="icon"
          title="Calendar"
          Icon={CalendarTodayOutlinedIcon}
        />
      </Link>
      <Link to="todo-list" className="sidebar__links">
        <SidebarRow
          className="icon"
          title="Todo List"
          Icon={CreateOutlinedIcon}
        />
      </Link>
      <div className="copyright">
        <h5>Geex Modern Dashboard</h5>
        <p>@2021 All Rights Reserved</p>
        <p>Made with love ❤ by Instawebworks</p>
      </div>
    </div>
  );
};

export default Sidebar;

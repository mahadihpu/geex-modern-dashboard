import React from "react";
import "./ContactCard.css";
import { IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, Card} from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const ContactCard = ({ name, role, company, email, phone }) => {
  return (
    <Card className="contact__card">
      <div className="card__header">
        <Avatar variant="rounded" className="avatar">R</Avatar>
        <div className="card__headerIcons">
        <IconButton aria-label="settings">
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
        </div>
      </div>
      <CardContent className="card__content">
        <h4>{name}</h4>
        <p>{role}</p>
        <ul>
          <li style={{display: 'flex'}}>
            <BusinessCenterOutlinedIcon className="contact__icon"/>
            <p>{company}</p>
          </li>
          <li style={{display: 'flex'}}>
            <PhoneOutlinedIcon className="contact__icon" />
            <p>{phone}</p>
          </li>
          <li style={{display: 'flex'}}>
            <EmailOutlinedIcon className="contact__icon"  />
            <p>{email}</p>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default ContactCard;

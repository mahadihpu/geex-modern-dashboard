import React from "react";
import ContactCard from "./ContactCard";
import "./ContactsBody.css";

const ContactsBody = () => {
  const contacts = [
    {
      name: "Ahmed Leffer",
      role: "Software QA Engineer",
      company: "Highspeed Studios",
      phone: "+12345678",
      email: "dummymail@gmail.com",
    },
    {
      name: "Braian Leffer",
      role: "Front-end Developer",
      company: "Highspeed Studios",
      phone: "+12345678",
      email: "dummymail@gmail.com",
    },
    {
      name: "Lisbon Money Heist",
      role: "Ethical Hacker",
      company: "Highspeed Studios",
      phone: "+12345678",
      email: "dummymail@gmail.com",
    },
    {
      name: "David Cophin",
      role: "Backend Developer",
      company: "Highspeed Studios",
      phone: "+12345678",
      email: "dummymail@gmail.com",
    },
    {
      name: "Ahmed Leffer",
      role: "Software QA Engineer",
      company: "Highspeed Studios",
      phone: "+12345678",
      email: "dummymail@gmail.com",
    },
    {
      name: "Braian Leffer",
      role: "Front-end Developer",
      company: "Highspeed Studios",
      phone: "+12345678",
      email: "dummymail@gmail.com",
    },
    {
      name: "Lisbon Money Heist",
      role: "Ethical Hacker",
      company: "Highspeed Studios",
      phone: "+12345678",
      email: "dummymail@gmail.com",
    },
    {
      name: "David Cophin",
      role: "Backend Developer",
      company: "Highspeed Studios",
      phone: "+12345678",
      email: "dummymail@gmail.com",
    },{
      name: "Ahmed Leffer",
      role: "Software QA Engineer",
      company: "Highspeed Studios",
      phone: "+12345678",
      email: "dummymail@gmail.com",
    },
    {
      name: "Braian Leffer",
      role: "Front-end Developer",
      company: "Highspeed Studios",
      phone: "+12345678",
      email: "dummymail@gmail.com",
    },
    {
      name: "Lisbon Money Heist",
      role: "Ethical Hacker",
      company: "Highspeed Studios",
      phone: "+12345678",
      email: "dummymail@gmail.com",
    },
    {
      name: "David Cophin",
      role: "Backend Developer",
      company: "Highspeed Studios",
      phone: "+12345678",
      email: "dummymail@gmail.com",
    },
  ];
  return (
    <div className="contacts__body">
      <div className="contact__header">
        <h3>Contacts</h3>
      </div>
      <div className="contact__cards">
        {contacts.map((contact) => (
          <ContactCard
            name={contact.name}
            role={contact.role}
            company={contact.company}
            phone={contact.phone}
            email={contact.email}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactsBody;

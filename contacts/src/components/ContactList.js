import React from "react";
import { Link } from "react-router-dom"

import ContactCard from "./ContactCard";
// const contacts = [{
//   id: "1",
//   "name": "Romit",
//   "email":"romitdas@gmail.com",
//   "mobile":"9800936082",
// },];
const ContactList = (props) => {
  console.log(props);
  const removeContactHandeler = (id)=>{
    props.getContactID(id);
  }
  const renderContactList =props.contacts.map((contact) => {
    
    // console.log(contact)
   
    return (

      <div className="d-flex container align-items-center justify-content-between mb-4 border-bottom py-2">
            <ContactCard individualcontact = {contact} clickHandeler={removeContactHandeler} key={contact.id}/>
      </div>
        
     
    );
  });

  return (
    <div className="container pt-5">
      <span className="container d-flex justify-content-between mb-3">
      <h4 className="mb-0">Contact List :</h4>
      <Link to="/add">
        <button type="button" className="btn btn-warning text-white mb-0"> Add Contact </button>
      </Link>
      </span>

      <div className="container  bg-light rounded">
        { renderContactList}
      </div>
    </div>
   
  );

};

export default ContactList;

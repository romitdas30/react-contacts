import React from "react";
// FaTrashAlt

import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);
  const removeContactHandeler = (id)=>{
    props.getContactID(id);
  }
  const renderContactList = props.contacts.map((contact) => {
    
    // console.log(contact)
   
    return (

      <div className="d-flex container align-items-center justify-content-between mb-4 border-bottom py-2">
            <ContactCard individualcontact = {contact} clickHandeler={removeContactHandeler}/>
      </div>
        
     
    );
  });

  return (
    <div className="container pt-5">
      <h4>Contact List :</h4>
      <div className="container  bg-light rounded">
        { renderContactList}
      </div>
    </div>
   
  );

};

export default ContactList;

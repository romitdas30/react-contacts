import React,{ useState, useEffect } from 'react'
import Header from "./Header";
import { v4 as uuidv4 } from 'uuid';
import AddContact from "./AddContact";
import ContactList from "./ContactList";
function App() {
  const LOCAL_STORAGE_KEY = "contacts"

  const getContacts = ()=>{
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) {
      return retriveContacts; 
    }else{
      return [];
    }
  };

  const [contacts, setContacts] = useState(getContacts());
  const addContactHandeler = (contact) =>{
    
    setContacts([...contacts,{id: uuidv4(),...contact}])
    console.log(contact);
  };

  
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);

 const deleteContactHandeler = (id)=>{
   const newContacts = contacts.filter((contact)=>{
     return contact.id!==id;
   });

   setContacts(newContacts);
 };

  return (
    <div>
      <Header />
      <AddContact addContactHandelermain = { addContactHandeler }/>
      <ContactList contacts={contacts} getContactID={deleteContactHandeler}/>
    </div>
  );
}

export default App
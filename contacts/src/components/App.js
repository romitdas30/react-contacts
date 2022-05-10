import React from 'react'
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
function App() {

  const contacts = [
  {
    id: "1",
    "name": "Romit Das",
    "email": "romitdas2@gmail.com",
    "mobile": "9800936082"
  },
  {
    id: "2",
    "name": "Mehul Kundu",
    "email": "mehul@gmail.com",
    "mobile": "9876543210"
  }
]
  return (
    <div>
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App
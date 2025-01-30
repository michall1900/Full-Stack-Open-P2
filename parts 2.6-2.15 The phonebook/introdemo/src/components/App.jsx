import { useState } from "react";
import shortid from "shortid";
import Form from "./Form";
import ShowList from "./ShowList";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", id: shortid.generate(), number: "39-44-5323523"},
  ]);
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Form setPersons={setPersons} persons={persons}/>
      <h2>Numbers</h2>
      <ShowList persons={persons}/>
    </div>
  );
};

export default App;

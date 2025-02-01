import { useState, useEffect } from "react";
import personsServer from "../services/persons";
import PersonForm from "./PersonForm";
import Filter from "./Filter";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([])
  const [filterPersons, setFilterPersons] = useState(persons);

  useEffect(() => {
    personsServer.getAllPersons()
      .then(persons => {
        setPersons(persons);
      })
      .catch(error => {
        alert(`Can't get persons. Error: ${error}`);
      })

  }, [])


  


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setFilterPersons={setFilterPersons} />
      <h3>Add a new</h3>
      <PersonForm setPersons={setPersons} persons={persons} />
      <h3>Numbers</h3>
      <Persons filterPersons={filterPersons} persons={persons} setPersons={setPersons} />
    </div>
  );
};

export default App;

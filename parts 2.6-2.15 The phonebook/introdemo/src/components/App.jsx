import { useState, useEffect } from "react";
import personsServer from "../services/persons";
import PersonForm from "./PersonForm";
import Filter from "./Filter";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([])
  const [filterPersons, setFilterPersons] = useState(persons);
  const [deletedPerson, setDeletedPerson] = useState({});
  const [addedPerson, setAddedPerson] = useState({});
  const [editPerson, setEditPerson] = useState({});

  useEffect(() => {
    personsServer.getAllPersons()
      .then(persons => {
        setPersons(persons);
        setFilterPersons(persons);
      })
      .catch(error => {
        alert(`Can't get persons. Error: ${error}`);
      })

  }, [])


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setFilterPersons={setFilterPersons} filterPersons={filterPersons}
        deletedPerson={deletedPerson} addedPerson={addedPerson} editPerson={editPerson}/>
      <h3>Add a new</h3>
      <PersonForm setPersons={setPersons} persons={persons} setAddedPerson={setAddedPerson} setEditPerson ={setEditPerson}/>
      <h3>Numbers</h3>
      <Persons filterPersons={filterPersons} persons={persons} setPersons={setPersons} setDeletedPerson={setDeletedPerson} />
    </div>
  );
};

export default App;

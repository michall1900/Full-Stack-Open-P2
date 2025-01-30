import { useState } from "react";
import shortid from "shortid";
import PersonForm from "./PersonForm";
import Filter from "./Filter";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: shortid.generate() },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: shortid.generate() },
    { name: 'Dan Abramov', number: '12-43-234345', id: shortid.generate() },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: shortid.generate() }
  ])
  
  const [filterPersons, setFilterPersons] = useState(persons);
  const [userPatternToFilter, setUserPatternToFilter] = useState("");
  
  const isMatchToUsersPattern = (personName, pattern=userPatternToFilter) =>{
    return !!personName.toLowerCase().match(RegExp(pattern.toLowerCase()));
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons= {persons} setFilterPersons={setFilterPersons} 
        userPatternToFilter={userPatternToFilter} setUserPatternToFilter={setUserPatternToFilter} 
        isMatchToUsersPattern={isMatchToUsersPattern}/>
      <h3>Add a new</h3>
      <PersonForm setPersons={setPersons} persons={persons} filterPersons={filterPersons} setFilterPersons={setFilterPersons} isMatchToUsersPattern={isMatchToUsersPattern}/>
      <h3>Numbers</h3>
      <Persons persons={filterPersons}/>
    </div>
  );
};

export default App;

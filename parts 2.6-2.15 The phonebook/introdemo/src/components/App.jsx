import { useState, useEffect } from "react";
import axios from 'axios';
import PersonForm from "./PersonForm";
import Filter from "./Filter";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([])
  const [filterPersons, setFilterPersons] = useState(persons);
  const [userPatternToFilter, setUserPatternToFilter] = useState("");
  
  useEffect(()=>{
    axios
    .get("http://localhost:3001/persons")
    .then( response => {
      setPersons(response.data);
      setFilterPersons(response.data);
    })
    
  }, [])

  

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

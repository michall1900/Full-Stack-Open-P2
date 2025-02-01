import { useState, useEffect } from "react";
import personsServer from "../services/persons";
import PersonForm from "./PersonForm";
import Filter from "./Filter";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([])
  const [filterPersons, setFilterPersons] = useState(persons);
  const [userPatternToFilter, setUserPatternToFilter] = useState("");
  
  useEffect(()=>{
    console.log("inside use effect");
    personsServer.getAllPersons()
    .then( persons => {
      setPersons(persons);
      setFilterPersons(persons);
    })
    .catch(error =>{
      console.log("inside catch");
      alert(`Can't get persons. Error: ${error}`);  
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

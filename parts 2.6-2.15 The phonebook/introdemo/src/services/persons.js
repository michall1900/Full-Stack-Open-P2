import axios from "axios"

const BASE_URL = "http://localhost:3001/persons";


const getAllPersons = ()=>
    axios.get(BASE_URL).then(response => response.data);


const addNewPerson = (person) => 
    axios.post(BASE_URL,person).then(response => response.data);


const deletePerson = (id) =>
    axios.delete(`${BASE_URL}/${id}`).then(response => response.data);

const editPersonNumber = (person)=>
    axios.put(`${BASE_URL}/${person.id}`,person).then(respone => respone.data);

export default {getAllPersons, addNewPerson, deletePerson, editPersonNumber};


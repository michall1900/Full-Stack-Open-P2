import axios from "axios"

const BASE_URL = "http://localhost:3001/persons";


const getAllPersons = ()=>
    axios.get(BASE_URL).then(respons => respons.data);


const addNewPerson = (person) => {
    console.log("Add new");
    return axios.post(BASE_URL,person).then(respons => respons.data);
}

export default {getAllPersons, addNewPerson};


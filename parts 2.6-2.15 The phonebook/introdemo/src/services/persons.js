import axios from "axios"

const BASE_URL = "http://localhost:3001/persons";


/**
 * Fetches all persons from the server.
 *
 * Makes a GET request to the specified BASE_URL and returns a promise
 * that resolves to the data of the response.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of persons.
 */
const getAllPersons = ()=>
    axios.get(BASE_URL).then(response => response.data);

/**
 * Adds a new person to the server.
 *
 * Makes a POST request to the specified BASE_URL with the person data.
 *
 * @param {Object} person - The person object containing the new person's information.
 * @param {string} person.name - The name of the new person.
 * @param {string} person.number - The phone number of the new person.
 * @returns {Promise<Object>} A promise that resolves to the added person data.
 */
const addNewPerson = (person) => 
    axios.post(BASE_URL,person).then(response => response.data);


/**
 * Deletes a person by their ID.
 *
 * Makes a DELETE request to the server to remove the person with the specified ID.
 *
 * @param {number|string} id - The ID of the person to delete.
 * @returns {Promise<Object>} A promise that resolves to the response data from the server.
 */
const deletePerson = (id) =>
    axios.delete(`${BASE_URL}/${id}`).then(response => response.data);

/**
 * Updates the phone number of an existing person in the database.
 *
 * @param {Object} person - The person object containing updated information.
 * @param {number} person.id - The unique identifier of the person.
 * @param {string} person.name - The name of the person.
 * @param {string} person.number - The new phone number of the person.
 * @returns {Promise<Object>} A promise that resolves to the updated person data.
 */
const editPersonNumber = (person)=>
    axios.put(`${BASE_URL}/${person.id}`,person).then(respone => respone.data);

export default {getAllPersons, addNewPerson, deletePerson, editPersonNumber};


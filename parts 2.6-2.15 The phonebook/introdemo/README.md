# Note for the checker:
When doing exercise 2.17, I thought it would be nicer to fetch the data every minute to ensure it is up-to-date. Also, I believed that when there is a problem updating or deleting a person, the best option is to fetch all the data again to synchronize with the server. Because of this, I implemented polling that executes every minute and in case of an error while updating or deleting a person's data.

# The Phonebook

This project is a simple phonebook application built with React and Vite. It allows users to manage a list of contacts, including adding new contacts, editing existing ones, and deleting contacts.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm run server
    ```

4. In a separate terminal, start the application:
    ```sh
    npm run dev
    ```

## Features

- **Add a new person**: You can add a new person to the phonebook by filling out the form and clicking the "Add" button.
- **Edit a person's number**: You can edit an existing person's number by adding the person with their current name but a new number.
- **Delete a person**: You can delete a person from the phonebook by clicking the "Delete" button next to their name.
- **Filter contacts**: You can filter the list of contacts by typing a name in the search box. The list will update to show only the contacts that match the search criteria.
## Project Structure

- `src/`: Contains the React components and application logic.
- `db.json`: The JSON server database file.

## Components

- `App.js`: The main component that holds the state and renders other components.
- `PersonForm.js`: A form component for adding and editing contacts.
- `Persons.js`: A component that displays the list of contacts.
- `Filter.js`: A component for filtering the contacts.
- `PersonItem.js`: A component that represents an individual contact in the phonebook, displaying the contact's name and number along with buttons to delete the contact.


## Learn More

To learn more about the project, visit 

- [Full stack open course sections b to d](https://fullstackopen.com/en/part2)




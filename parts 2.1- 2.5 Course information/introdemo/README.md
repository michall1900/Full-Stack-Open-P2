# Course Information Application

This application provides information about various courses, including the parts of each course and the number of exercises in each part. It is built using React and Vite.

## Features

- Display a list of courses
- Show details of each course, including parts and exercises
- Calculate and display the total number of exercises for each course

## Components

- `App`: The main entry point of the application, rendering the list of courses.
- `Course`: Renders the details of a single course, including the header, content, and total exercises.
- `Header`: Displays the course name as a header.
- `Content`: Renders the list of parts for a given course.
- `Part`: Displays the details of a single part, including the name and number of exercises.
- `Total`: Calculates and renders the total number of exercises for all parts of a course.

## Setup
To get this project running locally on your machine, follow these steps:

1. **Clone the repository**
2. **Move to introdemo directory**:
   cd introdemo
3. **Install dependencies**:
   npm install
4. **Run the application**:
   npm run dev



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

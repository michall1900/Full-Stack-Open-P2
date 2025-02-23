# Countries Weather App

This project is a React application that allows users to search for countries and view detailed information about them, including the current weather in their capital cities. The application uses the REST Countries API (from fullstackopen course) to fetch country data and the OpenWeatherMap API to fetch weather data.



## Getting Started

To get started with this project, follow these steps:

1. Clone the repository

2. Install the dependencies:
    ```sh
    cd introdemo
    npm install
    ```

3. Get an api key for OpenWeather:
    https://openweathermap.org/

4. In a separate terminal, start the application (assume that tour api key is "54l41n3n4v41m34rv0"):
    ```sh
    export VITE_SOME_KEY=54l41n3n4v41m34rv0 && npm run dev // For Linux/macOS Bash
    ($env:VITE_SOME_KEY="54l41n3n4v41m34rv0") -and (npm run dev) // For Windows PowerShell
    set "VITE_SOME_KEY=54l41n3n4v41m34rv0" && npm run dev // For Windows cmd.exe
    ```

## Components

- **App.jsx**: The main component of the application.
- **CapitalWeatherDisplay.jsx**: Displays weather details for a given capital city.
- **Countries.jsx**: Displays a list of countries or a single country detail based on the filter criteria.
- **CountriesList.jsx**: Renders a list of countries.
- **CountryDetailsDisplay.jsx**: Displays detailed information about a country.
- **CountryItem.jsx**: Displays details of a country and its capital weather.
- **CountryListItem.jsx**: Renders a country name with a "show" button.
- **Filter.jsx**: Filters a list of countries based on user input.
- **Header.jsx**: Displays the main header, notification, filter, and a loading spinner.
- **MainTitle.jsx**: Renders a styled header for the application.
- **Notification.jsx**: Displays a message with a specific style.
- **SubTitle.jsx**: Renders a subtitle with specific styles.

## Services

- **openWeatherMapApi.js**: Contains functions to fetch weather data from the OpenWeatherMap API.
- **restcountries.js**: Contains functions to fetch country data from the REST Countries API.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

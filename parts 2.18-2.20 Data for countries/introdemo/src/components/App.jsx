import { useState } from 'react'
import Countries from './Countries'
import Header from './Header'

/**
 * App component
 * 
 * This is the main component of the application. It manages the state for the list of filtered countries,
 * loading status, not found status, and messages. It also defines the main styling for the application.
 * 
 * State:
 * - filterCountries: array of countries that match the filter criteria
 * - message: message to be displayed to the user
 * - isNotFound: boolean indicating if no countries were found
 * - isLoading: boolean indicating if the application is in a loading state
 * 
 * Props passed to child components:
 * - Header: isLoading, setIsLoading, message, setFilterCountries, setIsNotFound, setMessage
 * - Countries: filterCountries, setMessage, setFilterCountries, isNotFound, setIsLoading
 */
const App = () => {
    
    const [filterCountries, setFilterCountries] = useState([]);
    const [message, setMessage] = useState(null);
    const [isNotFound, setIsNotFound] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    const appStyle = {
        width: "100vw",
        minHeight: "100vh",
        boxSizing: "border-box",
        fontFamily: "Garamond, sans-serif",
        fontSize: "max(20px, 2vw)",
        background: "linear-gradient(to right, #e0f7fa 0%, #90caf9 100%)",
        backgroundSize: "cover",
        backgroundAttachment:"fixed",
        padding: "20px 0",
        margin: "0",
        fontWeight: "bold"
    }

    
    

    return (
        <div style={appStyle}>
            <Header  isLoading={isLoading} setIsLoading={setIsLoading} message={message} 
                setFilterCountries={setFilterCountries} setIsNotFound={setIsNotFound} setMessage={setMessage}/>
            <Countries filterCountries={filterCountries} setMessage={setMessage} 
                setFilterCountries={setFilterCountries} isNotFound={isNotFound} setIsLoading={setIsLoading}/>
        </div>
    )
}

export default App

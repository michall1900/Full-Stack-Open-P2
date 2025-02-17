import { useEffect, useState } from 'react'
import countriesApi from "../services/restcountries"
import Notification from './Notification'
import Filter from './Filter'
import shortid from "shortid"
import Countries from './Countries'
import MainHeader from './MainHeader'
import ClipLoader from "react-spinners/ClipLoader"


const App = () => {

    const [countriesNamesList, setCountriesNamesList] = useState([]);
    const [filterCountries, setFilterCountries] = useState([]);
    const [triggerFilter, setTriggerFilter] = useState(true);
    const [message, setMessage] = useState(null);
    const [isNotFound, setIsNotFound] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const appStyle = {
        width: "100vw",
        minHeight: "100vh",
        boxSizing: "border-box",
        textAlign: "center",
        fontFamily: "Garamond, sans-serif",
        fontSize: "max(20px, 2vw)",
        background: "linear-gradient(to right, #e0f7fa 0%, #90caf9 100%)",
        backgroundSize: "cover",
        backgroundAttachment:"fixed",
        padding: "20px 0",
        margin: "0",
        fontWeight: "bold"
    }

    useEffect(() => {
        setIsLoading(true);
        countriesApi
            .getAllCountries()
            .then((data) => {
                setCountriesNamesList(data.map((country) => (
                    {
                        name: country.name.common.toLowerCase(),
                        officialName: country.name.official.toLowerCase(),
                        toShowName: country.name.common,
                        id: shortid.generate()
                    }
                )));
            })
            .catch((_) => {
                setMessage(`Can't fetch countries. Error: ${message}`);
            })
            .finally(() => {
                setTriggerFilter(triggerFilter => !triggerFilter);
                setIsLoading(false);
            })
    }, [])

    return (
        <div style={appStyle}>
            <header>
                <MainHeader/>
                <Notification message={message} setMessage={setMessage} />
                <Filter countriesNamesList={countriesNamesList} setFilterCountries={setFilterCountries} 
                    triggerFilter={triggerFilter} setIsNotFound={setIsNotFound} />
                <ClipLoader loading={isLoading} size={30}/>
            </header>
            
            <main>
                <Countries filterCountries={filterCountries} setMessage={setMessage} 
                    setFilterCountries={setFilterCountries} isNotFound={isNotFound} setIsLoading={setIsLoading}/>
            </main>
        </div>
    )
}

export default App

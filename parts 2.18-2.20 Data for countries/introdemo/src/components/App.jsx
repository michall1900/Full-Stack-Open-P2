import { useEffect, useState } from 'react'
import countriesApi from "../services/restcountries"
import Notification from './Notification'
import Filter from './Filter'
import shortid from "shortid"
import Countries from './Countries'
import MainHeader from './MainHeader'

const App = () => {

    const [countriesNamesList, setCountriesNamesList] = useState([]);
    const [filterCountries, setFilterCountries] = useState([]);
    const [triggerFilter, setTriggerFilter] = useState(true);
    const [message, setMessage] = useState(null);
    const [isNotFound, setIsNotFound] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const background = {
        backgroundColor: "rgba(191, 215,218)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        padding: "10px",
        margin: "0 auto",
        border: "5px solid"
    }

    useEffect(() => {
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
            .catch((error) => {
                setMessage(`Can't fetch countries. Error: ${message}`);
            })
            .finally(() => {
                setTriggerFilter(triggerFilter => !triggerFilter);
            })
    }, [])

    return (
        <div style={background}>
            <MainHeader/>
            <Notification message={message} setMessage={setMessage} />
            <Filter countriesNamesList={countriesNamesList} setFilterCountries={setFilterCountries} 
                triggerFilter={triggerFilter} setIsNotFound={setIsNotFound} />
            <Countries filterCountries={filterCountries} setMessage={setMessage} 
                setFilterCountries={setFilterCountries} isNotFound={isNotFound}/>
        </div>
    )
}

export default App

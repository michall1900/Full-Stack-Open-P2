import { useEffect, useState } from 'react'
import countriesApi from "../services/restcountries"
import Notification from './Notification'
import Filter from './Filter'
import shortid from "shortid"
import Countries from './Countries'

const App = () => {

    const [countriesNamesList, setCountriesNamesList] = useState([]);
    const [filterCountries, setFilterCountries] = useState([]);
    const [triggerFilter, setTriggerFilter] = useState(true);
    const [message, setMessage] = useState(null);
    const [isNotFound, setIsNotFound] = useState(false);

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
        <>
            <h1>Countries Sercher</h1>
            <Notification message={message} setMessage={setMessage} />
            <Filter countriesNamesList={countriesNamesList} setFilterCountries={setFilterCountries} 
                triggerFilter={triggerFilter} setIsNotFound={setIsNotFound} />
            <Countries filterCountries={filterCountries} setMessage={setMessage} 
                setFilterCountries={setFilterCountries} isNotFound={isNotFound}/>
        </>
    )
}

export default App

import MainHeader from './MainTitle'
import ClipLoader from "react-spinners/ClipLoader"
import Notification from './Notification'
import Filter from './Filter'
import countriesApi from "../services/restcountries"
import shortid from "shortid"

import { useEffect, useState } from 'react'

/**
 * Header component that displays the main header, notification, filter, and a loading spinner.
 * 
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.message - The message to display in the notification.
 * @param {function} props.setMessage - Function to set the message state.
 * @param {function} props.setIsLoading - Function to set the loading state.
 * @param {function} props.setFilterCountries - Function to set the filtered countries.
 * @param {function} props.setIsNotFound - Function to set the not found state.
 * @param {boolean} props.isLoading - Boolean indicating if data is being loaded.
 * @returns {JSX.Element} The rendered Header component.
 */
const Header = ({message, setMessage, setIsLoading,
        setFilterCountries, setIsNotFound, isLoading}) => {

    const [countriesNamesList, setCountriesNamesList] = useState([]);
    const [triggerFilter, setTriggerFilter] = useState(true);


    const headerStyle ={
        textAlign: "center"
    }

    /**
     * Validates a list of countries.
     * 
     * This function checks if the provided list is an array, is not empty,
     * and if every item in the list has a `name` property with a `common` field.
     * If any of these conditions are not met, an error is thrown.
     * 
     * @param {Array} list - The list of countries to validate.
     * @throws {Error} Throws an error if the list is invalid or if any country object is missing the required properties.
     */
    const validateCountriesList = (list)=>{
        if(!list || !Array.isArray(list) || !list.length || 
            !list.every((item)=>item.name && item.name.common))

            throw new Error("Invalid countries list provided.");
        
    }


    useEffect(() => {
        setIsLoading(true);
        countriesApi
            .getAllCountries()
            .then((data) => {
                validateCountriesList(data);
                setCountriesNamesList(data.map((country) => (
                    {
                        name: country.name.common.toLowerCase(),
                        id: shortid.generate()
                    }
                )));
            })
            .catch((message) => {
                setMessage(`Can't fetch countries. Error: ${message}`);
            })
            .finally(() => {
                setTriggerFilter(triggerFilter => !triggerFilter);
                setIsLoading(false);
            })
    }, [])
    return (
        <header style={headerStyle}>
            <MainHeader/>
            <Notification message={message} setMessage={setMessage} />
            <Filter countriesNamesList={countriesNamesList} setFilterCountries={setFilterCountries} 
                triggerFilter={triggerFilter} setIsNotFound={setIsNotFound} />
            <ClipLoader loading={isLoading} size={30}/>
        </header>
    )

}

export default Header;
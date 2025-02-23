
import CountryItem from "./CountryItem";
import CountriesList from "./CountriesList";


/**
 * Countries component that displays a list of countries or a single country detail based on the filter criteria.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.filterCountries - The list of countries filtered by the search criteria.
 * @param {Function} props.setMessage - Function to set the message state.
 * @param {Function} props.setFilterCountries - Function to set the filtered countries state.
 * @param {boolean} props.isNotFound - Boolean indicating if no countries were found matching the filter.
 * @param {Function} props.setIsLoading - Function to set the loading state.
 * @returns {JSX.Element} The rendered component.
 */

const Countries = ({ filterCountries, setMessage, setFilterCountries, isNotFound, setIsLoading }) => {


    const isNeedsToShowDetails = filterCountries && filterCountries.length===1;
    const pStyle={
        textAlign: "center"
    }
    return (
        <main>
            {(filterCountries && filterCountries.length)? 
                <>
                    {(isNeedsToShowDetails)? 
                        <CountryItem setMessage={setMessage} setIsLoading={setIsLoading} 
                            country={filterCountries[0]}/> :

                        <CountriesList filterCountries={filterCountries} 
                            setFilterCountries={setFilterCountries}/>}
                </>
                    :
                <p style={pStyle}>{isNotFound? "Can't find a country that is matching to your filter":
                    "Too many matches, specify another filter"}</p>
            }
        </main>
    );
}

export default Countries;
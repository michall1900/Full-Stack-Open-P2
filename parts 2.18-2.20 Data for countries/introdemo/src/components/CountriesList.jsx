
import CountryListItem from "./CountryListItem";

/**
 * CountriesList component renders a list of countries.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.filterCountries - The array of country objects to be displayed.
 * @param {Function} props.setFilterCountries - The function to update the filtered countries.
 * @returns {JSX.Element} The rendered list of countries.
 */
const CountriesList = ({filterCountries, setFilterCountries})=>{
    const listStyle = {
        width: "50vw",
        minWidth:"100px",
        margin:"50px auto"
    }
    return(
        <div style={listStyle}>
            {filterCountries.map(country => (
                <CountryListItem key={country.id} country={country} setFilterCountries={setFilterCountries}/>
            ))
            }
        </div>
    )
}

export default CountriesList;
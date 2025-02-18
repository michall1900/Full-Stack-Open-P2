import CountryListItem from "./CountryListItem";

const CountriesList = ({filterCountries, setFilterCountries})=>{
    const listStyle = {
        textAlign: "center",
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
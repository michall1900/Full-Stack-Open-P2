
/**
 * CountryListItem component renders a country name with a "show" button.
 * When the button is clicked, it sets the filter to the selected country.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.country - The country object to display.
 * @param {Function} props.setFilterCountries - The function to set the filtered countries.
 * @returns {JSX.Element} The rendered CountryListItem component.
 */
const CountryListItem = ({country, setFilterCountries})=>{


    /**
     * Handles the click event for the show button.
     * Sets the filterCountries state to an array containing a deep copy of the given country.
     *
     * @param {Object} _ - The event object (not used).
     */
    const onClickShowButton = (_) => {
        setFilterCountries([JSON.parse(JSON.stringify(country))]);
    }

    const spanStyle={
        textTransform:"capitalize"
    }
    const buttonStyle={
        margin:"5px",
        background:"",
        fontFamily:"Garamond, sans-serif",
        fontWeight: "800",
        borderRadius: "5px",
    
    }
    
    const labelAndButtonDiv = {
        margin: "20px 0",
        display: "flex",
        justifyContent:"space-between",
        alignItems: "center",
        flexWrap:"wrap"
    
    }

    return(
        <div style={labelAndButtonDiv}>
            <span style={spanStyle}>{country.name}</span> <button style={buttonStyle} onClick={onClickShowButton}>show</button>
        </div>
    )
}

export default CountryListItem;
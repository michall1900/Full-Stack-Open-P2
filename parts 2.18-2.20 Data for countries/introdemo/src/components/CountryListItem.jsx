
const CountryListItem = ({country, setFilterCountries})=>{


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
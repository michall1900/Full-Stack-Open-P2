import CountryItem from "./CountryItem";

const Countries = ({ filterCountries, setMessage }) => {

    const isNeedToShow = filterCountries && (filterCountries.length === 1);
    return (
        <>
            {filterCountries && filterCountries.length ? (
                filterCountries.map(country => (
                    <CountryItem key={country.id} name={country.toShowName} 
                    isNeedToShow={isNeedToShow} setMessage={setMessage} 
                    forKey={country.id}/>
                ))
            ) : (
                <p>Too many matches, specify another filter</p>
            )}
        </>
    );
}

export default Countries;
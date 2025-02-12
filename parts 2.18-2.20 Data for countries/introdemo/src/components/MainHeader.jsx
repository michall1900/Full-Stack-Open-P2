const MainHeader = ()=>{
    const headerContainer = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    const headerStyle = {
        fontFamily: "'Goudy Old Style'",
        fontSize: "4em",
        textAlign: "center"
    }

    return(
        <div style={headerContainer}>
            <h1 style = {headerStyle}>Countries Sercher</h1>
        </div>
        
    )
}

export default MainHeader;
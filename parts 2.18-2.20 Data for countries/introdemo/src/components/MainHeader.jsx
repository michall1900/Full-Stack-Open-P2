const MainHeader = ()=>{
    const headerContainer = {
        display: "flex",
        justifyContent: "strtech",
        alignItems: "stretch"
    }
    const headerStyle = {
        fontFamily: "'Goudy Old Style' sanserif",
        textAlign: "center",
        fontSize: "calc(25px + 3vw)",
        textTransform: "uppercase",
        wordSpacing: "2vw",
        fontWeight: "bold",
        fontStyle: "italic",
        marginBottom: "3vh",
        flexGrow: "1" 
    }

    return(
        <div style={headerContainer}>
            <h1 style = {headerStyle}>Countries Sercher</h1>
        </div>
        
    )
}

export default MainHeader;
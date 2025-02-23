/**
 * MainHeader component renders a styled header for the application.
 * 
 * @component
 * @example
 * return (
 *   <MainHeader />
 * )
 * 
 * @returns {JSX.Element} A div containing an h1 element with custom styles.
 */
const MainHeader = ()=>{
    
    const headerStyle ={
        fontSize: "max(40px, 5vw)",
        marginBottom:"3vh",
        textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 2px 4px rgba(0, 0, 0, 0.5)",
        fontWeight: "1000",
        color: "#ffffff"
    }

    return(
        <div>
            <h1 style={headerStyle}>Countries Sercher</h1>
        </div>
        
    )
}

export default MainHeader;
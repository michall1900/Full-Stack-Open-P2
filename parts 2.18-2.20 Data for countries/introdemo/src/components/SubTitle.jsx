const SubTitle = ({titleText})=>{
    const titleStyle={
        textTransform:"capitalize",
        fontWeight:"border"
    }

    return(
        <h2 style={titleStyle}>{titleText}</h2>
    )
}

export default SubTitle;
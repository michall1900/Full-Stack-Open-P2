/**
 * SubTitle component renders a subtitle with specific styles.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.titleText - The text to be displayed as the subtitle.
 * @returns {JSX.Element} The rendered subtitle component.
 */
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
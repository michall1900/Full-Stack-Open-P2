/**
 * The Total component is responsible for calculating and rendering the total number of exercises
 * for all parts of a course.
 * 
 * @param {Object[]} parts - The list of parts in the course.
 * @param {number} parts[].exercises - The number of exercises in each part.
 */
const Total = ({parts}) => {
    const pStyle = {
        fontWeight:"bold"
    }

    return(
        <p style={pStyle}>
            Total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
        </p>
    )
}

export default Total;
const Total = ({parts}) => <p>Total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</p>

export default Total;
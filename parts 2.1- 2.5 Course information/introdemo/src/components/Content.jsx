import Part from "./Part";

/**
 * The Content component is responsible for rendering the list of parts
 * for a given course. It receives the parts as a prop and maps over them
 * to render each part using the Part component.
 * 
 * @param {Object[]} parts - The list of parts to be rendered.
 * @param {string} parts[].name - The name of the part.
 * @param {number} parts[].exercises - The number of exercises in the part.
 * @param {number} parts[].id - The unique identifier for the part.
 */
const Content = ({parts}) => (
    <div>
        {parts.map(part => <Part part={part} key={part.id}/>)}
    </div>
)

export default Content;
/**
 * The Part component is responsible for rendering the details of a single part of a course.
 * It displays the part name and the number of exercises.
 * 
 * @param {Object} part - The part object containing details about the part.
 * @param {string} part.name - The name of the part.
 * @param {number} part.exercises - The number of exercises in the part.
 */
const Part = ({part}) => (
    <p>
      {part.name} {part.exercises}
    </p>
);

export default Part;
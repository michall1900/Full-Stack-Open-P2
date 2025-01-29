import Header from './Header';
import Content from './Content';
import Total from './Total';

/**
 * The Course component is responsible for rendering the details of a single course.
 * It includes the course header, content (parts), and the total number of exercises.
 * 
 * @param {Object} course - The course object containing details about the course.
 * @param {string} course.name - The name of the course.
 * @param {Object[]} course.parts - The list of parts in the course.
 * @param {string} course.parts[].name - The name of the part.
 * @param {number} course.parts[].exercises - The number of exercises in the part.
 * @param {number} course.parts[].id - The unique identifier for the part.
 */
const Course =({course})=>{

    return (
        <div>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total
            parts={course.parts}
          />
        </div>
      )
}


export default Course;
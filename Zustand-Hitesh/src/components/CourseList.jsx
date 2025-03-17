
import useCourseStore from "../app/courseStore"



const CourseList = () => {
    // const courses = useCourseStore((state) => state.courses);
    // const removeCourse = useCourseStore((state) => state.removeCourse);
    // const toggleCourseStatus = useCourseStore(
    //   (state) => state.toggleCourseStatus
  // );
  const courses = useCourseStore((state) => state.courses);
  const removeCourse = useCourseStore((state) => state.removeCourse);
  const toggleCourseStatus = useCourseStore((state) => state.toggleCourseStatus)

console.log(courses, removeCourse, toggleCourseStatus);


  return (
    <ul>
      {courses.map((course, i) => {
        return (
          <div key={i}>
            <li
              className={`course-item`}
              style={{
                backgroudColor: course.completed ? '#00FF0044' : 'white',
              }}
            >
              <span className='course-item-col-1'>
                <input
                  // checked={course.completed}
                  type='checkbox'
                  // onChange={(e) => {
                  //   toggleCourseStatus(course.id);
                  // }}
                />
              </span>
              <span>{course?.title}</span>
              <button
                // onClick={() => {
                //   removeCourse(course.id);
                // }}
                className='delete-btn'
              >
                Delete
              </button>
            </li>
          </div>
        );
      })}
    </ul>
  );
}
export default CourseList
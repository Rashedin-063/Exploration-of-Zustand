
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
                backgroundColor: course.completed ? '#00FF0044' : 'white',
                border: course.completed ? '1px solid rgba(5, 124, 5, 0.27)' : '1px solid white',
              }}
            >
              <span className='course-item-col-1'>
                <input
                  checked={course.completed}
                  // checked={course.completed}
                  type='checkbox'
                  onChange={(e) => toggleCourseStatus(course.id)}
                  // onChange={(e) => {
                  //   toggleCourseStatus(course.id);
                  // }}
                />
              </span>
              <span>{course?.title}</span>
              <button
                onClick={() => {
                  removeCourse(course.id);
                }}
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
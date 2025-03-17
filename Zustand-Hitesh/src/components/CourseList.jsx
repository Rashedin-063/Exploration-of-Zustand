
import useCourseStore from "../app/courseStore"



const CourseList = () => {
    const {courses, removeCourse, toggleCourseStatus} = useCourseStore(
        (state) => ({
            courses: state.courses,
            removeCourse: state.removeCourse,
            toggleCourseStatus: state.toggleCourseStatus
        })
    )

console.log(courses, removeCourse, toggleCourseStatus);


  return (
    <h1>Course List</h1>
  );
}
export default CourseList
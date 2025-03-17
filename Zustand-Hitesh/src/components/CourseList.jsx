
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
    <h1>Course List</h1>
  );
}
export default CourseList
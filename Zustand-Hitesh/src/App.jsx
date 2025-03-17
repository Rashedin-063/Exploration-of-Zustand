import CourseForm from "./components/CourseForm"
import CourseList from "./components/CourseList";


const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#F7F7F7',
}

const App = () => {
  return (
    <div style={appStyle}>
      <h3 style={{fontSize: '1.5rem'}}> My Course List</h3>
      <CourseForm />
      <CourseList/>
    </div>
  );
}
export default App
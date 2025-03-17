import CourseForm from "./components/CourseForm"


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
      Zustand Tutorial - Hitesh Choudhary
      <CourseForm/>
    </div>
  )
}
export default App
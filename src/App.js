import './App.css';
import Registration from './Registration';
import ModuleRegistration from './ModuleRegistration';
import DriverRegistration from './DriverRegistration';
import StudentRegistration from './StudentRegistration';
import LecturerRegistration from './LecturerRegistration';



function App() {
  return (
    <div className="App">
      <h1>Hello Michel</h1>
      <h1>Parent Component</h1>
      <h1>Lecturer Registration</h1>
      <LecturerRegistration/>
      <h1>Student Registration</h1>
      <StudentRegistration/>
      <h1>Driver Registration</h1>
      <DriverRegistration/>
      <h1>Book Registration</h1>
      <Registration/>
      <h1>Module Registration</h1>
      <ModuleRegistration/>
    </div>
  );
}

export default App;

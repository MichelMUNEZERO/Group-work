import './App.css';
import Registration from './Registration';
import ModuleRegistration from './ModuleRegistration';
import DriverRegistration from './DriverRegistration';
import StudentRegistration from './StudentRegistration';
import LecturerRegistration from './LecturerRegistration';
import Welcome from './Components/Welcome';
import  CurrentDate from './Components/CurrentDate';
import Hobbies from './Components/Hobbies/Hobbies';
import Button from './Components/Button';
import Descript from './Components/Descript';
import ListComponent from './Components/ListComponent';
import ToggleButton from './Components/ToggleButton';
import Butto from './Components/Butto';
import Gizz from './Components/Gizz';
import Form from './Components/Form';
import Drop from './Components/Drop';
import Logfrm from './Components/Logfrm';
import Control from './Components/Control';
import Validation from './Components/Validation';
import  Multi from './Components/Multi';
import Check from './Components/Check';


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

      <Welcome />
        <hr style={{width:"90%"}}/>
        <CurrentDate />
        <hr style={{width:"90%"}}/>
        <Hobbies/>
        <hr style={{width:"90%"}}/>
        <div>
          <Button text="Confirm" color="red"/>
          <Button text="Send" color="yellow"/>
          <Button text="click" color="blue"/>
        </div>
        <hr style={{width:"90%"}}/>
        <Descript/>
        <hr style={{width:"90%"}}/>
        <ListComponent/>
        <hr style={{width:"90%"}}/>
        <ToggleButton/>
        <hr style={{width:"90%"}}/>
        < Butto/>
        <hr style={{width:"90%"}}/>
        <Gizz/>
        <hr style={{width:"90%"}}/>
        <Form/>
        <hr style={{width:"90%"}}/>
        <Drop/>
        <hr style={{width:"90%"}}/>
        <Logfrm/>
        <hr style={{width:"90%"}}/>
        <Control/>
        <hr style={{width:"90%"}}/>
        <Validation/>
        <hr style={{width:"90%"}}/>
        < Multi/>
        <hr style={{width:"90%"}}/>
        <Check/>
        <hr style={{width:"90%"}}/>
    </div>
  );
}

export default App;
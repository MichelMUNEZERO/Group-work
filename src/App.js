import './App.css';
import { Welcome, CurrentDate } from './Components/1';
import { HobbyList } from './Components/2';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Welcome />
       <CurrentDate />
       <HobbyList/>
      </header>
    </div>
  );
}

export default App;

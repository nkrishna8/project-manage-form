import logo from './logo.svg';
import './App.css';
import CreateProject from '../src/createProject';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectTypeForm from './projectTypeForm';
import SelectView from './selectView';
import ManageProject from './manageProject';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <CreateProject /> */}

      <Router>
      <Routes>
        <Route path="/" element={<CreateProject />} />
        <Route path="/proj-type" element={<ProjectTypeForm />} />
        <Route path="/select-view" element={<SelectView />} />
        <Route path="/proj-manage" element={<ManageProject />} />

      </Routes>
    </Router>

    </div>
  );
}

export default App;

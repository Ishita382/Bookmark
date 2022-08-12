import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import  { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import SignUp from './Routes/SignUp';
import Login from './Routes/Login';
import Dashboard from './Routes/Dashboard';
function App() {
  return (
    <Router>
      <h1>
        Bookmarks
      </h1>
      <Routes>
        <Route exact path="/" element={<SignUp/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;

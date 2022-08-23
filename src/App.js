import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import  { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import SignUp from './Routes/SignUp';
import Login from './Routes/Login';
import Dashboard from './Routes/Dashboard';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';





function App() {
  return (
    <Router>
      <Container
        sx={{
          display: 'flex',
         
          flexDirection: 'row',
        }}
      >
     
      <Box
      sx={{
        flex:2,
      }}>
      <Routes>
        <Route exact path="/" element={<SignUp/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </Box>
      </Container>
    </Router>
   
  );
}

export default App;

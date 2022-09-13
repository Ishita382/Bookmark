import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import styled from "@emotion/styled";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";

const AppContainer = styled(Container)`
margin-left: 0px;
 min-width: 1200px;
`;

const RouteBox = styled(Box)`
  flex: 2;
`;
function App() {

  const login = "/login";
  const dashboard = "/dashboard";
  
  return (
    <Router>
      <AppContainer>
        <RouteBox>
          <Routes>
            <Route exact path="/" element={<SignUp />} />
            <Route path={login} element={<Login />} />
            <Route path={dashboard} element={<Dashboard />} >
            <Route path=":id" element={<Dashboard />} />
            </Route>
          </Routes>
        </RouteBox>
      </AppContainer>
    </Router>
  );
}

export default App;

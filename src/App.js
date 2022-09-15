import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import styled from "@emotion/styled";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import { DASHBOARD, LOGIN } from "./utils/constants";
const AppContainer = styled(Container)`
  margin-left: 0px;
  min-width: 1200px;
`;

const RouteBox = styled(Box)`
  flex: 2;
`;
function App() {
  return (
    <Router>
      <AppContainer>
        <RouteBox>
          <Routes>
            <Route exact path="/" element={<SignUp />} />
            <Route path={LOGIN} element={<Login />} />
            <Route
              path={DASHBOARD}
              element={<Dashboard />}
            ></Route>
          </Routes>
        </RouteBox>
      </AppContainer>
    </Router>
  );
}

export default App;

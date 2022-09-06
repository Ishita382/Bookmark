
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";

function App() {
  return (
    <Router>
      <Container
        sx={{
          display: "flex",

          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            flex: 2,
          }}
        >
          <Routes>
            <Route exact path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;

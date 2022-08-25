import React from "react";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useCustomHooks } from "../Redux/hooks/customHooks";
//import { loginDetails } from "../Redux/reducers/reducers";

function Login() {
  const { sendLoginDetails } = useCustomHooks();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const initial = useSelector((state) => (
    state.loginDetails
  ));
  const { loginLoading } = initial;
  const setEmailValue = (e) => {
    return setEmail(e.target.value);
  };

  const setPasswordValue = (e) => {
    return setPassword(e.target.value);
  };

  const data = {
    email,
    password,
  };

  return (
    <div>
      {localStorage.getItem("auth")? (
        <Navigate to="/dashboard" />
      ) : (
        <div>
          Email: <input type="email" onChange={setEmailValue} />
          <br />
          Password: <input type="password" onChange={setPasswordValue} />
          <br />
          <button onClick={() => sendLoginDetails(data)}>
            {loginLoading==="inProgress"? "Loading..." : "Login" }
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;

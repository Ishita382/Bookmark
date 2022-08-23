import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendRegistrationDetails } from "../Redux/Actions/actions";
function SignUp(){

    const [regName, setRegName] = useState("");
    const [regEmail, setRegEmail] = useState("");
    const [regPassword, setRegPassword] = useState("");
    const dispatch = useDispatch();

    const registerName = (e) => {
        return setRegName(e.target.value);
    }

    const registerEmail = (e) => {
        return setRegEmail(e.target.value);
    }

    const registerPassword = (e) => {
        return setRegPassword(e.target.value);
    }

    const data = {regName, regEmail, regPassword};
    return(
        <div>
            <h1>Please Sign Up</h1>
            Name: <input type="text" onChange={registerName}/><br/>
            Email: <input type="email" onChange={registerEmail}/><br/>
            Password: <input type="password" onChange={registerPassword}/><br/>
            <button onClick={()=>dispatch(sendRegistrationDetails(data))}><Link to ="/dashboard">Sign Up</Link></button><br/>
            Already have an account? <Link to="/login">Login</Link>
            
        </div>
    )
}

export default SignUp;

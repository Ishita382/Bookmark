import React from "react";
import { Link } from "react-router-dom";
function SignUp(){
    return(
        <div>
            <h1>Please Sign Up</h1>
            Name: <input type="text" /><br/>
            Email: <input type="email" /><br/>
            Password: <input type="password" /><br/>
            <button>Sign Up</button><br/>
            Already have an account? <Link to="/login">Login</Link>
            
        </div>
    )
}

export default SignUp;

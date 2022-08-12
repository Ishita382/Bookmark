import React from "react";
import { Link } from 'react-router-dom';
function Login(){
    return(
        <div>
            <h1>Please Login</h1>
            Name: <input type="text" /><br/>
            Email: <input type="email" /><br/>
            Password: <input type="password" /><br/>
            <button><Link to="/dashboard">Login</Link></button>
        </div>
    )
}

export default Login;
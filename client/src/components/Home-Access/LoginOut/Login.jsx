import { useState } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import SignUpForm from "../Signup/Signup.jsx";

function Login() {
    const [showLogin, setShowLogin] = useState(true);
    function toggleLoginSignup() {
        setShowLogin((showLogin) => !showLogin);
    }

    return (
    <>

    {showLogin ? 
    <LoginForm showLogin={showLogin} setShowLogin = {setShowLogin} toggleLoginSignup = {toggleLoginSignup} />
    : 
    <SignUpForm toggleLoginSignup={toggleLoginSignup} />}

    </>
        )
    }
        
        
export default Login;

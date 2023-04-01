/// holding original code here in order to test new one


import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm({ onLogin, showLogin, setShowLogin, toggleLoginSignup }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }


    return (
        <form onSubmit={handleSubmit} className="login-form">
            <div className="form-input">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-input">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="form-input">
                <button variant="fill" color="primary" type="submit">
                    {isLoading ? "Loading..." : "Login"}
                </button>
            <div>
                <label>Don't have an account?</label>
                <button onClick = {toggleLoginSignup} variant="fill" color="primary" type="submit">
                    Sign Up
                </button>
            </div>
                {errors.map((err) => (
                    <error key={err}>{err}</error>
                ))}
            </div>
        </form>
    );
}

export default LoginForm;

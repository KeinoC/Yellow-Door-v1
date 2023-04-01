import React from "react";
import { Link } from "react-router-dom";
import "./LandNav.css"


function LandNav({ user, setUser }) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    return (
        <nav>
                <div className = "land-nav">
                    <Link to="/about"> About Roam </Link>
                    <Link to="/login"> Login </Link>
                </div>
    </nav>
    );
}




export default LandNav;

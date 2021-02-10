import React from 'react'
import { Link } from "react-router-dom";
import "./Navigation.css"

export default function Navigation() {
    return (
        <nav>
            <Link to="/userList">User List</Link>
            <Link to="/">Login</Link>
        </nav>
    )
}

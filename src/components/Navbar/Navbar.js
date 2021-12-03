import { Link } from 'react-router-dom';
import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <h1 className="navbar-brand">Edward Castaneda</h1>
                <div className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/resume">Resume</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact Me</Link>
                    </li>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
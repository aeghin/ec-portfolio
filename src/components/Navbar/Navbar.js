import { Link } from 'react-router-dom';
import React from 'react';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <h1 className="navbar-brand">Edward Castaneda</h1>
                <div className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link about-btn" to="/home">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link project-btn" to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link resume-btn" to="/resume">Resume</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link contact-btn" to="/contact">Contact Me</Link>
                    </li>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
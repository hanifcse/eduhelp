import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">EduHelp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link to="/home" className="nav-link active" aria-current="page">HOME</Link>
                        <Link to="/streaming" className="nav-link">STREAMING</Link>
                        <Link to="/about" className="nav-link">ABOUT</Link>
                        <Link to="/contactus" className="nav-link">CONTACT US</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
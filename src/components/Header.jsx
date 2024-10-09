import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Header = () => {
    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary  top-0 start-0 w-100 border-bottom">
            <div className="container-fluid">
                <Link to="/"><img src={Logo} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link 
                            className="nav-link active DM_Sans text-secondary fw-medium" 
                            aria-current="page" 
                            to="/">
                                Home
                        </Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link DM_Sans text-secondary fw-medium" href="#">About</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a 
                            className="nav-link dropdown-toggle DM_Sans text-secondary fw-medium" 
                            href="#" role="button" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false">
                            Category
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item DM_Sans text-secondary fw-medium" href="#">Design & Technology</a></li>
                            <li><a className="dropdown-item DM_Sans text-secondary fw-medium" href="#">Marketing</a></li>
                            <li><a className="dropdown-item DM_Sans text-secondary fw-medium" href="#">Business</a></li>
                            <li><a className="dropdown-item DM_Sans text-secondary fw-medium" href="#">Design</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item DM_Sans text-secondary fw-medium" href="#">Consultation</a></li>
                        </ul>
                        </li>
                    </ul>
                    <button 
                        type="button" 
                        className="btn btn-second fw-medium me-1"
                        onClick={() => navigate("/register")} >
                            Register
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-first fw-medium"
                        onClick={() => navigate("/login")} >
                            Login
                    </button>
                </div>
            </div>
            </nav>
    )
}

export default Header;
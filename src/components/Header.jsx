import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import '../components/styles.css'

const Header = () => {
    const navigate = useNavigate();

    let profileDropdownList = document.querySelector(".profile-dropdown-list");
    let profileToggler = document.querySelector(".profile-dropdown-btn");
    let dropdownMenu = document.querySelector(".dropdown-list");
    let dropdownToggler = document.querySelector(".dropdown-btn");
    const profileToggle = () => profileDropdownList.classList.toggle("active");
    const dropdownToggle = () => dropdownMenu.classList.toggle("show");

    window.addEventListener('click', (e) => {
        if (!profileToggler.contains(e.target)) {
            profileDropdownList.classList.remove("active")
        }
        
        if (!dropdownToggler.contains(e.target)) {
            dropdownMenu.classList.remove("show")
        }
    });

    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary top-0 start-0 w-100 border-bottom d-flex flex-row justify-content-between">
            <div className="logo">
                <Link to="/"><img src={Logo} alt="logo" /></Link>
            </div>
            <div className="head">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link DM_Sans text-secondary fw-medium" aria-current="page" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link DM_Sans text-secondary fw-medium" href="#">About</a>
                    </li>
                    <li className="nav-item dropdown-btn position-relative" onClick={dropdownToggle}>
                        <a href="#" className="nav-link DM_Sans text-secondary fw-medium">
                            Category 
                            <span className="ms-1">
                                <i className="fa-solid fa-chevron-down"></i>
                            </span>
                        </a>
                        
                        <ul className="dropdown-list p-0">
                            <li className="dropdown-list-item list-unstyled"><a className="text-decoration-none DM_Sans text-secondary fw-medium" href="#">Design & Technology</a></li>
                            <li className="dropdown-list-item list-unstyled"><a className="text-decoration-none DM_Sans text-secondary fw-medium" href="#">Marketing</a></li>
                            <li className="dropdown-list-item list-unstyled"><a className="text-decoration-none DM_Sans text-secondary fw-medium" href="#">Business</a></li>
                            <li className="dropdown-list-item list-unstyled"><a className="text-decoration-none DM_Sans text-secondary fw-medium" href="#">Design</a></li>
                            <hr className="m-0" />
                            <li className="dropdown-list-item list-unstyled"><a className="text-decoration-none DM_Sans text-secondary fw-medium" href="#">Consultation</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="profile-dropdown position-relative">
                <div className="profile-dropdown-btn fw-medium" onClick={profileToggle}>
                    <div className="profile-img position-relative">
                        <i className="fa-solid fa-circle"></i>
                    </div>
                    <span className="DM_Sans fw-semibold fs-6">
                        Clover
                        <i className="fa-solid fa-angle-down ms-2"></i>
                    </span>
                </div>

                <ul className="profile-dropdown-list poppins fw-medium p-0">
                    <li className="profile-dropdown-list-item list-unstyled">
                        <a href="#" className="text-decoration-none text-primary-emphasis ms-4">
                            <i className="fa-solid fa-user me-2"></i>
                            Edit Profile
                        </a>
                    </li>
                    <li className="profile-dropdown-list-item list-unstyled">
                        <a href="#" className="text-decoration-none text-primary-emphasis ms-4">
                            <i className="fa-solid fa-envelope me-2"></i>
                            Inbox
                        </a>
                    </li>
                    <li className="profile-dropdown-list-item list-unstyled">
                        <a href="#" className="text-decoration-none text-primary-emphasis ms-4">
                            <i className="fa-solid fa-sliders me-2"></i>
                            Settings
                        </a>
                    </li>
                    <li className="profile-dropdown-list-item list-unstyled">
                        <a href="#" className="text-decoration-none text-primary-emphasis ms-4">
                            <i className="fa-solid fa-circle-question me-2"></i>
                            Help & Support
                        </a>
                    </li>
                    <hr className="m-0" />
                    <li className="profile-dropdown-list-item list-unstyled">
                        <a href="#" className="text-decoration-none text-primary-emphasis ms-4">
                            <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>
                            Log out
                        </a>
                    </li>
                </ul>
            </div>

            <div className="header-right d-flex flex-row me-2">
                <button type="button" className="btn btn-second fw-medium me-1" onClick={() => navigate("/register")} >
                    Register
                </button>
                <button type="button" className="btn btn-first fw-medium" onClick={() => navigate("/login")} >
                    Login
                </button>
            </div>
        </nav>
    )
}

export default Header;
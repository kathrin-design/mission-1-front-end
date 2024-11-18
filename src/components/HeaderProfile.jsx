import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import UserPic from '../assets/img_profile.jpg';

const HeaderProfile = () => {
    const [open, setOpen] = useState(false);
    const { menuRef, imgRef } = useRef();

    window.addEventListener('click', (e) => {
        if (e.target !== menuRef.current && e.target !== imgRef.current) {
            setOpen(false);
        }
    });

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
                </div>
                <div className="relative">
                    <img 
                        ref={imgRef} 
                        src={UserPic} 
                        onClick={() => setOpen(!open)} 
                        className="user-pic h-50 border-0 rounded-full object-cover cursor-pointer" 
                    />
                    {open && (
                        <div ref={menuRef} className="bg-white p-4 w-50 shadow-lg absolute -left-14 top-24">
                            <ul>
                                <Link to="/profile" className="p-2 text-lg cursor-pointer rounded hover:bg-blue-100">
                                    Profile
                                </Link>
                                <li className="p-2 text-lg cursor-pointer rounded hover:bg-blue-100">
                                    Your course
                                </li>
                                <li className="p-2 text-lg cursor-pointer rounded hover:bg-blue-100">
                                    Settings
                                </li>
                                <li className="p-2 text-lg cursor-pointer rounded hover:bg-blue-100">
                                    Logout
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default HeaderProfile;
import React from 'react';
import './styles.css';
import GoogleIcon from '../assets/google-icon.png';

const BtnGoogle = ({ className, keyword }) => {
    return (
        <div className="d-grid mt-2">
            <button 
                className={`btn fs-6 fw-bold DM_Sans ${ className }`}>
                <img src={GoogleIcon} />
                { keyword }
            </button>
        </div>
    )
}

export default BtnGoogle;
import React from 'react';
import './styles.css';

const BtnLogin = ({ className }) => {
    return (
        <div className="d-grid mt-2">
            <button className={`btn ${ className }`}>Masuk</button>
        </div>
    )
}

export default BtnLogin;
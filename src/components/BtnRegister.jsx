import React from 'react';
import './styles.css';

const BtnRegister = ({ className }) => {
    return(
        <div className="d-grid mt-2">
            <button className={`btn ${ className }`}>Daftar</button>
        </div>
    )
}

export default BtnRegister;
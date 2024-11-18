import React from 'react';
import '../styles.css';

const BtnRegister = ({ className, registerBtnType }) => {
    return(
        <div className="d-grid mt-2">
            <button type={`${ registerBtnType }`} className={`btn ${ className }`}>Daftar</button>
        </div>
    )
}

export default BtnRegister;
import React from 'react';
import './styles.css';

const JenisKelamin = () => {
    return (
        <div>
            <label className="text-secondary DM_Sans fs-6">
                Jenis Kelamin
                <span className="symbol fs-6 ms-1">*</span>
            </label>
            <button 
                className="dropdown-toggle w-100 DM_Sans d-flex flex-row justify-content-between align-items-center text-secondary btn border dropdown-toggle" 
                type="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
                Wanita
            </button>
            <ul className="dropdown-menu w-50">
                <li className="dropdown-item text-center text-secondary DM_Sans fs-6">Wanita</li>
                <li className="dropdown-item text-center text-secondary DM_Sans fs-6">Pria</li>
            </ul>
        </div>
    )
}

export default JenisKelamin;
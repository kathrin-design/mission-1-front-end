import React from 'react';
import './styles.css';

const NamaLengkap = () => {
    return (
        <div className="mb-2">
            <label className="text-secondary DM_Sans fs-6">
                Nama Lengkap
                <span className="symbol fs-6 ms-1">*</span>
            </label>
            <input 
                type="text" 
                placeholder="Enter First Name" 
                className="form-control DM_Sans" />
        </div>
    )
}

export default NamaLengkap;
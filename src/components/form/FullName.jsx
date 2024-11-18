import React from 'react';
import '../styles.css';

const FullName = ( fullNameValue ) => {
    return (
        <div className="mb-2">
            <label className="text-secondary DM_Sans fs-6" htmlFor="fullname">
                Nama Lengkap
                <span className="symbol fs-6 ms-1">*</span>
            </label>
            <input 
                type="text" 
                name="fullName"
                id="fullName"
                value={`${ fullNameValue }`}
                placeholder="Enter First Name" 
                className="form-control DM_Sans" />
        </div>
    )
}

export default FullName;
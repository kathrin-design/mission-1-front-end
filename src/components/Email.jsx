import React from 'react';
import './styles.css';

const Email = () => {
    return(
        <div className="mb-2">
            <label 
                htmlFor="email" 
                className="text-secondary DM_Sans fs-6">
                    E-mail
                <span className="symbol fs-6 ms-1">*</span>
            </label>
            <input 
                type="email" 
                placeholder="Enter Email" 
                className="DM_Sans form-control" /> 
        </div>
    )
}

export default Email;
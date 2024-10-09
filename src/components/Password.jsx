import React from 'react';
import './styles.css';
import EyeOff from '../assets/mdi_eye-off.png'

const Password = ({ word }) => {
    return (
        <div className="mb-3">
            <label 
                htmlFor="password" 
                className="text-secondary DM_Sans fs-6"
                >
                    { word }
                    <span className="symbol fs-6 ms-1">*</span>
            </label>
            <div className="input_field border rounded d-flex flew-row">
                <input 
                    type="password" 
                    placeholder="Enter Password" 
                    className="DM_Sans border-0 fs-6 form-control"
                    required
                     />
                        <img 
                            src={EyeOff}
                            className="d-flex justify-content-center align-items-center align-self-center me-2 h-50 cursor-pointer" />
            </div>
        </div>
    )
}

export default Password;
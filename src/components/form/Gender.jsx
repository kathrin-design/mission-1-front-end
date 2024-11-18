
import React from 'react';
import '../styles.css';

const Gender = () => {
    return (
        <div>
            <label className="text-secondary DM_Sans fs-6">
                Jenis Kelamin
                <span className="symbol fs-6 ms-1">*</span>
            </label>
            <select 
                className="dropdown-toggle w-100 DM_Sans d-flex flex-row justify-content-between align-items-center text-secondary btn border dropdown-toggle" 
                name="gender" 
                id="gender"
                value="gender">
                <option 
                    className="text-center text-secondary DM_Sans fs-6"
                    value="Wanita">
                        Wanita
                </option>
                <option 
                    className="text-center text-secondary DM_Sans fs-6"
                    value="Pria">
                        Pria
                </option>
            </select>
        </div>
    )
}

export default Gender;
import React from 'react';
import IdnFlag from '../assets/idn-flag.png'
import ArrowDown from '../assets/arrow-down.png'

const NoHp = () => {
    return (
        <div className="mb-3">
            <label className="text-secondary DM_Sans fs-6">
                No. Hp
                <span className="symbol fs-6 ms-1">*</span>
            </label>
            <div className="input_field d-flex flew-row">
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <div className="border rounded me-2 d-flex flex-row align-items-center">
                        <div className="border-end p-2 bg-body-secondary rounded-start d-flex align-items-center">
                            <img src={IdnFlag} />
                        </div>
                        <div className="p-2 d-flex flex-row">
                            <div className="me-1 text-secondary fw-semibold">+62</div>
                            <img className="h-50" src={ArrowDown} />
                        </div>
                    </div>
                </div>
                <div className="w-100 border rounded d-flex justify-content-center">
                    <input 
                        type="text"
                        className="DM_Sans form-control border-0"
                        required />
                </div>
            </div>
        </div>
    )
}

export default NoHp;
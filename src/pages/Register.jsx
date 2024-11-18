import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useRegisterStore } from "../stores/registerStore";
import Header from '../components/Header';
import Title from '../components/form/Title';
import Subtitle from '../components/form/SubTitle';
import BtnGoogle from '../components/form/BtnGoogle';
import '../components/styles.css';
import EyeOff from '../assets/mdi_eye-off.png';
import IdnFlag from '../assets/idn-flag.png';
import ArrowDown from '../assets/arrow-down.png';

const Register = ( title, subtitle, className, word, keyword, fullNameValue, emailValue, EmailOnChange, passwordValue, passwordOnChange, registerBtnType ) => {
    const { fullName, email, gender, phoneNumber, password, setFullName, setEmail, setGender, setPhoneNumber, setPassword, saveToLocalStorage } = useRegisterStore();
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleRegister = (e) => {
        e.preventDefault();

        if (!fullName || !email || !password || !confirmPassword) {
            toast.error('Semua kolom harus diisi');
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Kata sandi dan konfirmasi kata sandi harus sama');
            return;
        }

        saveToLocalStorage();
        toast.success('Registrasi berhasil');
        window.location.href = "/";
    }

    return (
        <>
            <Header />
            <div className="template d-flex justify-content-center align-items-center">
                <div className="form_container p-4 my-4 rounded bg-white border">
                    <Title 
                        title="Pendaftaran Akun" 
                    />
                    <Subtitle 
                        subtitle="Yuk, daftarkan akunmu sekarang juga!" 
                    />
                    <form 
                        id="register"
                        name="register"
                        onSubmit={handleRegister}>
                        <div className="mb-2">
                            <label 
                                className="text-secondary DM_Sans fs-6" 
                                htmlFor="fullname">
                                    Nama Lengkap
                                <span className="text-danger fs-6 ms-1">*</span>
                            </label>
                            <input 
                                type="text" 
                                name="fullName"
                                id="fullName"
                                placeholder="Enter First Name" 
                                className="form-control DM_Sans"
                                onChange={(e) => setFullName(e.target.value)} />
                        </div>

                        <div className="mb-2">
                            <label 
                                htmlFor="email" 
                                className="text-secondary DM_Sans fs-6">
                                    E-mail
                                <span className="text-danger fs-6 ms-1">*</span>
                            </label>
                            <input 
                                type="email" 
                                name="email"
                                id="email"
                                placeholder="Enter Email" 
                                className="DM_Sans form-control"
                                onChange={(e) => setEmail(e.target.value)} /> 
                        </div>

                        <div>
                            <label 
                                className="text-secondary DM_Sans fs-6"
                                htmlFor="gender">
                                Jenis Kelamin
                                <span className="text-danger fs-6 ms-1">*</span>
                            </label>
                            <select 
                                className="dropdown-toggle w-100 DM_Sans d-flex flex-row justify-content-between align-items-center text-secondary btn border dropdown-toggle" 
                                name="gender" 
                                id="gender"
                                value="gender"
                                onChange={(e) => setGender(e.target.value)}>
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

                        <div className="mt-2">
                            <label 
                                className="text-secondary DM_Sans fs-6"
                                htmlFor="phoneNumber">
                                No. Hp
                                <span className="text-danger fs-6 ms-1">*</span>
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
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        className="DM_Sans form-control border-0"
                                        onChange={(e) => setPhoneNumber(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label 
                                htmlFor="password" 
                                className="text-secondary DM_Sans fs-6"
                                >
                                    Kata Sandi
                                    <span className="text-danger fs-6 ms-1">*</span>
                            </label>
                            <div className="input_field border rounded d-flex flew-row">
                                <input 
                                    type="password" 
                                    name="password"
                                    id="password"
                                    placeholder="Enter Password" 
                                    className="DM_Sans border-0 fs-6 form-control"
                                    onChange={(e) => setPassword(e.target.value)} />
                                <img 
                                    src={EyeOff}
                                    className="d-flex justify-content-center align-items-center align-self-center me-2 h-50 cursor-pointer" />
                            </div>
                        </div>
                        
                        <div className="mb-3">
                            <label 
                                htmlFor="confirmPassword" 
                                className="text-secondary DM_Sans fs-6"
                                >
                                    Konfirmasi Kata Sandi
                                    <span className="text-danger fs-6 ms-1">*</span>
                            </label>
                            <div className="input_field border rounded d-flex flew-row">
                                <input 
                                    type="password" 
                                    name="password"
                                    id="confirmPassword"
                                    placeholder="Enter Password" 
                                    className="DM_Sans border-0 fs-6 form-control"
                                    onChange={(e) => setConfirmPassword(e.target.value)} />
                                <img 
                                    src={EyeOff}
                                    className="d-flex justify-content-center align-items-center align-self-center me-2 h-50 cursor-pointer" />
                            </div>
                        </div>

                        <div className="d-grid mt-2">
                            <button 
                                type="submit" 
                                className="btn-first btn border-0 p-2 rounded">
                                    Daftar
                            </button>
                        </div>
                        <div className="d-grid mt-2">
                            <button 
                                type="button" 
                                className="btn-second btn border-0 p-2 rounded"
                                onClick={() => navigate("/login")}>
                                    Masuk
                            </button>
                        </div>
                        <p className="text-center text-secondary my-2">atau</p>
                        <BtnGoogle 
                            className="btn-google" 
                            keyword="Daftar dengan Google"
                        />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;
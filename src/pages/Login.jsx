import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useLoginStore } from '../stores/loginStore';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Title from '../components/form/Title';
import Subtitle from '../components/form/SubTitle';
import BtnGoogle from '../components/form/BtnGoogle';
import '../components/styles.css';
import EyeOff from '../assets/mdi_eye-off.png'

const Login = ( title, subtitle ) => {
    const navigate = useNavigate();
    const { email, password, setEmail, setPassword, login } = useLoginStore();
    const [ errors, setErrors ] = useState({ email: "", password: "" });
    const [ passwordVisible, setPasswordVisible ] = useState(false);

    const validateForm = () => {
        let valid = true;
        let newErrors = { email: "", password: "" };

        if (!email) {
            newErrors.email = "Email harus diisi!";
            valid = false;
        }

        if (!password) {
            newErrors.password = "Password harus diisi!";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleLogin = (e) => {
        e.preventDefault()

        if (validateForm()) {
            if (login()) {
                toast.success("Login berhasil!");
                window.location.href = "/";
            } else {
                toast.error("Email atau Password anda salah!");
            }
        } else {
            toast.error("Mohon lengkapi semua data!");
        }
    };

    const handleEnterPress = (e) => {
        if (e.key === "Enter") {
            handleLogin(e);
        }
    };

    return (
        <>
            <Header />
            <div className="template d-flex justify-content-center align-items-center align-self-center">
                <div className="form_container p-4 my-4 bg-white border rounded">
                    <Title 
                        title="Masuk ke Akun" />
                    <Subtitle 
                        subtitle="Yuk, lanjutin belajarmu di videobelajar" />
                    <form 
                        id="login"
                        name="login"
                        onSubmit={handleLogin}
                        onKeyDown={handleEnterPress}    
                    >
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} /> 
                        </div>

                        <div className="mb-3">
                            <label 
                                htmlFor="password" 
                                className="text-secondary DM_Sans fs-6"
                                >
                                    Password
                                    <span className="text-danger fs-6 ms-1">*</span>
                            </label>
                            <div className="input_field border rounded d-flex flew-row">
                                <input 
                                    type={passwordVisible ? "text" : "password"} 
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter Password" 
                                    className="DM_Sans border-0 fs-6 form-control"
                                    />
                                        <img 
                                            src={EyeOff}
                                            className="d-flex justify-content-center align-items-center align-self-center me-2 h-50 cursor-pointer"
                                            onClick={() => setPasswordVisible(!passwordVisible)} />
                            </div>
                        </div>

                        <div>
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                            )}
                        </div>
                        <p className="text-end mt-2">
                            <a href="" className="text-decoration-none fw-medium text-secondary">Lupa Password?</a>
                        </p>
                        <div className="d-grid mt-2">
                            <button 
                                type="submit" 
                                className="btn-first btn border-0 p-2 rounded">
                                    Masuk
                            </button>
                        </div>
                        <div className="d-grid mt-2">
                            <button 
                                type="button" 
                                className="btn-second btn border-0 p-2 rounded"
                                onClick={() => navigate("/register")}>
                                    Daftar
                            </button>
                        </div>
                        <p className="text-center text-secondary my-2">atau</p>
                        <BtnGoogle 
                            className="btn-google" 
                            keyword="Masuk dengan Google" />
                    </form>
                </div>
            </div>
        </>
        
    )
}

export default Login;
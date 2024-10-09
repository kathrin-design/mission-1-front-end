import React from "react";
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header';
import Email from '../components/Email';
import Password from '../components/Password';
import Title from '../components/Title';
import Subtitle from '../components/SubTitle';
import BtnLogin from '../components/BtnLogin';
import BtnRegister from '../components/BtnRegister';
import BtnGoogle from '../components/BtnGoogle';
import '../components/styles.css';

const Login = ( title, subtitle, className, word, keyword ) => {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <div className="template d-flex justify-content-center align-items-center align-self-center">
                <div className="form_container p-4 my-4 bg-white border rounded">
                    <form>
                        <Title title="Masuk ke Akun" />
                        <Subtitle subtitle="Yuk, lanjutin belajarmu di videobelajar" />
                        <Email />
                        <Password word="Kata Sandi" />
                        <p className="text-end mt-2">
                            <a href="" className="text-decoration-none fw-medium text-secondary">Lupa Password?</a>
                        </p>
                        <BtnLogin className="btn-first" />
                        <BtnRegister className="btn-second"
                        onClick={() => navigate("/register")} />
                        <p className="text-center text-secondary my-2">atau</p>
                        <BtnGoogle className="btn-google" keyword="Masuk dengan Google" />
                    </form>
                </div>
            </div>
        </>
        
    )
}

export default Login;
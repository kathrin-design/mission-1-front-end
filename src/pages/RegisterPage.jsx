import React from "react";
import Header from '../components/Header';
import Password from '../components/Password';
import Title from '../components/Title';
import Subtitle from '../components/SubTitle';
import NamaLengkap from '../components/NamaLengkap'
import Email from '../components/Email';
import JenisKelamin from '../components/JenisKelamin';
import NoHp from '../components/NoHp';
import BtnRegister from '../components/BtnRegister';
import BtnLogin from '../components/BtnLogin';
import BtnGoogle from '../components/BtnGoogle';
import '../components/styles.css';

const RegisterContent = ( title, subtitle, className, word, keyword ) => {
    return(
        <>
            <Header />
            <div className="template d-flex justify-content-center align-items-center">
                <div className="form_container p-4 my-4 rounded bg-white border">
                    <form>
                        <Title 
                            title="Pendaftaran Akun" 
                        />
                        <Subtitle 
                            subtitle="Yuk, daftarkan akunmu sekarang juga!" 
                        />
                        <NamaLengkap />
                        <Email />
                        <JenisKelamin />
                        <NoHp />
                        <Password 
                            word="Kata Sandi" 
                        />
                        <Password 
                            word="Konfirmasi Kata Sandi" 
                        />
                        <BtnRegister 
                            className="btn-first" 
                        />
                        <BtnLogin 
                            className="btn-second" 
                        />
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

export default RegisterContent;
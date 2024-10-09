import React from 'react';
import './styles.css';
import Logo from '../assets/Logo.png';
import linkedInIcon from '../assets/linkedIn-icon.png';
import facebookIcon from '../assets/facebook-icon.png';
import instagramIcon from '../assets/instagram-icon.png';
import twitterIcon from '../assets/twitter-icon.png';

const Footer = () => {
    return (
    <div className="w-100 d-flex flex-column mt-5 bg-white border-top">
        <div className="d-flex flex-column flex-sm-row justify-content-between m-2 px-5">
            <div className="d-flex flex-column w-50">
                <div>
                    <img src={Logo} alt="Logo VideoBelajar" />
                </div>
                <p className="fs-5 fw-bold DM_Sans mb-1">
                    Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
                </p>
                <p className="fs-6 DM_Sans mb-1">
                    Jl. Usman Effendi No. 50 Lowokwaru, Malang
                </p>
                <p className="fs-6 DM_Sans">
                    +62-877-7123-1234
                </p>
            </div>
            <div className="d-flex flex-row">
                <div className="d-flex flex-column mx-1">
                    <p className="fs-6 fw-bold">
                        Kategori
                    </p>
                    <div className="d-flex flex-column text-secondary DM_Sans">
                        <p>Digital & Teknologi</p>
                        <p>Pemasaran</p>
                        <p>Manajemen Bisnis</p>
                        <p>Pengembangan Diri</p>
                        <p>Desain</p>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column mx-1 DM_Sans">
                <p className="fs-6 fw-bold">
                    Perusahaan
                </p>
                <div className="d-flex flex-column text-secondary DM_Sans">
                    <p>Tentang Kami</p>
                    <p>FAQ</p>
                    <p>Kebijakan Privasi</p>
                    <p>Ketentuan Layanan</p>
                    <p>Bantuan</p>
                </div>
            </div>
            <div className="d-flex flex-column mx-1 DM_Sans">
                <p className="fs-6 fw-bold">
                    Komunitas
                </p>
                <div className="d-flex flex-column text-secondary DM_Sans">
                    <p>Tips Sukses</p>
                    <p>Blog</p>
                </div>
            </div>
        </div>
        <div className="w-100 px-5 pt-2 pb-5 d-flex justify-content-between align-items-center border-top">
                <p className="my-auto align-items-center text-secondary DM_Sans fw-medium">
                    @2023 Gerobak Sayur All Rights Reserved.
                </p>
                <div className="d-flex flex-row">
                    <img className="me-2" src={linkedInIcon} />
                    <img className="mx-2" src={facebookIcon} />
                    <img className="mx-2" src={instagramIcon} />
                    <img className="ms-2" src={twitterIcon} />
                </div>
            </div>
    </div>
    )
}

export default Footer;
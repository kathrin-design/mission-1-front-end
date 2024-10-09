import React from 'react';
import './styles.css';
import FullStar from '../assets/full-star.png'
import HalfStar from '../assets/half-star.png'
import BlankStar from '../assets/blank-star.png'

const Card = ({ card, avatar, classCard }) => {
   return (
    <div className={`p-3 d-flex flex-column bg-white border rounded-3 ${ classCard }`}>
        <img className="img-fluid" src={card} />
        <div className="d-flex flex-column mt-2">
            <p className="poppins text-black fs-6 fw-bold">Big 4 Auditor Financial Analyst</p>
            <div className="overflow-hidden text_overflow DM_Sans text-secondary fw-semibold">
                Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik
            </div>
        </div>
        <div className="d-flex flex-row align-items-center">
            <div>
                <img className="tutor_avatar" src={avatar} />
            </div>
            <div className="ms-2 w-100 d-flex flex-column">
                <div className="text-dark fw-semibold DM_Sans">Jenna Ortega</div>
                <div className="text-secondary DM_Sans fs-6 d-flex flex-row">
                    <p>Senior Accountant</p>  
                    <p className="mx-1">di</p>
                    <p className="fw-bold">Gojek</p>
                </div>
            </div>
        </div>
        <div className="d-flex flex-row justify-content-between mt-2">
            <div className="d-flex flex-row">
                <div className="d-flex flex-row">
                    <img className="h-50" src={FullStar} />
                    <img className="h-50" src={FullStar} />
                    <img className="h-50" src={HalfStar} />
                    <img className="h-50" src={BlankStar} />
                    <img className="h-50" src={BlankStar} />
                </div>
                <div className="text-secondary fs-6 DM_Sans text-decoration-underline">
                    3.5 (86)
                </div>
            </div>
            <h4 className="green">Rp 300K</h4>
        </div>
    </div>
   )
}

export default Card;
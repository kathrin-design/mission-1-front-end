import React from 'react';
import Card from './Card';
import Card1 from '../assets/card-1.png'
import Card2 from '../assets/card-2.png'
import Card3 from '../assets/card-3.png'
import Card4 from '../assets/card-4.png'
import Card5 from '../assets/card-5.png'
import Card6 from '../assets/card-6.png'
import Card7 from '../assets/card-7.png'
import Card8 from '../assets/card-8.png'
import Card9 from '../assets/card-9.png'
import Avatar1 from '../assets/img_avatar_1.jpg'
import Avatar2 from '../assets/img_avatar_2.jpg'
import Avatar3 from '../assets/img_avatar_3.jpg'
import Avatar4 from '../assets/img_avatar_4.jpg'
import Avatar5 from '../assets/img_avatar_5.jpg'
import Avatar6 from '../assets/img_avatar_6.jpg'
import Avatar7 from '../assets/img_avatar_7.jpg'
import Avatar8 from '../assets/img_avatar_8.jpg'
import Avatar9 from '../assets/img_avatar_9.jpg'

const CardWrapper = ( classCard ) => {
    return (
        <div className="container ">
            <div className="col">
                <div className="row gap-3">
                    <Card card={Card1} avatar={Avatar1} classCard="col my-2"  />
                    <Card card={Card2} avatar={Avatar2} classCard="col my-2" />
                    <Card card={Card3} avatar={Avatar3} classCard="col my-2" />
                </div>
                <div className="row gap-3 my-2">
                    <Card card={Card4} avatar={Avatar4} classCard="col my-2" />
                    <Card card={Card5} avatar={Avatar5} classCard="col my-2" />
                    <Card card={Card6} avatar={Avatar6} classCard="col my-2" />
                </div>
                <div className="row gap-3">
                    <Card card={Card7} avatar={Avatar7} classCard="col my-2" />
                    <Card card={Card8} avatar={Avatar8} classCard="col my-2" />
                    <Card card={Card9} avatar={Avatar9} classCard="col my-2" />
                </div>
            </div>
            
        </div>
    )
}

export default CardWrapper;
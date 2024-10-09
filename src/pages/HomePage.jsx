import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero';
import CardTitle from '../components/CardTitle';
import Closing from '../components/Closing';
import Footer from '../components/Footer';
import '../components/styles.css'
import CardWrapper from '../components/CardWrapper';


const HomePage = ( card, avatar ) => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <CardTitle />
                <CardWrapper />
                <Closing />
            </main>
            <Footer />
        </>
    )
};

export default HomePage;
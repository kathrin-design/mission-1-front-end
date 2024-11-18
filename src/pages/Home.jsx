import React from 'react';
import Header from '../components/Header';
import HeroCard from '../components/HeroCard';
import CourseHeader from '../components/CourseHeader'
import ClosingCard from '../components/ClosingCard';
import Footer from '../components/Footer';
import '../components/styles.css';
import CourseWrapper from '../components/CourseWrapper';


const Home = () => {
    return (
        <>
            <Header />
            <main>
                <HeroCard />
                <CourseHeader />
                <CourseWrapper />
                <ClosingCard />
            </main>
            <Footer />
        </>
    )
};

export default Home;
import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ConnectAndFitSection from './ConnectAndFitSection';
import Parts from './Parts';
import Reviews from './Reviews';
import Summary from './Summary';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <Summary />
            <Reviews />
            <ConnectAndFitSection />
            <WhyChooseUs />
            <Footer />
        </div>
    );
};

export default Home;
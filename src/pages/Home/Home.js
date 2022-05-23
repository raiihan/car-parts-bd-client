import React from 'react';
import Banner from './Banner';
import ConnectAndFitSection from './ConnectAndFitSection';
import FitForMe from './FitForMe';
import NewsLetter from './NewsLetter';
import Parts from './Parts';
import Reviews from './Reviews';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <Summary />
            <Reviews />
            <ConnectAndFitSection />
        </div>
    );
};

export default Home;
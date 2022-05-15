import React from 'react';
import Banner from './Banner';
import Care from './Care';
import Feedback from './Feedback';
import Hospitals from './Hospitals';
import InfoMain from './InfoMain';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <InfoMain></InfoMain>
            <Care></Care>
            <Hospitals></Hospitals>
            <Testimonials></Testimonials>
            <Feedback></Feedback>


        </>
    );
};

export default Home;
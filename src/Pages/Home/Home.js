import React from 'react';
import Banner from './Banner';
import Care from './Care';
import InfoMain from './InfoMain';
import MakeAppointment from './MakeAppointment';
import Service from './Service';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <InfoMain></InfoMain>
            <Service></Service>
            <Care></Care>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>

        </>
    );
};

export default Home;
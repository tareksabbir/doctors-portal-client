import React from 'react';
import Banner from './Banner';
import Care from './Care';
import InfoMain from './InfoMain';
import Service from './Service';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <InfoMain></InfoMain>
            <Service></Service>
            <Care></Care>

        </>
    );
};

export default Home;
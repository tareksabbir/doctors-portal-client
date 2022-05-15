import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'


const InfoMain = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:px-24 px-10 mt-32'>
            <InfoCard cardTitle="Opening Hours" bgClass="bg-blue-400" img={clock}></InfoCard>
            <InfoCard cardTitle="Our Locations" bgClass="bg-blue-500" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us" bgClass="bg-blue-400" img={phone}></InfoCard>
        </div>
    );
};

export default InfoMain;
import React from 'react';
import ServiceCard from './ServiceCard';
import teeth from '../../assets/icons/tooth-whitening.png'
import hart from '../../assets/icons/heart (1).png'
import brain from '../../assets/icons/brain.png'

const Service = () => {

    return (
        <>
            <div>
                <h1 className='text-center text-3xl font-bold text-primary mt-10 lg:mt-28'>Our Services</h1>
                <p className='text-center text-4xl mt-3'>Services We Provide</p>
            </div>
            <div className='px-10 lg:px-20 mt-20 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <ServiceCard cardTitle='Hart Specialties' img={hart}

                ></ServiceCard>
                <ServiceCard cardTitle='Brain Specialties' img={brain}

                ></ServiceCard>
                <ServiceCard cardTitle='Teeth Specialties' img={teeth}

                ></ServiceCard>
            </div>
        </>

    );
};

export default Service;
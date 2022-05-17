import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    })
    return (
        <>
            <div>
                <h1 className='text-4xl font-semibold  text-center lg:py-5'>Available Appointment On  </h1>
                <p className='text-2xl text-center lg:py-5'>
                    {format(date, 'PP')}</p>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }

            </div>
        </>
    );
};

export default AvailableAppointments;
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    })
    return (
        <>
            <section className='px-20'>
                <div>
                    <h1 className='text-2xl lg:text-3xl font-semibold  text-center lg:py-5 mt-10'>Available Appointment On  </h1>
                    <p className='text-2xl text-center mt-5 lg:mt-0 mb-10'>
                        {format(date, 'PP')}</p>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                            setTreatment={setTreatment}
                        ></Service>)
                    }

                </div>
                {treatment && <BookingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}></BookingModal>}
            </section>
        </>
    );
};

export default AvailableAppointments;
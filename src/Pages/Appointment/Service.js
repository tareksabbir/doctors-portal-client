import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots, doctor, degree, hospital } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className='card-title text-center mx-auto mt-6'>{doctor}</h2>
                <p className="text-center font-semibold">{name}</p>
                <p className='text-center'><small>( {degree} )</small></p>
                <p className='text-center font-bold'><small> Location: {hospital} </small></p>


                <p className='text-center '>
                    {
                        slots.length > 0 ? <span className='mx-auto text-center'>{slots[0]}</span> : <span className='mx-auto text-center text-primary'>Try  another day todays slots are full!</span>
                    }
                </p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} available</p>
                <div className="card-actions justify-end mt-5 items-center">
                    <label for="booking-modal" onClick={() => setTreatment(service)} disabled={slots.length === 0} className="btn btn-primary  items-center mx-auto text-white">Book</label>
                </div>

            </div>
        </div>

    );
};

export default Service;
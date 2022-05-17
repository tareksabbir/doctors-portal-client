import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl px-20">
            <div class="card-body">
                <h2 class="card-title mx-auto mt-6">{name}</h2>
                <p className='text-center '>
                    {
                        slots.length > 0 ? <span className='mx-auto text-center'>{slots[0]}</span> : <span className='mx-auto text-center text-primary'>Try next day todays slots are full</span>
                    }
                </p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} available</p>
                <div class="card-actions justify-end mt-5">
                    <button class="btn btn-primary mx-auto">Book Now</button>
                </div>

            </div>
        </div>

    );
};

export default Service;
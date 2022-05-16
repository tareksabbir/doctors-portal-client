import React from 'react';

const ServiceCard = ({ img, cardTitle, doctor }) => {
    return (
        <div className="p-4 ">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg shadow-xl">
                <img src={img} className='h-20 mx-auto' alt="" />
                <h2 className="title-font font-medium text-3xl text-gray-900 text-center mt-5">{cardTitle}</h2>
                <p className='text-center mt-2 px-3 text-lg font-semibold'>
                    You can book doctors appointment online and offline
                </p>
                <p className="leading-relaxed text-center mt-5">24/7 Hours</p>
            </div>
        </div>
    );
};

export default ServiceCard;
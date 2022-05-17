import React from 'react';

const InfoCard = ({ img, cardTitle, bg }) => {
    return (
        <>
            <div className={`card lg:card-side shadow-xl text-white lg:px-8 py-2 mb-10 ${bg}`}>
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="text-lg font-bold">{cardTitle}</h2>
                    <p className='text-sm'>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </>
    );
};

export default InfoCard;
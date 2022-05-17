import React from 'react';
import doctor from '../../assets/images/Contraception methods-rafiki.png'

const MakeAppointment = () => {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-2  lg:mt-52 px-24 bg-gray-50'>

            <div className='item-center'>
                <img className='lg:mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='lg:mt-16'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl font-bold mt-2'>Make an Appointment Today</h2>
                <p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi deleniti excepturi corporis repellendus, asperiores, quo fuga error, perferendis quia totam adipisci atque. Fugit corrupti consequuntur similique dolorum suscipit inventore, culpa molestias fuga reiciendis nesciunt, atque magnam harum consectetur, enim deserunt provident nemo eligendi voluptatum at beatae optio? Facere, est eveniet?</p>
                <a href="/" className="inline-block bg-primary hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 mt-5">Contact Us</a>

            </div>
        </section>
    );
};

export default MakeAppointment;
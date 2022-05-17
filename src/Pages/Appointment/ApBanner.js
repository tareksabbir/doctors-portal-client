import React from 'react';
import booking from '../../assets/images/Date picker.gif'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const ApBanner = ({ date, setDate }) => {

    return (
        <section class="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16 px-10 lg:px-24 lg:py-10">

            <div class="xl:w-5/12 flex flex-col justify-center items-center lg:items-start sm:text-center lg:text-left lg:py-12 xl:py-24">
                <h1 class="text-black-800 text-4xl sm:text-5xl md:text-5xl font-bold mb-8 md:mb-12 mt-14 lg:mt-0">Pick Your Date For Doctors Appointment</h1>

                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <p className='text-2xl font-semibold'>You have selected: {format(date, 'PP')}</p>
                </div>

            </div>

            <div className="xl:w-5/12 lg:h-auto h-full">
                <img src={booking} loading="lazy" alt="" className="w-full h-full object-cover object-center" />
            </div>

        </section>
    );
};

export default ApBanner;
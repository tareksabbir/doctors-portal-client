import React from 'react';
import applo from '../../assets/hospitalLogo/apollo-hospitals-logo-D404E82528-seeklogo.com.png'
import square from '../../assets/hospitalLogo/squar.png'
import united from '../../assets/hospitalLogo/unt.png'
import lbd from '../../assets/hospitalLogo/logo-img.png'
import ibns from '../../assets/hospitalLogo/IBN-SINA-LOGO-removebg-preview.png'
import ehd from '../../assets/hospitalLogo/logo_EHD.png'

const Hospitals = () => {
    return (
        <div className='lg:px-20 mt-32'>
            <div class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <div class="flex flex-col lg:flex-row lg:justify-between items-center mb-4 md:mb-8">
                        <h2 class="text-primary text-2xl lg:text-3xl font-bold text-center mb-2 lg:mb-0">Trusted by the best</h2>

                        <p class="max-w-md text-gray-400 text-center lg:text-right">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-3 rounded-lg gap-4 lg:gap-6">

                        <div class="h-16 sm:h-32 flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-4">
                            <img src={united} className='h-20 grayscale' alt="" />
                        </div>

                        <div class="h-16 sm:h-32 flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-4">
                            <img src={square} className='h-8 grayscale' alt="" />
                        </div>

                        <div class="h-16 sm:h-32 flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-4">
                            <img src={applo} className='h-20 grayscale' alt="" />
                        </div>

                        <div class="h-16 sm:h-32 flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-4">
                            <img src={ibns} className='h-20 grayscale' alt="" />
                        </div>

                        <div class="h-16 sm:h-32 flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-4">
                            <img src={lbd} className='h-6 grayscale' alt="" />
                        </div>

                        <div class="h-16 sm:h-32 flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-4">
                            <img src={ehd} className='h-20 grayscale' alt="" />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hospitals;
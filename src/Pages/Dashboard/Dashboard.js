import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-slate-50">
                    <h2 className='flex justify-between lg:items-center lg:text-center font-bold lg:text-2xl py-5 px-10 text-white bg-gray-800'>Welcome To Your Dashboard
                        <label for="my-drawer-2" className="text-sm drawer-button flex justify-center lg:hidden bg-slate-50 text-black font-normal px-2 py-1 rounded-xl">Menu</label></h2>
                    <Outlet></Outlet>



                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 text-base-content bg-gray-600">


                        <li><Link to='/dashboard' className='text-lg text-slate-100 hover:bg-gray-400  font-semibold lg:mt-14'>My Appointments</Link></li>
                        <li><Link to='/dashboard/reviews' className='text-lg text-slate-100 hover:bg-gray-400 font-semibold'>My Reviews</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
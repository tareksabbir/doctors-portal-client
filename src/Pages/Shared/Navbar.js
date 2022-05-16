import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/icons/icons8-microbeam-radiation-therapy-48.png"

const Navbar = ({ children }) => {
    return (
        <>
            <div className="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">

                    <div className="w-full navbar bg-base-100 px-5 lg:px-10 lg:mt-3 mt-2">
                        <img src={logo} className="h-10 w-10" alt="" />
                        <div className="flex-1 mx-2 text-xl lg:text-3xl font-bold">Doctors Hub</div>
                        <div className="flex-none lg:hidden">
                            <label for="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>

                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal gap-x-2">

                                <li><NavLink to="/" className=' rounded-lg'>Home</NavLink></li>
                                <li><NavLink to="/appointment" className=' rounded-lg'>Appointment</NavLink></li>
                                <li><NavLink to="/about" className=' rounded-lg'>About</NavLink></li>
                                <li><NavLink to="/review" className=' rounded-lg'>Reviews</NavLink></li>
                                <li><NavLink to="/contact" className=' rounded-lg'>Contact Us</NavLink></li>
                                <li><NavLink to="/login" className=' rounded-lg'>Login</NavLink></li>

                                <li className="dropdown dropdown-end dropdown-hover">
                                    <label tabindex="0" className="btn btn-primary btn-outline m-1 rounded-lg">Book Now</label>
                                    <ul tabindex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><Link to='/service'>Service</Link></li>
                                        <li><Link to='/make'>Make Appointment</Link></li>
                                    </ul>
                                </li>


                            </ul>
                        </div>
                    </div>
                    {children}
                </div>

                <div className="drawer-side">
                    <label for="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">

                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/appointment">Appointment</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/review">Reviews</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>

                    </ul>

                </div>
            </div>


        </>


    );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/icons/icons8-microbeam-radiation-therapy-48.png"
const Navbar = () => {
    return (
        <div class="navbar bg-base-100 lg:px-10 py-6 px-2">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/appointment">Appointment</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/review">Reviews</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
                <img src={logo} alt="" className="h-12 w-12"></img>
                <Link to="/" class=" lg:text-2xl font-bold lg:pl-1"> Doctors Hub</Link>
            </div>
            <div class="hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li className='lg:ml-28'><Link to="/">Home</Link></li>
                    <li><Link to="/appointment">Appointment</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/review">Reviews</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li ><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </div>

    );
};

export default Navbar;
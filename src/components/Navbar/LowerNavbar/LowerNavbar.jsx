import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

export default function LowerNavbar() {
    const navLinks = [
        {
            title: 'Home',
            pathLink: '/'
        },
        {
            title: 'Services',
            pathLink: '/services'
        },
        {
            title: 'Career',
            pathLink: '/career'
        },
        {
            title: 'Tracking',
            pathLink: '/tracking'
        },
        {
            title: 'About',
            pathLink: '/about'
        },
        {
            title: 'Contact Us',
            pathLink: '/contact'
        }
    ];

    return (
        <>
            <div style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
            }} className="md:w-[26rem] md:h-[6.9rem] w-0 h-0 bg-orange inset-0 absolute top-14 left-0 flex justify-center items-start text-white font-semibold font-kumbh text-4xl">
                LOGISTIC
            </div>
            <nav className="flex flex-col md:flex-row w-full items-center justify-between bg-white text-black px-3 py-2 md:py-9 font-kumbh md:pl-[26rem]">
                <div className=" md:pl-3 flex flex-col md:flex-row items-center justify-between w-full md:w-auto space-y-4 md:space-y-0 md:space-x-5">
                    {navLinks.map((navLink, index) => (
                        <NavLink
                            key={index}
                            to={navLink.pathLink}
                            className={({ isActive }) =>
                                `text-lg font-bold ${isActive ? 'text-orange' : 'text-black'} hover:text-orange transition-colors duration-300`
                            }
                        >
                            {navLink.title.toUpperCase()}
                        </NavLink>
                    ))}
                </div>
                <div className='flex space-x-4 mt-2 -ml-[26rem]'>
                    <FaSearch className='text-2xl cursor-pointer' />
                </div>
            </nav>
        </>
    );
}
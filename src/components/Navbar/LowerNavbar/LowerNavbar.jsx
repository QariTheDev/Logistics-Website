import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function LowerNavbar() {
    const [searchVisible, setSearchVisible] = useState(false);

    const handleSearchClick = () => {
        setSearchVisible(!searchVisible);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setSearchVisible(false);
    };

    const navLinks = [
        { title: 'Home', pathLink: '/' },
        { title: 'Services', pathLink: '/services' },
        { title: 'Career', pathLink: '/career' },
        { title: 'Tracking', pathLink: '/tracking' },
        { title: 'About', pathLink: '/about' },
        { title: 'Contact Us', pathLink: '/contact' }
    ];

    return (
        <>
            <Link to='/'>
                <div
                    style={{
                        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                        height: searchVisible ? '7.5rem' : '6.9rem'
                    }}
                    className="md:w-[26rem] w-0 h-0 bg-orange inset-0 absolute top-14 left-0 flex justify-center items-start text-white font-semibold font-kumbh text-4xl transition-all duration-300"
                >
                    LOGISTIC
                </div>
            </Link>
            <nav className="flex flex-col md:flex-row w-full items-center justify-between bg-white text-black px-3 py-2 md:py-9 font-kumbh md:pl-[26rem]">
                <div className="md:pl-3 flex flex-col md:flex-row items-center justify-between w-full md:w-auto space-y-4 md:space-y-0 md:space-x-5">
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
                <div className='flex items-center space-x-4'>
                    <FaSearch
                        onClick={handleSearchClick}
                        className='text-2xl cursor-pointer'
                    />
                    {searchVisible && (
                        <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="border border-gray-400 text-gray-700 bg-transparent rounded-md px-4 py-2 md:py-2.5 md:px-6 w-48 h-10 md:w-64"
                            />
                        </form>
                    )}
                </div>
            </nav>
        </>
    );
}

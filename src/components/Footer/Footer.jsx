import React from 'react';
import { SiGmail } from "react-icons/si";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className="bg-grey text-white py-12 px-4 md:px-20">
                <div className="flex flex-col">
                    <div className='flex flex-col md:flex-row items-center justify-between pb-10 border-b-2 border-white'>
                        <h1 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left mb-4 md:mb-0">
                            Subscribe Our Newsletter Get Update
                        </h1>
                        <div className="flex flex-col md:flex-row items-center">
                            <input 
                                type="text" 
                                placeholder="Enter Your Email" 
                                className="bg-slate-700 border-2 border-black text-white text-base md:text-xl font-semibold px-4 py-2 mb-4 md:mb-0 md:mr-4 w-full md:w-auto" 
                            />
                            <button className="bg-orange text-white text-base md:text-2xl px-6 py-2 md:px-7 md:py-4 font-semibold hover:bg-white hover:text-orange transition-all duration-300 ease-in-out">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-[35%_repeat(2,_1fr)] gap-8 md:gap-24 py-12 md:py-24'>
                        <div className='flex flex-col items-start space-y-10'>
                            <div className='flex flex-col items-start space-y-5'>
                                <h1 className="text-4xl md:text-5xl font-bold">
                                    Logistic
                                </h1>
                                <p className='text-base md:text-xl'>
                                    Pellentesque non dolor vitae lacus fringilla consequat vel quis enim. Cras venenatis mollis neque in fringilla. In vitae.
                                </p>
                            </div>
                            <div className='flex space-x-4 md:space-x-5'>
                                <div className='flex items-center justify-center bg-black rounded-full w-12 h-12 md:w-16 md:h-16'>
                                    <SiGmail className='text-white text-xl md:text-3xl' />
                                </div>
                                <div className='flex items-center justify-center bg-black rounded-full w-12 h-12 md:w-16 md:h-16'>
                                    <FaFacebookF className='text-white text-xl md:text-3xl' />
                                </div>
                                <div className='flex items-center justify-center bg-black rounded-full w-12 h-12 md:w-16 md:h-16'>
                                    <FaInstagram className='text-white text-xl md:text-3xl' />
                                </div>
                                <div className='flex items-center justify-center bg-black rounded-full w-12 h-12 md:w-16 md:h-16'>
                                    <FaLinkedinIn className='text-white text-xl md:text-3xl' />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col items-start space-y-4'>
                            <h1 className="text-2xl md:text-3xl font-bold relative">
                                Office Address
                                <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-orange transform translate-y-1/2"></span>
                            </h1>
                            <p className="text-base md:text-lg">
                                3891 Ranchview Dr. <br />
                                Richardson, California 62639
                            </p>
                            <p className="text-base md:text-lg">
                                Mon-Fri: 09:00 am - 05:00 pm
                            </p>
                            <p className="text-base md:text-lg underline">
                                +99 (456) 568 65
                            </p>
                            <p className="text-base md:text-lg text-blue-500 underline">
                                <a href="mailto:info.support@gmail.com">info.support@gmail.com</a>
                            </p>
                        </div>

                        <div className='flex flex-col items-start space-y-4'>
                            <h1 className="text-2xl md:text-3xl font-bold relative">
                                Explore
                                <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-orange transform translate-y-1/2"></span>
                            </h1>
                            <p className="text-base md:text-lg">About Us</p>
                            <p className="text-base md:text-lg">Services</p>
                            <p className="text-base md:text-lg">Portfolio</p>
                            <p className="text-base md:text-lg">Contact Us</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

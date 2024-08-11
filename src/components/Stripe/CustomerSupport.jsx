import React from 'react';
import plane from '../../assets/img/Rectangle 30.jpg';
import { GiWorld } from "react-icons/gi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiPackageFill } from "react-icons/pi";

export default function CustomerSupport() {
    return (
        <>
            <section 
                style={{
                    backgroundImage: `url(${plane})`,
                }} 
                className="relative flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center h-auto min-h-screen py-16 px-4 md:px-16 space-y-7 mb-48"
            >
                <div 
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }} 
                    className="absolute inset-0"
                ></div>

                <h1 className="text-center text-white text-3xl md:text-5xl font-bold z-10">
                    24/7 customer support any time <br /> of the day or night
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-7 z-10">
                    <button className='bg-darkBlue text-white text-lg md:text-2xl px-6 md:px-7 py-3 md:py-4 font-semibold hover:bg-white hover:text-darkBlue transition-all duration-300 ease-in-out'>
                        Free Quote
                    </button>
                    <button className="bg-orange text-white text-lg md:text-2xl px-6 md:px-7 py-3 md:py-4 font-semibold hover:bg-white hover:text-orange transition-all duration-300 ease-in-out">
                        Contact Us
                    </button>
                </div>

                <div 
                    className="absolute bottom-0 w-full flex flex-col md:flex-row justify-center bg-blue-800 py-6 px-4 md:px-14 space-y-6 md:space-y-0 md:space-x-6 md:py-8"
                >
                    <div className="flex flex-col items-center justify-center border-b-2 border-white py-6 px-4 md:px-6 md:border-r-2 md:border-b-0 border-dashed">
                        <GiWorld className="text-white text-3xl md:text-5xl" />
                        <h1 className="text-white text-2xl md:text-3xl font-bold">15K</h1>
                        <p className="text-white text-center text-sm md:text-base">Worldwide Client</p>
                    </div>
                    <div className="flex flex-col items-center justify-center border-b-2 border-white py-6 px-4 md:px-6 md:border-r-2 md:border-b-0 border-dashed">
                        <FaMapLocationDot className="text-white text-3xl md:text-5xl" />
                        <h1 className="text-white text-2xl md:text-3xl font-bold">189+</h1>
                        <p className="text-white text-center text-sm md:text-base">Worldwide Branches</p>
                    </div>
                    <div className="flex flex-col items-center justify-center border-b-2 border-white py-6 px-4 md:px-6 md:border-r-2 md:border-b-0 border-dashed">
                        <FaPeopleGroup className="text-white text-3xl md:text-5xl" />
                        <h1 className="text-white text-2xl md:text-3xl font-bold">950+</h1>
                        <p className="text-white text-center text-sm md:text-base">Expert Company Staff</p>
                    </div>
                    <div className="flex flex-col items-center justify-center py-6 px-4 md:px-6">
                        <PiPackageFill className="text-white text-3xl md:text-5xl" />
                        <h1 className="text-white text-2xl md:text-3xl font-bold">15K</h1>
                        <p className="text-white text-center text-sm md:text-base">Successful Deliveries</p>
                    </div>
                </div>
            </section>
        </>
    );
}

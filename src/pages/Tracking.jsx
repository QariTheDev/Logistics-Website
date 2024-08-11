import React from 'react';
import bg from '../assets/img/Rectangle 85.jpg';
import Hero from '../components/Hero/Hero';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GrLinkPrevious } from "react-icons/gr";

export default function Tracking() {
    return (
        <>
            <Hero
                img={bg}
                h1="TRACKING"
                p1="LOGISTIC"
                h2="TRACKING"
                p2={`Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus, Quisque velit nisi pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero`}
            />

            <section className="flex flex-col items-start px-4 md:px-32 py-8 md:py-16 space-y-6 md:space-y-8">
                <div className="flex flex-col items-start space-y-2">
                    <h1 className="text-3xl md:text-4xl font-bold">Logistic Tracking</h1>
                    <p className="text-orange text-lg md:text-xl">Official Website</p>
                </div>

                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-5 md:space-y-0">
                    <div className="flex items-center relative w-full md:w-[50vw]">
                        <input
                            type="text"
                            placeholder="Tracking Number"
                            className="px-4 py-3 w-full border border-gray-400 text-gray-700 bg-transparent rounded"
                        />
                        <FaMagnifyingGlass className="absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl md:text-4xl bg-gray-300 outline outline-1 p-2 rounded-md text-gray-800 cursor-pointer" />
                    </div>
                    <button className="bg-orange text-white rounded-lg text-base md:text-lg hover:outline hover:outline-1 px-4 py-2 md:px-6 md:py-3 font-semibold hover:bg-white hover:text-orange transition-all duration-300 ease-in-out">
                        Track A Parcel
                    </button>
                </div>

                <div className="flex flex-col items-start space-y-8 pt-12 md:pt-20">
                    <div className="flex flex-col items-start space-y-2">
                        <h1 className="text-2xl md:text-3xl font-bold text-grey">Track your parcel from Logistics in one click</h1>
                        <p className="text-xl md:text-2xl">Enter a Logistics tracking number to track your package</p>
                        <div className="flex items-center space-x-2">
                            <GrLinkPrevious className="text-xl md:text-2xl bg-black text-white p-1 rounded" />
                            <p className="text-lg md:text-xl">Back to courier list</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-start space-y-2">
                        <h1 className="text-2xl md:text-3xl font-bold text-grey">How to track my Logistics package?</h1>
                        <p className="text-lg md:text-2xl">Logistics package tracking is easy with Ordertracker. Paste your tracking number in the above field or go to the track my parcel section. We provide you with a powerful parcel tracking system for any post office. Ordertracker accepts any international tracking number; it is a universal tracking website to track a parcel globally with accurate information about your shipment.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

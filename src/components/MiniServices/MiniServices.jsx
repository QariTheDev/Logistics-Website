import React from 'react';
import icon from '../../assets/img/vectors icons/image 2.png';
import imgLinks from '../../utils/imgLinks';
import { FaArrowRight } from "react-icons/fa";

export default function MiniServices() {

    return (
        <>
            <section className='flex flex-col items-center justify-center bg-slate-200 px-16 pt-20 pb-32 space-y-4'>
                <h1 className='text-orange flex items-center justify-center text-3xl font-bold'>
                    <img src={icon} alt="icon" className='h-6 w-6 mr-3' />
                    OUR SERVICES
                </h1>
                <h1 className='text-7xl font-bold text-center'>Specialist Logistics Services</h1>

                <div className="grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-32">
                    {imgLinks.map((img, index) => (
                        <div key={index} className='relative pb-32'>
                            <img src={img.src} alt={`service-${index}`} className="w-full h-auto object-cover" />
                            <div className='absolute md:top-56 md:left-10 md:right-10 md:space-y-5 bg-white flex flex-col items-start justify-start p-6'>
                                <div className="absolute top-0 -right-4 transform -translate-x-1/2 -translate-y-1/2 bg-orange rounded-full flex flex-col items-center justify-center h-20 w-20 drop-shadow-2xl overflow-hidden">
                                    {img.icon}
                                </div>
                                <h1 className="text-4xl font-bold">{img.title}</h1>
                                <p className="text-base pb-10 border-b-2 border-b-black">
                                    {img.description}
                                </p>
                                <div className="flex items-center justify-center">
                                    <button className="bg-transparent text-black underline">Read More</button>
                                    <FaArrowRight className='text-black text-base ml-2' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
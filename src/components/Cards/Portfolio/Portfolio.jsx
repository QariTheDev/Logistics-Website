import React from 'react';
import icon from '../../../assets/img/vectors icons/image 2.png';
import image11 from '../../../assets/img/image 11.jpg';
import image13 from '../../../assets/img/image 13.jpg';
import image25 from '../../../assets/img/image 25.jpg';
import { FiArrowUpRight } from "react-icons/fi";

export default function Portfolio() {
    const images = [
        {
            src: image13,
            title: 'Packaging',
            description: 'Effective Packaging'
        },
        {
            src: image11,
            title: 'Design',
            description: 'Innovative Design'
        },
        {
            src: image25,
            title: 'Development',
            description: 'Advanced Development'
        }
    ];

    return (
        <>
            <section className="flex flex-col items-center justify-center bg-slate-200 px-4 sm:px-8 md:px-16 pt-10 md:pt-20 pb-16 md:pb-32 space-y-4">
                <h1 className='text-orange flex items-center justify-center text-2xl md:text-3xl font-bold'>
                    <img src={icon} alt="icon" className='h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3' />
                    OUR PORTFOLIO
                </h1>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center'>Our Recent Work Showcase</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                    {images.map((img, index) => (
                        <div key={index} className="relative">
                            <img src={img.src} alt={`portfolio-${index}`} className="object-cover w-full h-60 md:h-80 lg:h-96 rounded-lg" />
                            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-4">
                                <div className="bg-white flex items-center justify-between text-black py-2 px-4 md:py-4 md:px-8 rounded-lg shadow-lg w-full max-w-sm mx-4">
                                    <div className='flex flex-col items-start justify-start'>
                                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-orange">{img.title}</h1>
                                        <p className='text-sm md:text-lg lg:text-xl'>{img.description}</p>
                                    </div>
                                    <FiArrowUpRight className='text-black text-3xl md:text-4xl ml-2 bg-orange rounded-full p-2' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

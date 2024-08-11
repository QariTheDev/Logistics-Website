import React from 'react';
import icon from '../../assets/img/vectors icons/image 2.png';

export default function Hero({ img, h1, p1, h2, p2 }) {
    return (
        <>
            <section style={{ backgroundImage: `url(${img})` }} className="relative text-white font-inter px-4 sm:px-8 md:px-32 space-y-3 flex flex-col items-start justify-center h-screen bg-no-repeat bg-center bg-cover">
                <div style={{ background: 'rgba(0, 0, 0, 0.15)' }} className="absolute inset-0"></div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center flex items-center justify-center z-10">
                    <img src={icon} alt="icon" className='h-5 sm:h-6 w-5 sm:w-6 mr-2 sm:mr-3' />
                    {h1}
                </h1>
                <p className="text-md sm:text-lg md:text-5xl font-bold z-10">{p1}</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold z-10">{h2}</h1>
                <p className="text-md sm:text-lg md:text-2xl z-10">{p2}</p>
            </section>
        </>
    );
}

import React from 'react';
import ship from '../../assets/img/Rectangle 53.jpg';

export default function Secure() {
    return (
        <section
            style={{
                backgroundImage: `url(${ship})`,
            }}
            className="relative flex items-center justify-center bg-no-repeat bg-cover bg-center h-[60vh] md:h-[75vh] lg:h-[85vh] w-full py-16 md:py-24 lg:py-32 space-y-6 md:space-y-8 lg:space-y-10 mb-24 md:mb-32 lg:mb-48"
        >
            <div
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}
                className="absolute inset-0"
            ></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-6 md:space-y-0 md:space-x-10">
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">100% Secure and Safe</h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white mt-4 md:mt-2">
                        Esteem spirit temper too say adieus who direct esteem. It look estee
                        luckily or picture placing drawing.
                    </p>
                </div>

                <button className="bg-orange text-white rounded-full text-lg md:text-xl lg:text-2xl px-5 md:px-7 lg:px-10 py-3 md:py-4 lg:py-5 font-semibold hover:bg-white hover:text-orange transition-all duration-300 ease-in-out mt-6 md:mt-0">
                    +10 672 457 356
                </button>
            </div>
        </section>
    );
}

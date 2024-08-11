import React from 'react';
import rect71 from '../assets/img/Rectangle 73.jpg';
import Contact from '../components/Forms/Contact/Contact';

export default function ContactForm() {
    return (<>
        <section
            style={{ backgroundImage: `url(${rect71})` }}
            className='relative flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center text-white px-6 md:px-20 py-32 space-y-16'
        >
            <div
                className="absolute inset-0 bg-black opacity-30 z-0"
            ></div>
            <div className="relative z-10 flex flex-col items-center text-center">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg md:text-xl lg:text-2xl">See Our Daily News & Updates</p>
            </div> 
        </section>

        <Contact />
        </>
    );
}

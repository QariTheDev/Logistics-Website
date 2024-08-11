import React from 'react'
import Hero from '../components/Hero/Hero'
import bg from '../assets/img/containers-8676518_1280 1.jpg'
import icon from '../assets/img/vectors icons/image 2.png'
import transportation from '../assets/img/vectors icons/image 50.png'
import liveMonitoring from '../assets/img/vectors icons/image 51.png'
import worldwideService from '../assets/img/vectors icons/image 52.png'
import Secure from '../components/Stripe/Secure'
import serviceImgLinks from '../utils/ServicesImgLinks'
import rect56 from '../assets/img/Rectangle 56.jpg'
import { FaCheck } from "react-icons/fa";
import Numbers from '../components/Stripe/Numbers'
import Estimate from '../components/Forms/Estimate/Estimate'

export default function Services() {
    return (
        <>
            <Hero
                img={bg}
                h1="WE RE PROVIDE BEST SERVICES"
                p1="WORLD WIDE" h2="BEST SHIPPING"
                p2={`Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus, Quisque velit nisi pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero`}
            />

            <section className="flex flex-col items-center justify-center space-y-12 py-10 px-4 sm:px-8 md:px-16">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <img src={icon} alt="icon" className='h-8 w-8' />
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange">OUR SERVICES</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className='flex flex-col items-start border-r-2 border-black border-dashed space-y-2 pr-4'>
                        <img src={transportation} alt="transportation" className='w-24 h-24 object-contain' />
                        <h1 className="text-2xl sm:text-3xl font-semibold">Transportation</h1>
                        <p className="text-base sm:text-lg">Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing drawing.</p>
                    </div>
                    <div className='flex flex-col items-start border-r-2 border-black border-dashed space-y-2 pr-4'>
                        <img src={liveMonitoring} alt="liveMonitoring" className='w-24 h-24 object-contain' />
                        <h1 className="text-2xl sm:text-3xl font-semibold">Live Monitoring</h1>
                        <p className="text-base sm:text-lg">Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing drawing.</p>
                    </div>
                    <div className='flex flex-col items-start'>
                        <img src={worldwideService} alt="worldwideService" className='w-24 h-24 object-contain' />
                        <h1 className="text-2xl sm:text-3xl font-semibold">Worldwide Service</h1>
                        <p className="text-base sm:text-lg">Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing drawing.</p>
                    </div>
                </div>
            </section>

            <section className="bg-slate-200 flex flex-col items-center justify-center space-y-11 py-10 px-16">
                <h1 className="text-5xl font-bold">Services We Offer</h1>
                <div className="grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-10">
                    {serviceImgLinks.map((img, index) => (
                        <div key={index} className='relative pb-32'>
                            <img src={img.src} alt={`service-${index}`} className="w-full h-auto object-cover" />
                            <div className='absolute md:top-56 md:left-10 md:right-10 md:space-y-5 bg-white flex flex-col items-center justify-start p-6'>
                                <h1 className="text-4xl text-center font-bold">{img.title}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Secure />

            <section className="grid grid-cols-2 px-16 py-10">
                <div className="relative">
                    <div className="absolute inset-4 flex items-center justify-center">
                        <div className="w-[85%] h-[85%] bg-orange -translate-x-2 -translate-y-2" />
                    </div>

                    <img src={rect56} alt="box" className='w-[85%] h-[85%] object-contain relative z-10' />
                </div>


                <div className="flex flex-col items-start space-y-6 font-semibold px-4 sm:px-6 lg:px-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        Why Choose Us?
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <FaCheck className='text-white text-2xl sm:text-3xl md:text-3xl rounded-full p-1 bg-orange' />
                            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl">
                                Apartments frequently or motionless.
                            </h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaCheck className='text-white text-2xl sm:text-3xl md:text-3xl rounded-full p-1 bg-orange' />
                            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl">
                                Duis aute irure dolor in reprehenderit in voluptate.
                            </h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaCheck className='text-white text-2xl sm:text-3xl md:text-3xl rounded-full p-1 bg-orange' />
                            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl">
                                Voluptatem quia voluptas sit aspernatur.
                            </h1>
                        </div>
                    </div>

                    <button className="bg-white text-black hover:bg-orange hover:text-white outline-orange outline outline-4 border border-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold py-2 sm:py-3 px-6 sm:px-8 md:px-10 lg:px-12 transition-all duration-300 ease-in-out">
                        About Us
                    </button>
                </div>
            </section>

            <Numbers />

            <Estimate />
        </>
    )
}

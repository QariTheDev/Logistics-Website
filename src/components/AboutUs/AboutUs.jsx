import React from 'react';
import containerSet from '../../assets/img/image 4.jpg';
import icon from '../../assets/img/vectors icons/image 2.png';
import image5 from '../../assets/img/vectors icons/image 5.png';
import image6 from '../../assets/img/vectors icons/image 6.png';

export default function AboutUs() {
    return (
        <>
            <section className="relative px-4 sm:px-8 md:px-16 py-10 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                        <img src={containerSet} alt="containers" className="w-full h-auto object-cover" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange rounded-full flex flex-col items-center justify-center h-40 w-40 md:h-52 md:w-52 drop-shadow-2xl overflow-hidden">
                            <h1 className="text-3xl md:text-5xl font-bold text-white">25+</h1>
                            <p className="text-sm md:text-xl text-white text-center font-semibold">Years Working <br /> Experience</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-start justify-start px-4 sm:px-8 md:px-10 space-y-4 relative z-10'>
                        <h1 className="text-3xl md:text-4xl font-bold flex items-center justify-start text-orange">
                            <img src={icon} alt="icon" className='h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3' />
                            ABOUT US
                        </h1>
                        <h1 className="text-4xl md:text-5xl font-bold">Provide Transportation <br /> Services Since 1995</h1>
                        <p className="text-base md:text-xl font-semibold">Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                        <button className="bg-orange text-white hover:bg-white hover:text-orange border border-orange text-base md:text-2xl font-semibold py-2 md:py-3 px-6 md:px-12 transition-all duration-300 ease-in-out">
                            Read More
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-300 p-4 md:p-6 absolute md:relative -left-1/2 md:left-0 bottom-0 transform md:translate-x-0 translate-x-1/4">
                            <div className="flex items-center justify-center border-b-2 md:border-b-0 md:border-r-2 border-black pb-4 md:pb-0">
                                <img src={image5} alt="image5" className='h-12 md:h-16 w-auto mr-2 md:mr-3' />
                                <div className="flex flex-col items-center justify-center">
                                    <h1 className="text-2xl md:text-4xl font-bold text-black">Affordable Cost</h1>
                                    <p className="text-base md:text-xl">Mauris blandit aliquet, eget <br /> Tincidunt nibh pulvinar</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center pt-4 md:pt-0">
                                <img src={image6} alt="image6" className='h-12 md:h-16 w-auto mr-2 md:mr-3' />
                                <div className="flex flex-col items-center justify-center">
                                    <h1 className="text-2xl md:text-4xl font-bold text-black">Short Time Delivery</h1>
                                    <p className="text-base md:text-xl">tincidunt nibh pulvinar. Sed <br /> Porttitor lectus nibh.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

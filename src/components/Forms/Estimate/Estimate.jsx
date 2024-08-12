import React from 'react';
import rect11 from '../../../assets/img/image 11.jpg';

const productTypes = ['Air Freight', 'Cargo Freight', 'Road Freight', 'Bike Freight', 'Bicycle Freight', 'Truck Freight'];
const productSizes = ['Small', 'Medium', 'Large', 'Extra Large'];

export default function Estimate() {
    return (
        <section style={{ backgroundImage: `url(${rect11})` }} className='relative flex flex-col items-center bg-cover bg-no-repeat bg-center h-screen mb-14'>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className="absolute inset-0"></div>

            <div className="relative flex flex-col items-start space-y-6 py-10 px-6 sm:px-12 lg:px-28 text-white z-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center">Get Free Estimate</h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl">
                    Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-screen-lg">
                    <div className="flex items-start justify-start">
                        <button className="bg-orange text-white hover:bg-white hover:text-orange rounded-full text-lg sm:text-xl md:text-2xl py-2 sm:py-3 px-6 sm:px-12 transition-all duration-300 ease-in-out">
                            +10 672 457 356
                        </button>
                    </div>

                    <form className="flex flex-col items-center space-y-6 w-full max-w-screen-lg px-4">
                        <div className="flex flex-col space-y-6 w-full">
                            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
                                <input type="text" placeholder="Full Name" className="w-full sm:w-96 h-16 px-4 border-2 border-white text-white bg-transparent" />
                                <input type="email" placeholder="Your Email" className="w-full sm:w-96 h-16 px-4 border-2 border-white text-white bg-transparent" />
                            </div>
                            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
                                <select name="productType" id="productType" className="w-full sm:w-96 h-16 px-4 bg-slate-800 border-2 border-white text-white">
                                    {productTypes.map((type, index) => (
                                        <option key={index} value={type}>{type}</option>
                                    ))}
                                </select>
                                <select name="productSize" id="productSize" className="w-full sm:w-96 h-16 px-4 bg-slate-800 border-2 border-white text-white">
                                    {productSizes.map((size, index) => (
                                        <option key={index} value={size}>{size}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
                                <input type="text" placeholder="City Of Departure" className="w-full sm:w-96 h-16 px-4 border-2 border-white text-white bg-transparent" />
                                <input type="text" placeholder="Delivery City" className="w-full sm:w-96 h-16 px-4 border-2 border-white text-white bg-transparent" />
                            </div>
                            <input type="text" placeholder="Message" className="w-full h-16 px-4 border-2 border-white text-white bg-transparent" />

                            <button className="bg-transparent text-orange hover:bg-white hover:text-orange border border-orange text-lg sm:text-xl md:text-2xl py-3 px-6 sm:px-12 transition-all duration-300 ease-in-out">
                                Send Estimate
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
import React from 'react'
import boxes from '../../../assets/img/Rectangle 16.jpg'
import imgLinks from '../../../utils/imgLinks'
import icon from '../../../assets/img/vectors icons/image 2.png'

export default function Request() {
    return (
        <>
            <section className="bg-grey px-4 sm:px-8 md:px-20 py-10 md:py-16">
                <div className="block md:hidden">
                    <div className='flex flex-col items-start justify-start space-y-5 py-16'>
                        <div className="flex items-center justify-center">
                            <img src={icon} alt="icon" className='h-6 w-6 mr-3' />
                            <h1 className="text-4xl font-bold text-orange">REQUEST A QUOTE</h1>
                        </div>
                        <h1 className="text-white text-5xl font-bold">We Create Opportunity <br />
                            to Reach Potential</h1>

                        <form className="flex flex-col items-start justify-start space-y-4 bg-slate-800 p-4 rounded-md">
                            <div className="flex flex-col items-start justify-start space-y-4">
                                <input type="text" placeholder="Full Name" className="w-full h-14 px-4 border-2 border-white text-white bg-transparent" />
                                <input type="email" placeholder="Your Email" className="w-full h-14 px-4 border-2 border-white text-white bg-transparent" />
                                <input type="number" placeholder="Weight, kg" className="w-full h-14 px-4 border-2 border-white text-white bg-transparent" />
                                <input type="number" placeholder="Distance, km" className="w-full h-14 px-4 border-2 border-white text-white bg-transparent" />
                                <select name="freight" placeholder="Select Freight" id="freight" className="w-full h-14 px-4 bg-slate-800 border-2 border-white text-white bg-transparent">
                                    {
                                        imgLinks.map((img, index) => (
                                            <option key={index} value={img.title}>{img.title}</option>
                                        ))
                                    }
                                </select>
                                <button className="bg-orange text-white hover:bg-white hover:text-orange border border-orange text-2xl font-semibold py-3 px-12 transition-all duration-300 ease-in-out">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Desktop view */}
                <div className="hidden md:grid md:grid-cols-2 gap-8">
                    <div className='flex flex-col items-start justify-start space-y-5 py-16'>
                        <div className="flex items-center justify-center">
                            <img src={icon} alt="icon" className='h-6 w-6 mr-3' />
                            <h1 className="text-4xl font-bold text-orange">REQUEST A QUOTE</h1>
                        </div>
                        <h1 className="text-white text-5xl font-bold">We Create Opportunity <br />
                            to Reach Potential</h1>

                        <form className="flex flex-col items-start justify-start space-y-4 bg-slate-800 z-50">
                            <div className="flex items-center justify-center text-xl font-semibold space-x-4">
                                <h1 className='bg-orange text-white px-12 py-4'>Request A Quote</h1>
                                <h1 className='bg-white text-black px-12 py-4 border-r-2 border-r-black'>Real Time Tracking</h1>
                                <h1 className='bg-white text-black px-12 py-4'>24/7 Hours Support</h1>
                            </div>
                            <div className="flex flex-col items-start justify-start p-4 space-y-8">
                                <div className="flex flex-col md:flex-row items-start justify-start space-y-4 md:space-y-0 md:space-x-4 text-xl font-semibold">
                                    <input type="text" placeholder="Full Name" className="w-96 h-14 px-4 border-2 border-white text-white bg-transparent" />
                                    <input type="email" placeholder="Your Email" className="w-96 h-14 px-4 border-2 border-white text-white bg-transparent" />
                                </div>
                                <div className="flex flex-col md:flex-row items-start justify-start space-y-4 md:space-y-0 md:space-x-4 text-xl font-semibold">
                                    <input type="number" placeholder="Weight, kg" className="w-96 h-14 px-4 border-2 border-white text-white bg-transparent" />
                                    <input type="number" placeholder="Distance, km" className="w-96 h-14 px-4 border-2 border-white text-white bg-transparent" />
                                </div>
                                <select name="freight" placeholder="Select Freight" id="freight" className="w-96 h-14 px-4 bg-slate-800 border-2 border-white text-white bg-transparent">
                                    {
                                        imgLinks.map((img, index) => (
                                            <option key={index} value={img.title}>{img.title}</option>
                                        ))
                                    }
                                </select>
                                <button className="bg-orange text-white hover:bg-white hover:text-orange border border-orange text-2xl font-semibold py-3 px-12 transition-all duration-300 ease-in-out">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <img src={boxes} alt="box" className="w-full h-auto rounded-md" />
                    </div>
                </div>
            </section>
        </>
    )
}

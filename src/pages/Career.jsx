import React, { useState } from 'react';
import imgg from '../assets/img/Rectangle 65.jpg';
import Hero from '../components/Hero/Hero';
import icon from '../assets/img/vectors icons/image 2.png';
import e16 from '../assets/img/Ellipse 16.png';
import e17 from '../assets/img/Ellipse 17.png';
import e18 from '../assets/img/Ellipse 18.png';
import img4 from '../assets/img/img_4.jpg 1.jpg';
import img5 from '../assets/img/img_5.jpg 1.jpg';
import img1 from '../assets/img/img_1.jpg 1.jpg';
import img2 from '../assets/img/img_2.jpg 1.jpg';
import jobs from '../utils/jobs';

export default function Career() {
    const [visibleJobs, setVisibleJobs] = useState(5);

    const handleShowMore = () => {
        setVisibleJobs(prev => prev + 5);
    };

    return (
        <>
            <Hero
                img={imgg}
                h1="CAREER"
                p1="WE MAKE"
                h2="SHIPPING"
                p2={`Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus, Quisque velit nisi pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero`}
            />

            <section className='flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 space-y-8'>
                <h1 className="relative text-2xl md:text-3xl lg:text-4xl text-orange font-bold text-center flex items-center justify-center">
                    <img src={icon} alt="icon" className='h-6 w-6 mr-3' />
                    OUR TEAM
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[e16, e17, e18].map((img, index) => (
                        <div key={index} className="flex flex-col items-center space-y-4">
                            <img src={img} alt="team" className="w-40 h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 object-cover rounded-full" />
                            <h1 className="text-lg md:text-xl lg:text-2xl font-bold">Christine Rooster</h1>
                            <p className="text-base md:text-lg lg:text-xl">CO-FOUNDER, PRESIDENT</p>
                            <p className='text-base md:text-lg lg:text-xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus earum neque sequi? Voluptatem dolorem, repellendus optio.</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className='flex flex-col items-center justify-center py-12 md:py-16 lg:py-20 space-y-8 md:space-y-12'>
                <h1 className="relative text-2xl md:text-3xl lg:text-4xl text-orange font-bold text-center flex items-center justify-center">
                    <img src={icon} alt="icon" className='h-6 w-6 mr-3' />
                    INDUSTRIES
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
                    {[img4, img5, img1, img2].map((img, index) => (
                        <div key={index} className="relative w-full h-60 md:h-80 lg:h-96">
                            <img src={img} alt="industry" className="w-full h-full object-cover" />
                            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} className="absolute inset-0 flex items-end justify-center">
                                <h1 className="text-white text-center pb-6 md:pb-12 lg:pb-20 text-2xl md:text-3xl lg:text-4xl font-bold">
                                    {
                                        index === 0 ? 'Cargo Ship' :
                                            index === 1 ? 'Warehousing' :
                                                index === 2 ? 'Storage' :
                                                    'Air Transport'
                                    }
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className='flex flex-col items-center px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 space-y-8'>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black">Recent Job Openings</h1>
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                    <input
                        type="text"
                        placeholder="Search Jobs..."
                        className="px-4 py-2 w-full md:w-72 lg:w-80 border border-gray-400 text-gray-700 bg-transparent rounded"
                    />
                    <select
                        name="firstDropdown"
                        id="firstDropdown"
                        className="px-4 py-2 w-full md:w-64 lg:w-72 border border-gray-400 text-gray-700 bg-transparent rounded"
                    >
                        <option value="">Option 1</option>
                        <option value="">Option 2</option>
                        <option value="">Option 3</option>
                    </select>
                    <select
                        name="secondDropdown"
                        id="secondDropdown"
                        className="px-4 py-2 w-full md:w-64 lg:w-72 border border-gray-400 text-gray-700 bg-transparent rounded"
                    >
                        <option value="">Option A</option>
                        <option value="">Option B</option>
                        <option value="">Option C</option>
                    </select>
                </div>

                <div className="w-full overflow-x-auto p-4 md:p-8">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 md:px-6 md:py-4 text-left text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
                                <th className="px-4 py-2 md:px-6 md:py-4 text-left text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider">Place</th>
                                <th className="px-4 py-2 md:px-6 md:py-4 text-left text-sm md:text-base font-medium text-gray-500 uppercase tracking-wider">Location</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {jobs.slice(0, visibleJobs).map((job, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-base md:text-lg text-orange font-bold">{job.name}</td>
                                    <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-base md:text-lg text-gray-600">{job.place}</td>
                                    <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-base md:text-lg text-gray-600">{job.location}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="mt-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                        {visibleJobs < jobs.length && (
                            <button
                                onClick={handleShowMore}
                                className="bg-orange text-white text-base md:text-lg py-2 px-4 md:py-3 md:px-6 rounded hover:bg-blue-700 transition-all duration-300"
                            >
                                {"View All Jobs Opening".toUpperCase()}
                            </button>
                        )}
                        <button
                            className="bg-grey text-white text-base md:text-lg py-2 px-4 md:py-3 md:px-6 rounded hover:bg-blue-700 transition-all duration-300"
                        >
                            SUBMIT RESUME TO JOIN OUR TALENT WORK
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

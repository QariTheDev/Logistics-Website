import React from 'react';
import Hero from '../components/Hero/Hero';
import imgg from '../assets/img/Rectangle 69.jpg';
import icon from '../assets/img/vectors icons/image 2.png';
import { FaCheck } from 'react-icons/fa';
import img from '../assets/img/image.png';
import rect71 from '../assets/img/Rectangle 71.jpg';

export default function About() {
    const aboutLinks = [
        {
            head: 'Make an Order',
            para: 'Error minus sint nobis dolor laborum architecto, quaerat.Voluptatum porro expedita labore esse velit veniam labor quo obcaecati similique iusto',
            points: [
                'Error minus sint nobis dolor',
                'Voluptatum porro expedita labore esse.',
                'Voluptas unde sit pariatur earum'
            ],
        },
        {
            head: 'Make a Payment',
            para: 'Error minus sint nobis dolor laborum architecto, quaerat.Voluptatum porro expedita labore esse velit veniam labor quo obcaecati similique iusto',
            points: [
                'Error minus sint nobis dolor',
                'Voluptatum porro expedita labore esse.',
                'Voluptas unde sit pariatur earum'
            ],
        },
        {
            head: 'Track Your Order',
            para: 'Error minus sint nobis dolor laborum architecto, quaerat.Voluptatum porro expedita labore esse velit veniam labor quo obcaecati similique iusto',
            points: [
                'Error minus sint nobis dolor',
                'Voluptatum porro expedita labore esse.',
                'Voluptas unde sit pariatur earum'
            ],
        }
    ];

    return (
        <>
            <Hero img={imgg} h1="ABOUT US" p1="TRANSPORTATION" h2="& LOGISTICS" p2={`Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus, Quisque velit nisi pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero`} />

            <section className="flex flex-col md:flex-row items-center px-4 md:px-20 py-8 md:py-16 space-y-8 md:space-y-0 md:space-x-8">
                <div className="flex flex-col items-start space-y-6">
                    <h1 className="relative text-xl sm:text-2xl md:text-4xl text-orange font-bold text-center flex items-center justify-center z-10">
                        <img src={icon} alt="icon" className='h-5 sm:h-6 w-5 sm:w-6 mr-2 sm:mr-3' />
                        ABOUT US

                        <span className="absolute bottom-0 left-1/2 w-1/3 h-1 mt-2 bg-orange transform -translate-x-1/2"></span>
                    </h1>

                    <p className='text-lg sm:text-xl md:text-2xl'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Blanditiis deleniti reprehenderit animi est eaque corporis!
                        Nisi, asperiores nam amet doloribus, soluta ut reiciendis.
                        Consequatur modi rem, vero eos ipsam voluptas.
                        <br />
                        <br />
                        Error minus sint nobis dolor laborum architecto, quaerat.
                        Voluptatum porro expedita labore esse velit veniam laborum
                        quo obcaecati similique iusto delectus quasi!
                    </p>

                    <div className="space-y-4">
                        {['Error minus sint nobis dolor', 'Voluptatum porro expedita labore esse.', 'Voluptas unde sit pariatur earum'].map((point, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <FaCheck className='text-white text-2xl sm:text-3xl rounded-full p-1 bg-orange' />
                                <h1 className="text-lg sm:text-xl md:text-2xl">{point}</h1>
                            </div>
                        ))}
                    </div>
                </div>

                <img src={img} alt="courier" className="w-full md:w-1/2 object-cover rounded-lg shadow-md" />
            </section>

            <section className="relative h-screen flex flex-col items-center justify-center px-4 my-80 md:my-0 bg-cover bg-center bg-repeat md:bg-no-repeat"
                style={{ backgroundImage: `url(${rect71})` }}
            >
                <style>
                    {`
                        @media (min-width: 768px) {
                            .bg-cover {
                                background-image: url(${rect71});
                                background-repeat: no-repeat;
                                background-size: cover;
                                background-position: center;
                            }
                        }
                        @media (max-width: 767px) {
                            .bg-cover {
                                backgroundColor: rgba(f, f, f, 0.0);
                                background-repeat: repeat-y;
                                background-size: auto 100%;
                                background-position: center top;
                            }
                        }
                    `}
                </style>
                <div className="relative z-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 md:mb-28 text-black md:text-white flex items-center justify-center z-10 border-b-4 border-white pb-4">
                        <img src={icon} alt="icon" className='h-5 sm:h-6 w-5 sm:w-6 mr-2 sm:mr-3' />
                        HOW IT WORKS
                    </h1>
                </div>
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} className="absolute inset-0"></div>
                <div className="grid grid-cols-1 gap-8 px-4 relative z-10 md:grid-cols-3 text-black md:text-white">
                    {aboutLinks.map((link, index) => (
                        <div key={index} className="flex flex-col items-center justify-center space-y-4 bg-transparent p-6 rounded-lg">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-orange text-white rounded-full py-3 px-6 border-4 border-white">{index + 1}</h1>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{link.head}</h2>
                            <p className="text-base sm:text-lg md:text-xl text-center">{link.para}</p>
                            <div className="space-y-2">
                                {link.points.map((point, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <FaCheck className='text-white text-lg sm:text-xl md:text-2xl rounded-full p-1 bg-orange' />
                                        <h3 className="text-sm sm:text-base md:text-lg">{point}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

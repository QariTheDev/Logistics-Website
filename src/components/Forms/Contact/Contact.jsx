import React from 'react';

export default function Contact() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-custom place-content-center px-4 md:px-20 py-16 space-y-8 md:space-y-0 md:space-x-8">
            <form className="bg-slate-600 text-center text-white flex flex-col items-center justify-center space-y-8 border-2 border-white p-6 md:p-8 rounded">
                <h1 className="text-3xl md:text-4xl font-bold">Get in Touch</h1>
                <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="px-4 py-2 w-full border-2 border-white text-gray-700 bg-transparent rounded"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="px-4 py-2 w-full border-2 border-white text-gray-700 bg-transparent rounded"
                    />
                </div>
                <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2 w-full border-2 border-white text-gray-700 bg-transparent rounded"
                />
                <input
                    type="text"
                    placeholder='Subject'
                    className="px-4 py-2 w-full border-2 border-white text-gray-700 bg-transparent rounded"
                />
                <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    className="px-4 py-2 w-full border-2 border-white text-gray-700 bg-transparent rounded"
                ></textarea>
                <button className="bg-orange text-white hover:bg-white hover:text-orange border-2 border-orange text-xl md:text-2xl font-semibold py-3 px-6 md:px-12 transition-all duration-300 ease-in-out">
                    Send Message
                </button>
            </form>

            <div className="flex flex-col bg-white text-white px-4 rounded border-2 border-white space-y-8 md:space-y-20">
                <div className="bg-slate-600 text-white p-6 md:p-8 rounded border-2 border-white space-y-5">
                    <div className="flex flex-col items-start justify-center space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold">Address</h1>
                        <p className="text-lg md:text-xl">203 Fake St. Mountain View, <br />
                            San Francisco, California, USA</p>
                    </div>
                    <div className="flex flex-col items-start justify-center space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold">Phone</h1>
                        <p className="text-lg md:text-xl">+1 232 3235 324</p>
                    </div>
                    <div className="flex flex-col items-start justify-center space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold">Email</h1>
                        <p className="text-lg md:text-xl">youremail@gmail.com</p>
                    </div>
                </div>

                <div className="bg-slate-600 text-white flex flex-col items-start justify-start p-6 md:p-8 rounded border-2 border-white space-y-5">
                    <h1 className="text-3xl md:text-4xl font-bold">More Info</h1>
                    <p className="text-lg md:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti reprehenderit animi est eaque corporis! Nisi, asperiores nam amet doloribus, soluta ut reiciendis. Consequatur modi rem, vero eos ipsam voluptas.</p>
                    <button className="bg-orange text-white hover:bg-white hover:text-orange border-2 border-orange text-xl md:text-2xl font-semibold py-3 px-6 md:px-12 transition-all duration-300 ease-in-out">
                        Learn More 
                    </button>
                </div>
            </div>
        </section>
    );
}

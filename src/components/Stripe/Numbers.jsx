import React from 'react';

export default function Numbers() {
    return (
        <section className="flex items-center justify-center bg-slate-200 px-6 md:px-12 lg:px-24 py-16 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                <div className="flex flex-col items-center justify-center space-y-3 md:space-y-5">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-orange">42+</h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center">Countries Covered</p>
                </div>

                <div className="flex flex-col items-center justify-center space-y-3 md:space-y-5">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-orange">97+</h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center">Business Success</p>
                </div>

                <div className="flex flex-col items-center justify-center space-y-3 md:space-y-5">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-orange">2342</h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center">Happy Client</p>
                </div>

                <div className="flex flex-col items-center justify-center space-y-3 md:space-y-5">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-orange">3245</h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center">Business Done</p>
                </div>
            </div>
        </section>
    );
}

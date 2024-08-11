import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function UpperNavbar() {
    return (
        <>
            <div className="md:w-[26rem] md:h-[3.9rem] w-0 h-0 bg-orange inset-0 absolute"></div>
            <nav className="flex flex-col md:flex-row w-full items-center justify-between bg-darkBlue text-white px-3 py-2 md:py-4 space-y-3 md:space-y-0">
                <div className="flex items-center justify-start w-full md:w-auto md:ml-[26rem] pr-4 space-x-5">
                    <div className="flex items-center justify-center text-slate-200">
                        <FaPhoneAlt className='text-white mr-2' /> +44 20 7930 8205
                    </div>
                    <div className="flex items-center justify-center text-slate-200">
                        <FaLocationDot className='text-white mr-2' /> 450 Strand, Charing Cross, PK
                    </div>
                </div>
                <div className='flex space-x-4 mt-2 md:mt-0 md:ml-auto px-4 border-l-2 border-white pl-2'>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500"><FaFacebookF className='text-3xl' /></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400"><FaTwitter className='text-3xl' /></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-800"><FaLinkedinIn className='text-3xl' /></a>
                </div>
            </nav>
        </>
    );
}
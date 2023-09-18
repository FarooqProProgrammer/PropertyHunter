// src/components/FeaturedSection.js
import React from 'react';
import { FaLightbulb, FaRocket, FaChartBar } from 'react-icons/fa';
import { TitleFont } from '../../utils';
import { AiOutlineSearch } from 'react-icons/ai';

const FeaturedSection = () => {
    return (
        <section className="relative  py-16 px-2">
            <div className="container mx-auto ">
                <h2 className={`${TitleFont}  font-semibold mb-[40px]`}>—Featured Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Featured Service 1 */}
                    <div className="relative p-6 bg-white rounded-lg shadow-md">
                        <div className="absolute top-0 -mt-5 left-[50px] transform -translate-x-1/2 bg-orange-500 text-white rounded-md w-12 h-12 flex justify-center items-center">
                            <FaLightbulb className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 mt-5">Search Property from Anywhere</h3>
                        <p className="text-gray-500 mt-5">Lorem ipsum dolor sit amet adipiscing elit sed orci dictum sagittis libero vitae auctor elit. Praesent accumsan mauris eget tortor auctor efficitur nunc iaculis nunc.</p>
                    </div>
                    <div className="relative p-6 bg-white rounded-lg shadow-md">
                        <div className="absolute top-0 -mt-5 left-[50px] transform -translate-x-1/2 bg-orange-500 text-white rounded-md w-12 h-12 flex justify-center items-center">
                            <AiOutlineSearch className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 mt-5">Search Property from Anywhere</h3>
                        <p className="text-gray-500 mt-5">Lorem ipsum dolor sit amet adipiscing elit sed orci dictum sagittis libero vitae auctor elit. Praesent accumsan mauris eget tortor auctor efficitur nunc iaculis nunc.</p>
                    </div>
                    <div className="relative p-6 bg-white rounded-lg shadow-md">
                        <div className="absolute top-0 -mt-5 left-[50px] transform -translate-x-1/2 bg-orange-500 text-white rounded-md w-12 h-12 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                      </svg>
                      
                        </div>
                        <h3 className="text-xl font-semibold mb-2 mt-5">Search Property from Anywhere</h3>
                        <p className="text-gray-500 mt-5">Lorem ipsum dolor sit amet adipiscing elit sed orci dictum sagittis libero vitae auctor elit. Praesent accumsan mauris eget tortor auctor efficitur nunc iaculis nunc.</p>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;

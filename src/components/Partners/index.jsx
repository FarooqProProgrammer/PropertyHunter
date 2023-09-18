import React from 'react'
import { TitleFont } from '../../utils'
import { AiFillAmazonCircle, AiFillFacebook, AiFillGoogleCircle, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'

export default function Partners() {
    return (
        <div className="w-full py-24 mb-4 flex flex-col justify-start items-start px-10">
            <h1 className={`${TitleFont} capitalize font-bold    mb-4  text-gray-900`}>
            — Our partners
            </h1>
            <div className="lg:max-w-[40%] md:max-w-[40%] sm:max-w-[90%]">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a
                    odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                </p>
            </div>
            <div className="w-full py-3 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-1 place-items-center gap-2">
                <div className="w-[200px] cursor-pointer h-[140px] opacity-30 hover:opacity-80 transition-opacity flex justify-center items-center gap-3  lg:border-r md:border-r  border-gray-600">
                    <AiFillGoogleCircle size={26} />
                    <span className='text-2xl'>Google</span>
                </div>
                <div className="w-[200px] cursor-pointer h-[140px] opacity-30 hover:opacity-80 transition-opacity flex justify-center items-center gap-3  lg:border-r md:border-r  border-gray-600">
                <AiFillFacebook size={26} />
                    <span className='text-2xl'>Facebook</span>
                </div>
                <div className="w-[200px] cursor-pointer h-[140px] opacity-30 hover:opacity-80 transition-opacity flex justify-center items-center gap-3  lg:border-r md:border-r  border-gray-600">
                <AiFillAmazonCircle size={26} />
                    <span className='text-2xl'>Amazon</span>

                </div>
                <div className="w-[200px] cursor-pointer h-[140px] opacity-30 hover:opacity-80 transition-opacity flex justify-center items-center gap-3  lg:border-r md:border-r  border-gray-600">
                <AiFillTwitterSquare size={26} />
                    <span className='text-2xl'>Twitter</span>

                </div>
                <div className="w-[200px] cursor-pointer h-[140px] opacity-30 hover:opacity-80 transition-opacity flex justify-center items-center gap-3    ">
                <AiFillInstagram size={26} />
                    <span className='text-2xl'>Instagram</span>

                </div>
            </div>
        </div>

    )
}

import React from 'react'
import { AiOutlineLink, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { BsMap } from "react-icons/bs"
import { TitleFont } from '../../utils'

export default function Faq() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col  w-full mb-20">
                    <h1 className={`${TitleFont}  font-medium title-font mb-4 text-gray-900`}>
                        — Any questions ? Reach us
                    </h1>
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-bl-[40px]">

                            <AiOutlinePhone
                                className="text-orange-500 w-12 h-12 mb-3 inline-block"
                            />
                            <h2 className="title-font font-medium text-xl text-gray-900">
                                Call US
                            </h2>
                            <p className="leading-relaxed">(080) 123 456 7890</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4  sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-bl-[40px]">

                            <AiOutlineLink
                                className="text-orange-500 w-12 h-12 mb-3 inline-block"
                            />
                            <h2 className="title-font font-medium text-xl text-gray-900">
                                WEBSITE
                            </h2>
                            <p className="leading-relaxed">www.domain.com</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4  sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-bl-[40px]">

                            <BsMap
                                className="text-orange-500 w-12 h-12 mb-3 inline-block"
                            />
                            <h2 className="title-font font-medium text-xl text-gray-900">
                                ADDRESS
                            </h2>
                            <p className="leading-relaxed">Karachi, Pakistan</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-bl-[40px] ">

                            <AiOutlineMail
                                className="text-orange-500 w-12 h-12 mb-3 inline-block"
                            />
                            <h2 className="title-font font-medium text-xl text-gray-900">
                                EMAIL
                            </h2>
                            <p className="leading-relaxed">info@domain.com  </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

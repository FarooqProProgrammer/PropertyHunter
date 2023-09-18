import React from 'react'

export default function Hero() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl md:text-4xl lg:text-6xl mb-4 font-medium text-gray-900">
                        The better way to buy real estate.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its versions have evolved
                        over layout.
                    </p>
                    <div className="flex justify-center px-2 py-2 border bg-orange-500 w-full h-[70px] rounded-br-[50px]">
                        <input
                            type="text"
                            className="flex-[2] outline-none px-4 "
                            placeholder=" city Address "
                        />
                        <button className="flex-1 text-white">Search</button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 h-[500px] border-b-l-30">
                    <img
                        className="object-cover object-center  h-full rounded-bl-[50px]"
                        alt="hero"
                        src="https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFByb3BlcnR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    />
                </div>
            </div>
        </section>

    )
}

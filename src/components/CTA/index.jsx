import React from 'react'

export default function CTA() {
    return (
        <section className="text-gray-100 body-font" style={{backgroundImage:"url('https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UHJvcGVydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')"}}>
            <div className="container px-5 py-10 mx-auto">
                <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                    <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">
                       
Request a Free Consultation!!
                    </h1>
                    <button className="flex-shrink-0 text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
                        Reserve a Slot
                    </button>
                </div>
            </div>
        </section>

    )
}

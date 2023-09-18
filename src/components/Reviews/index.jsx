import React from 'react'
import { TitleFont } from '../../utils'
import { BiSolidQuoteLeft } from "react-icons/bi"

export default function Reviews() {
    return (
        <div id='reviews' className="container mx-auto py-24">
            <h1 className={`${TitleFont} text-3xl font-semibold text-start   mb-6`}>—Customer Reviews</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {/* Review Card 1 */}
                <div className="bg-white rounded-lg shadow-md p-6 space-y-5">
                    <BiSolidQuoteLeft className='text-3xl' />
                    <h2 className="text-xl font-semibold">John Doe</h2>
                    <p className="text-gray-600">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lectus
                        non urna tincidunt cursus."
                    </p>
                </div>
 
                <div className="bg-white rounded-lg shadow-md p-6 space-y-5">
                    <BiSolidQuoteLeft className='text-3xl' />
                    <h2 className="text-xl font-semibold">John Doe</h2>
                    <p className="text-gray-600">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lectus
                        non urna tincidunt cursus."
                    </p>
                </div>
 
                <div className="bg-white rounded-lg shadow-md p-6 space-y-5">
                    <BiSolidQuoteLeft className='text-3xl' />
                    <h2 className="text-xl font-semibold">John Doe</h2>
                    <p className="text-gray-600">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lectus
                        non urna tincidunt cursus."
                    </p>
                </div>
 
            </div>
        </div>

    )
}

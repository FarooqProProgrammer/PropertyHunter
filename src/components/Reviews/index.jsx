import React from 'react'
import { TitleFont } from '../../utils'
import { BiSolidQuoteLeft } from "react-icons/bi"
import Carousel from 'react-multi-carousel';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
}

export default function Reviews() {
    return (
        <div id='reviews' className="container mx-auto py-24 px-5">
            <h1 className={`${TitleFont} text-3xl font-semibold text-start   mb-6`}>—Customer Reviews</h1>
            <Carousel responsive={responsive}>
                {/* Review Card 1 */}
                <div className="bg-white rounded-lg shadow-md p-6 mr-2 space-y-5">
                    <BiSolidQuoteLeft className='text-3xl' />
                    <h2 className="text-xl font-semibold">John Doe</h2>
                    <p className="text-gray-600">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lectus
                        non urna tincidunt cursus."
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 mr-2 space-y-5">
                    <BiSolidQuoteLeft className='text-3xl' />
                    <h2 className="text-xl font-semibold">John Doe</h2>
                    <p className="text-gray-600">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lectus
                        non urna tincidunt cursus."
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 mr-2 space-y-5">
                    <BiSolidQuoteLeft className='text-3xl' />
                    <h2 className="text-xl font-semibold">John Doe</h2>
                    <p className="text-gray-600">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lectus
                        non urna tincidunt cursus."
                    </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 mr-2 space-y-5">
                    <BiSolidQuoteLeft className='text-3xl' />
                    <h2 className="text-xl font-semibold">John Doe</h2>
                    <p className="text-gray-600">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lectus
                        non urna tincidunt cursus."
                    </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 mr-2 space-y-5">
                    <BiSolidQuoteLeft className='text-3xl' />
                    <h2 className="text-xl font-semibold">John Doe</h2>
                    <p className="text-gray-600">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lectus
                        non urna tincidunt cursus."
                    </p>
                </div>

            </Carousel>
        </div>

    )
}

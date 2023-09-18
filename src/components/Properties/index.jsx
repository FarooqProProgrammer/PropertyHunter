import React from 'react'
import { PropertiesData } from '../../Data'
import { TitleFont } from '../../utils'

export default function Properties() {
    return (
        <div id='properties' className="w-full py-24 flex flex-col justify-start items-start px-10">
            <h1 className={`${TitleFont} title-font font-bold   mb-4  text-gray-900`}>
                — Home For Sale
            </h1>
            <div className="lg:max-w-[40%] md:max-w-[40%] sm:max-w-[90%]">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a
                    odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                </p>
            </div>
            <div className="w-full py-3 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 place-items-center gap-2">
                {
                    PropertiesData?.map((item)=>{return(
                        <div className="w-full h-[430px]  shadow-md flex flex-col gap-2">
                            <img
                                className="rounded-bl-[50px]"
                                src={item.img}
                                alt=""
                            />
                            <h3 className="mx-5 lg:text-xl font-bold">{item.title}</h3>
                            <h5 className="mx-5 lg:text-md font-thin">{item.Size}</h5>
                            <h5 className="mx-5 lg:text-md font-thin">baths</h5>
                            <h5 className="mx-5 lg:text-xl font-bold">
                                {" "}
                                <span className="text-orange-600">{item.PriceHigh} </span>{item.PriceLow}
                            </h5>
                            <button className="px-5 mx-5 text-white rounded-md py-2 bg-orange-500">
                                Inquiry Now
                            </button>
                        </div>
                    )})
                }    
            

            </div>
        </div>

    )
}

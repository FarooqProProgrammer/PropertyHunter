
export default function Contact() {
    return (
        <div id="contact" className="w-full py-3 px-5 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 place-items-center">


            <div className="w-full h-[560px]">
                <img 
                    src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFByb3BlcnR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="w-full h-full"
                />
            </div>
            <div className="w-full h-[560px]  flex flex-col justify-center items-center px-5 py-2">

                <div className="w-full  px-3 py-2 ">
                    <label className="block text-gray-700 text-md font-bold mb-2">Name</label>
                    <input type="text" placeholder="Enter Your Name" className="w-full py-2 rounded-md border border-gray-200 outline-none px-4" />
                </div>
                <div className="w-full  px-3 py-2 ">
                    <label className="block text-gray-700 text-md font-bold mb-2">Email</label>
                    <input type="email" placeholder="Enter Your Email" className="w-full py-2 rounded-md border border-gray-200 outline-none px-4" />
                </div>
                <div className="w-full  px-3 py-2 ">
                    <label className="block text-gray-700 text-md font-bold mb-2">Phone</label>
                    <input type="phone" placeholder="Enter Your Phone" className="w-full py-2 rounded-md border border-gray-200 outline-none px-4" />
                </div>
                <div className="w-full  px-3 py-2 ">
                    <label className="block text-gray-700 text-md font-bold mb-2">Message</label>
                    <textarea placeholder="Enter Your Message" className="w-full h-[150px] px-2 py-2 outline-none rounded-md border border-gray-200">
                    </textarea>
                </div>
                <div className="w-full px-3 py-2  ">
                    <button className="px-5 py-2 bg-orange-500 rounded-md text-white">Send Message</button>
                </div>
                
            </div>

        </div>
    )
}
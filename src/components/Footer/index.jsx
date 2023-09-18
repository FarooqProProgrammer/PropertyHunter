import React from 'react'
import { AiOutlineCopyright } from 'react-icons/ai'

export default function Footer() {
    return (
        <footer class="text-gray-100  bg-orange-500 body-font">
            <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
         
                <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">— ABOUT US</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-100 hover:cursor-pointer hover:underline hover:text-gray-200">Donec quis tincidunt felis. Sed</a>
                            </li>
                            <li>
                                <a class="text-gray-100 hover:cursor-pointer hover:underline hover:text-gray-200">aliquet ac nulla a condimentum.</a>
                            </li>
                            <li>
                                <a class="text-gray-100 hover:cursor-pointer hover:underline hover:text-gray-200">Curabitur massa sapien.</a>
                            </li>

                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">— OTHER LINKS</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-100 hover:cursor-pointer hover:underline hover:text-gray-200">Register</a>
                            </li>
                            <li>
                                <a class="text-gray-100 hover:cursor-pointer hover:underline hover:text-gray-200">Forum</a>
                            </li>
                            <li>
                                <a class="text-gray-100 hover:cursor-pointer hover:underline hover:text-gray-200">Affiliate</a>
                            </li>
                            <li>
                                <a class="text-gray-100 hover:cursor-pointer hover:underline hover:text-gray-200">FAQ</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">— RELATED LINKS</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-100 hover:cursor-pointer hover:underline hover:text-gray-200">About US</a>
                            </li>
                            <li>
                                <a class="text-gray-100 hover:cursor-pointer hover:underline hover:text-gray-200">Why Buy With Us?</a>
                            </li>
                            <li>
                                <a class="text-gray-100 hover:cursor-pointer hover:underline hover:text-gray-200">Our agent</a>
                            </li>
                            <li>
                                <a class="text-gray-100 hover:cursor-pointer hover:underline hover:text-gray-200">Contact Us</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">— RESOURCES</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-100 hover:cursor-pointer hover:underline hover:text-gray-200">Terms</a>
                            </li>
                            <li>
                                <a class="text-gray-100 hover:cursor-pointer hover:underline hover:text-gray-200">Licenses</a>
                            </li>
                            <li>
                                <a class="text-gray-100 hover:cursor-pointer hover:underline hover:text-gray-200">Become an affiliate</a>
                            </li>
                            <li>
                                <a class="text-gray-100 hover:cursor-pointer hover:underline hover:text-gray-200">Help Center</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
        <div className='w-full py-2 flex justify-center items-center gap-3 bg-[#000]'>
        <AiOutlineCopyright />
            <span>

            All Right Reserve Property Hunter</span>
        </div>
        </footer>
    )
}

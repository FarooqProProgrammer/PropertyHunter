// src/components/OurTeam.js
import React from 'react';
import { AiFillTwitterCircle, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai"
import { TitleFont } from '../../utils';

const OurTeam = () => {
    const teamMembers = [
        {
            name: 'John Doe',
            role: 'CEO',
            imageSrc: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', // Replace with your image URL
        },
        {
            name: 'Jane Smith',
            role: 'Designer',
            imageSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', // Replace with your image URL
        },
        {
            name: 'Bob Johnson',
            role: 'Developer',
            imageSrc: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', // Replace with your image URL
        },
    ];

    return (
        <section id='agents' className=" py-24 px-10">
            <div className="container mx-auto text-start">
                <h2 className={`${TitleFont} text-3xl text-[#262626] font-semibold mb-6`}>— Our Perfect Agent</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white p-4 shadow-md rounded-lg">
                            <img
                                src={member.imageSrc}
                                alt={member.name}
                                className="w-32 h-32 mx-auto rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                            <p className="text-gray-500 text-center">{member.role}</p>
                            <div className="mt-4 text-center flex justify-center items-center gap-3">
                                <AiOutlineFacebook className="text-2xl text-blue-500 inline-block" />
                                <AiFillTwitterCircle className="text-2xl text-black-500 inline-block" />
                                <AiOutlineInstagram className="text-2xl text-pink-500 inline-block" />
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;

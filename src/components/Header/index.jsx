// src/components/Header.js
import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleHeader = () => {
    setIsOpen(!isOpen);
  };



  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-white shadow-md py-5 text-black p-4 w-full ${scrollY > 100 && 'fixed'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl lg:text-4xl md:text-3xl sm:text-xl font-semibold">Property Hunter</div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-500">Home</a>
          <a href="#properties" className="hover:text-gray-500">Properties</a>
          <a href="#agents" className="hover:text-gray-500">Agents</a>
          <a href="#reviews" className="hover:text-gray-500">Reviews</a>
          <a href="#contact" className="hover:text-gray-500">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleHeader} className="text-3xl">
            <FaBars />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <a href="#" className="block">Home</a>
          <a href="#" className="block">About</a>
          <a href="#" className="block">Services</a>
          <a href="#" className="block">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Header;

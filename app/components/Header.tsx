"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  return (
    <>
      {/* Large Screens Header */}
      <header className="bg-[#f7f7f7]  h-16 text-[#333333] items-center flex shadow-md">
        <div className="flex container mx-auto items-center justify-between p-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-[rgb(87,187,96)]">Ibads Book Shop</h1>

          {/* Desktop Navigation */}
          <ul className="md:flex hidden space-x-6">
            <Link href="/" className="font-semibold p-4 hover:text-[rgb(87,187,96)]">Home</Link>
            <Link href="/categories" className="font-semibold p-4 hover:text-[rgb(87,187,96)]">Categories</Link>
            <Link href="/bestsellers" className="font-semibold p-4 hover:text-[rgb(87,187,96)]">Bestsellers</Link>
            <Link href="/exclusive" className="font-semibold p-4 hover:text-[rgb(87,187,96)]">Exclusive</Link>
            <Link href="/contact" className="font-semibold p-4 hover:text-[rgb(87,187,96)]">Contact</Link>
                      {/* Cart Icon */}
          <div className="md:flex hidden items-center space-x-4">
            <FaShoppingCart className="text-[#bca45b] text-2xl cursor-pointer" />
          </div>
          </ul>



          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden text-2xl focus:outline-none">
            {isMobileMenu ? "×" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenu && (
        <div className="fixed inset-0 bg-[#f7f7f7] bg-opacity-50 flex flex-col items-center space-y-8 py-8 z-50 md:hidden">

          <button onClick={toggleMobileMenu} className="absolute top-4 right-4 text-[#333333] text-2xl focus:outline-none">
            ×
          </button>
          <nav className="flex flex-col items-center space-y-4 text-[#000000]">
            <Link href="/" onClick={toggleMobileMenu} className="text-lg font-semibold hover:text-[rgb(87,187,96)]">Home</Link>
            <Link href="/categories" onClick={toggleMobileMenu} className="text-lg font-semibold hover:text-[rgb(87,187,96)]">Categories</Link>
            <Link href="/bestsellers" onClick={toggleMobileMenu} className="text-lg font-semibold hover:text-[rgb(87,187,96)]">Bestsellers</Link>
            <Link href="/exclusive" onClick={toggleMobileMenu} className="text-lg font-semibold hover:text-[rgb(87,187,96)]">Exclusive</Link>
            <Link href="/contact" onClick={toggleMobileMenu} className="text-lg font-semibold hover:text-[rgb(87,187,96)]">Contact</Link>
            <FaShoppingCart onClick={toggleMobileMenu} className="text-[#bca45b] text-2xl cursor-pointer" />
                      {/* Cart Icon */}
          
           
          
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;

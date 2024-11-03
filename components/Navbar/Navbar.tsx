"use client";

import { useState, useEffect } from "react";
import { BiCycling } from "react-icons/bi";
import Link from "next/link";
import { BiShoppingBag } from "react-icons/bi";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import Logo from "../Logo/Logo";
import { NavLinks } from "./NavLinks";
import OrderNow from "@/shared/OrderNow";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Logo />
          </div>

          <nav className="hidden md:flex space-x-10 items-center">
            {NavLinks.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="lg:text-[22px] text-xl font-medium hover:text-red-600 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-x-4">
            <OrderNow />
            <button className="flex items-center px-4 py-3 bg-orange-600 hover:bg-green-600 rounded-md text-white font-semibold transition-colors">
              <BiShoppingBag size={24} />
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
          >
            {!isMenuOpen && <HiBars3BottomRight size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && (
        <div
          className={`fixed inset-0  z-50 bg-emerald-700 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center h-20 px-4">
              <Logo className="text-white" />
              <button
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                onClick={toggleMenu}
              >
                <HiXMark size={30} className="text-white" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4 px-4 py-6">
              {NavLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="text-xl font-medium text-white hover:text-red-600 transition-colors border-b border-b-white p-3"
                  onClick={toggleMenu}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            <div className="mt-auto px-4 py-6 space-y-4 sm:hidden">
              <button className="flex w-full justify-center items-center gap-2 px-4 py-3 bg-blue-900 hover:bg-red-600 rounded-md text-white font-semibold transition-colors">
                <BiCycling size={24} />
                <span>Order Now</span>
              </button>
              <button className="w-full flex items-center justify-center px-4 py-3 bg-orange-600 hover:bg-green-600 rounded-md text-white font-semibold transition-colors">
                <BiShoppingBag size={24} />
                <span className="ml-2">Cart</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

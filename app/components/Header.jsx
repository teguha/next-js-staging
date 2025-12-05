"use client";

import { useState } from "react"
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
export default function Header (){
    return (
        // <header className="bg-white shadow-sm sticky top-0 z-50 hidden md:block">
        //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        //         <nav className="flex flex-col md:flex-col justify-between items-center gap-4">
        //             <div className="flex items-center gap-3">
        //             <img src="logo.png" alt="Watersport Bali Logo" className="h-12 w-auto"/>
        //             </div>
        //             <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        //             <a href="tel:+6281246228384" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
        //                 <i className="fas fa-map-marker-alt text-blue-600"></i>
        //                 <span className="text-sm font-medium">Tanjung Benoa, Badung Bali</span>
        //             </a>
        //             <a href="https://wa.me/6281246228384" className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors">
        //                 <i className="fab fa-whatsapp text-green-600"></i>
        //                 <span className="text-sm font-medium">+62 812 4622 8384</span>
        //             </a>
        //             </div>
        //         </nav>
        //     </div>
        // </header> 

        <header className="bg-white backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <nav className="flex flex-col md:flex-col justify-between items-center gap-4">
                
                    {/* Logo Section */}
                    <div className="flex items-center gap-2 md:gap-3">
                        <div className="relative group">
                            <p className="text-blue-600 font-bold text-lg tracking-normal">LOGO BALI WATERSPORT</p>
                        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                            <img 
                                src="logo.png" 
                                alt="Watersport Bali Logo" 
                                className="h-12 w-auto relative z-10 drop-shadow-sm"
                            /> */}
                        </div>
                    </div>
                
                    {/* Contact Info Section */}
                    <div className="flex flex-row items-center md:gap-4 ">
                        
                        {/* Location */}
                        <a 
                        href="tel:+6281246228384" 
                        className="group flex items-center gap-2.5 md:px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-300"
                        >

                            <div className="p-1.5 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                                <FaMapMarkerAlt className="w-4 h-4 text-blue-600" />
                            </div>

                            <span className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                                Tanjung Benoa, Badung Bali
                            </span>

                        </a>
                        
                        {/* WhatsApp */}
                        <a 
                        href="https://wa.me/6281246228384" 
                        className="group flex items-center gap-2.5 px-4 py-2 rounded-lg hover:bg-green-50 transition-all duration-300"
                        >
                            <div className="p-1.5 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                                <FaWhatsapp className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors">
                                +62 812 4622 8384
                            </span>
                        </a>
                        
                    </div>
                </nav>
            </div>
        </header>
    );
}


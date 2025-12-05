"use client"

import { useState, useEffect } from "react";
import { FaCalendar } from "react-icons/fa";
export default function ModalRateDetail({ dataPackage, activeRateDetail, closeModalRateDetail, dateString}) {
     const [activeTab, setActiveTab] = useState("information"); // default tab
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-25">
            <div className="bg-gray-50 rounded-lg w-11/12 md:w-2/3 lg:w-[60vw] max-h-[90vh] overflow-y-auto p-4 md:p-12 relative">
                
                {/* Close Button */}
                <button
                    onClick={() => closeModalRateDetail()}
                    className="absolute top-5 md:top-14 right-4 md:right-6 p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-full transition-all duration-200"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Package Header */}
                <div className="space-y-3 md:mx-5 bg-gradient-to-br from-blue-50 to-white rounded-xl md:px-3 py-2">
                    <h2 className="text-lg md:text-2xl font-bold text-gray-700 px-3">{dataPackage.name}</h2>
                    
                    {/* Rate Badge */}
                    <div className="inline-flex items-center gap-2 px-3   ">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-md font-semibold text-blue-600">{activeRateDetail.name}</span>
                    </div>
                </div>

                {/* dataPackage */}
                <div className="p-2 md:p-4">
                    <div className="container mx-auto mb-6">
                        <div className=" bg-gradient-to-br from-blue-50 to-white rounded-xl overflow-hidden">
                            
                            {/* Header Section */}
                            <div className="px-4 md:px-6 py-5 border-b border-gray-100">
                                <div className="flex flex-row items-center justify-between gap-3 border-b border-gray-200 md:py-1">
                                    <h3 className="text-md font-bold md:font-medium text-gray-700 mb-1">Booking Date</h3>
                                    <h3 className="text-md font-bold md:font-medium text-gray-700 mb-1">Price /{activeRateDetail.unit}</h3>
                                </div>

                                <div className="flex flex-row md:flex-row items-start md:items-center justify-between gap-2 md:gap-3 mt-4">

                                    {/* Left Section */}
                                    <div className="flex flex-row items-center gap-2 md:gap-4 mt-1 md:mt-0">
                                        <FaCalendar className="hidden md:block text-xs md:text-lg text-gray-600" />
                                        <p className="text-xs md:text-lg text-normal md:font-semibold text-gray-600 md:tracking-wide leading-tight">
                                            {dateString}
                                        </p>
                                    </div>

                                    {/* Price */}
                                    <p className="text-sm md:text-lg font-bold text-blue-600">
                                        IDR {(activeRateDetail.price).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                            {/* Header Section */}

                            {/* Tab Section */}
                            <div className="px-4 md:px-6">
            
                                {/* Tab Headers */}
                                <div className="flex border-b border-gray-200">
                                    
                                    {/* Terms Button */}
                                    <button
                                        onClick={() => setActiveTab("information")}
                                        className={`px-2 py-1 text-xs md:px-4 md:py-3 md:text-sm font-medium transition-colors
                                            ${activeTab === "information" 
                                                ? "text-blue-600 border-b-2 border-blue-600" 
                                                : "text-gray-500 hover:text-gray-700 border-b-2 border-transparent"
                                            }`}
                                    >
                                        Detail Information
                                    </button>

                                    {/* Cancellation Button */}
                                    <button
                                        onClick={() => setActiveTab("bring")}
                                        className={`px-2 py-1 text-xs md:px-4 md:py-3 md:text-sm font-medium transition-colors
                                            ${activeTab === "bring" 
                                                ? "text-blue-600 border-b-2 border-blue-600" 
                                                : "text-gray-500 hover:text-gray-700 border-b-2 border-transparent"
                                            }`}
                                    >
                                        What to Bring
                                    </button>

                                    {/* Cancellation Button */}
                                    <button
                                        onClick={() => setActiveTab("cancel")}
                                        className={`px-2 py-1 text-xs md:px-4 md:py-3 md:text-sm font-medium transition-colors
                                            ${activeTab === "cancel" 
                                                ? "text-blue-600 border-b-2 border-blue-600" 
                                                : "text-gray-500 hover:text-gray-700 border-b-2 border-transparent"
                                            }`}
                                    >
                                        Cancellation Policy
                                    </button>
                                </div>

                                {/* Tab Content */}
                                <div className="py-5">

                                    {/* Terms & Conditions Content */}
                                    {activeTab === "information" && (
                                        <div className="space-y-4">
                                            {/* paste semua isi Terms & Conditions kamu di sini */}
                                            <div className="flex items-start gap-3">
                                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                                </svg>
                                                <div>
                                                    <h4 className="font-medium text-gray-900 text-sm">Highlights</h4>
                                                    
                                                    <ul className="list-disc ml-4">
                                                        <li className="text-sm text-gray-600 mt-1">Ac Return Hotel Transfer</li>
                                                        <li className="text-sm text-gray-600 mt-1">Watersport Equipment</li>
                                                        <li className="text-sm text-gray-600 mt-1">Lunch and Mineral Water</li>
                                                        <li className="text-sm text-gray-600 mt-1">Locker</li>
                                                        <li className="text-sm text-gray-600 mt-1">Coffee Break at plantation</li>
                                                    </ul>

                                                </div>
                                            </div>


                                            <div className="flex items-start gap-3">
                                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                                </svg>
                                                <div>
                                                    <h4 className="font-medium text-gray-900 text-sm">Pick Up Time</h4>
                                                    
                                                    <ul className="list-disc ml-4">
                                                        <li className="text-sm text-gray-600 mt-1">Watersport Equipment</li>
                                                        <li className="text-sm text-gray-600 mt-1">Lunch and Mineral Water</li>
                                                        <li className="text-sm text-gray-600 mt-1">Locker</li>
                                                    </ul>

                                                </div>
                                            </div>
                                            {/* ...dst */}
                                        </div>
                                    )}

                                    {activeTab === "bring" && (
                                        <div className="space-y-4">
                                            {/* paste semua isi Terms & Conditions kamu di sini */}
                                            <div className="flex items-start gap-3">
                                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                                </svg>
                                                <div>
                                                    <h4 className="font-medium text-gray-900 text-sm">Highlights</h4>
                                                    
                                                    <ul className="list-disc ml-4">
                                                        <li className="text-sm text-gray-600 mt-1">Ac Return Hotel Transfer</li>
                                                        <li className="text-sm text-gray-600 mt-1">Watersport Equipment</li>
                                                        <li className="text-sm text-gray-600 mt-1">Lunch and Mineral Water</li>
                                                        <li className="text-sm text-gray-600 mt-1">Locker</li>
                                                        <li className="text-sm text-gray-600 mt-1">Coffee Break at plantation</li>
                                                    </ul>

                                                </div>
                                            </div>


                                            <div className="flex items-start gap-3">
                                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                                </svg>
                                                <div>
                                                    <h4 className="font-medium text-gray-900 text-sm">Pick Up Time</h4>
                                                    
                                                    <ul className="list-disc ml-4">
                                                        <li className="text-sm text-gray-600 mt-1">Watersport Equipment</li>
                                                        <li className="text-sm text-gray-600 mt-1">Lunch and Mineral Water</li>
                                                        <li className="text-sm text-gray-600 mt-1">Locker</li>
                                                    </ul>

                                                </div>
                                            </div>
                                            {/* ...dst */}
                                        </div>
                                    )}

                                    {/* Cancellation Policy Content */}
                                    {activeTab === "cancel" && (
                                        <div className="space-y-4">
                                            {/* paste semua isi Cancellation Policy kamu di sini */}
                                            <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                                                <h4 className="font-medium text-red-900 text-sm">More than 7 days before</h4>
                                                <p className="text-sm text-red-700 mt-1">Free cancellation - Full refund</p>
                                            </div>
                                            {/* ...dst */}
                                        </div>
                                    )}

                                </div>
                            </div>
                            {/* Tab Section */}

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
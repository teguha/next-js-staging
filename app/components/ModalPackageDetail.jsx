"use client"
import { useState } from "react"
import ImageCarousel from "./ImageCarousel";
import { FaTimes, FaTag } from "react-icons/fa";

export default function ModalPackageDetail({data, cheapestRate, closeModal}){
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-25">
            <div className="bg-gray-50 rounded-lg w-11/12 md:w-2/3 lg:w-[60vw] max-h-[90vh] overflow-y-auto p-4 md:p-8 relative">
                
                {/* Close button */}
                <button
                    onClick={closeModal}
                    className="absolute top-5 md:top-8 right-8 text-gray-600 hover:text-gray-900"
                >
                    <FaTimes size={20} />
                </button>
                {/* Package details */}
                <h2 className="text-xl font-bold mb-2 text-gray-900">Watersport Bali</h2>

                {/* data */}
                <div className="p-2 md:p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-4 container mx-auto mb-6 bg-white rounded-2xl transition-all duration-500 overflow-hidden ">
                        
                        {/* Image Section */}
                        <div className="flex flex-1 p-4 ">
                            <div className="group overflow-hidden rounded-xl">
                                <ImageCarousel images={data.image} />
                            </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="flex flex-1 px-4 py-4 flex flex-col justify-between">
                        
                            {/* Header */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                                    {data.name}
                                </h2>
                                
                                {/* Price Badge */}
                                <div className="grid grid-cols-8 md:grid-cols-12 items-center bg-gradient-to-br from-blue-50 to-white shadow-sm px-4 py-3 rounded-xl mb-6 border border-gray-100 gap-3">

                                    {/* Icon */}
                                    <div className="col-span-1 flex justify-center">
                                        <FaTag className="w-5 h-5 text-blue-600 opacity-80" />
                                    </div>

                                    {/* Label */}
                                    <div className="col-span-3">
                                        <span className="text-sm font-medium text-gray-700">Start From</span>
                                    </div>

                                    {/* Price */}
                                    <div className="col-span-8 flex flex-col gap-1">

                                        {
                                            cheapestRate && cheapestRate.price != cheapestRate.old_price && (
                                                <div className="flex items-center gap-3">
                                                    <p className="text-sm md:text-xs font-semibold text-gray-600 md:text-gray-500 line-through">
                                                        IDR {cheapestRate.old_price.toLocaleString()}
                                                    </p>

                                                    <span className="px-2 py-0.5 text-[10px] font-semibold bg-yellow-300 text-gray-900 rounded-md border border-amber-200">
                                                        {cheapestRate.disc}% OFF
                                                    </span>
                                                </div>
                                            ) 
                                        }

                                        <p className="text-2xl font-bold text-blue-600 tracking-tight">
                                            IDR {cheapestRate.price.toLocaleString()} <span className="text-sm font-medium text-gray-600">/ Pax</span>
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Description */}
                                <div className="space-y-2">
                                    <h3 className="text-md font-semibold text-gray-700  tracking-wide">
                                        Activity Description
                                    </h3>
                                    <p className="text-gray-600 text-base leading-relaxed">
                                        {data.desc}
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
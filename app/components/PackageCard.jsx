"use client"

import { useState } from "react"
import ImageCarousel from "./ImageCarousel";
import { FaTimes, FaTag } from "react-icons/fa";
import ModalPackageDetail from "./ModalPackageDetail";

export default function PackageCard({ data, rateData, image, title, oldPrice, newPrice, discount, handleSearch }) {
    const [open , setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }
    
    return (
        <>
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 mb-5">
                <div className="relative overflow-hidden group">
                    <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* <ImageCarousel images={image} /> */}
                </div>

                <div className="p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-2 h-14 line-clamp-2">{title}</h2>

                    <div className="mb-5">
                        <div className="flex items-center justify-center gap-2 mb-1">
                            {oldPrice && <span className="text-sm line-through text-gray-400">IDR {oldPrice.toLocaleString()}</span>}
                            {discount && <span className="bg-yellow-400 text-xs font-bold px-2 py-0.5 rounded-full text-gray-900">{discount} OFF</span>}
                        </div>
                        <p className="text-center">
                            <span className="text-3xl font-bold text-black">IDR {newPrice.toLocaleString()}</span>
                            <span className="text-sm text-gray-500 px-2">/ PAX</span>
                        </p>
                    </div>

                    <div className="flex gap-3">
                    <button onClick={() => setOpen(true)} className="flex-1 text-center text-blue-600 font-semibold hover:text-blue-700 font-medium py-2.5 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all">
                        Activity Details
                    </button>
                    <button onClick={() => handleSearch(data.category_type ?? 1)} className="flex-1 text-center bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
                        Book Now
                    </button>
                    </div>
                </div>

            </article>

            {
                open && (
                    <ModalPackageDetail data={data} cheapestRate={rateData} closeModal={closeModal} />
                )
            }

        </>
    )
}
"use client"
import { useState } from "react";
import { FaChevronLeft, FaChevronDown, FaChevronUp, FaChevronRight, FaCalendar } from "react-icons/fa"
import { FaTimes, FaTag, FaShoppingBag } from "react-icons/fa";

export default function ModalDetailCart({data, cart, closeModalCart, handleDeleteCart, handleMinus, handlePlus, handleCheckOut, paymentPage}){
    function formatDateString(dateStr) {
        const [day, month, year] = dateStr.split("-");
        const date = new Date(year, month - 1, day);

        return date.toLocaleDateString("en-US", {
            weekday: "short",   // Fri
            day: "numeric",     // 2
            month: "short",     // Dec
            year: "numeric",    // 2025
        });
    }

    const groupCartByTwo = (cart, prop1, prop2) => {
        return cart.reduce((acc, currentItem) => {
            const key = `${currentItem[prop1]}|${currentItem[prop2]}`; // buat key gabungan unik
            if (!acc[key]) acc[key] = [];
                acc[key].push(currentItem);
            return acc;
        }, {});
    }

    const groupByDateAndPromo = groupCartByTwo(cart, 'rateDate', 'promoCode');

    return (
        <>
        
            {/* Package details */}
                <h2 className="text-xl font-bold mb-2 text-gray-900 hidden md:block">Cart</h2>

                <div className="p-2 md:p-6 bg-white border border-gray-200 md:border-none rounded-2xl shadow-2xl md:shadow-lg mb-8 md:mb-0">
                    <div className="flex flex-col md:flex-col justify-between gap-2 md:gap-2 container mx-auto mb-6 bg-white rounded-2xl transition-all duration-500 overflow-hidden ">
                        {
                            cart.length === 0 ? (
                                <>
                                <div className="flex flex-col items-center justify-center h-90 md:h-48 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-sm border border-gray-100 mt-5 mb-15 md:mb-0 transition-all hover:shadow-md">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full"></div>
                                        <FaShoppingBag className="relative text-5xl text-gray-400 mb-4" />
                                    </div>
                                    <p className="text-gray-700 text-sm md:text-base font-medium ">
                                        Your cart is empty
                                    </p>
                                    <p className="text-gray-400 text-xs md:text-sm mt-1">
                                        Add items to get started
                                    </p>
                                </div>
    
                                </>
                            ) : (
                                <>
                                        <h3 className="text-xl text-gray-900 font-bold tracking-wide px-2 ">Activity</h3>
                                        <p className="text-sm text-gray-600 font-normal px-2">Review your booking details</p>
                                        <div className="flex flex-col gap-2 shadow-lg rounded-2xl">
                                            {/* data */}
                                            {
                                                Object.entries(groupByDateAndPromo).map(([key, items]) => {
                                                    const [date, promoCode] = key.split("|"); // memisahkan date dan promo
                                                    return(
                                                    <>
                                                    <div key={key}>
                                                        <div className="flex flex-row justify-between items-center py-2 border-b border-gray-200 gap-4">
                                                            <div className="flex flex-row items-center w-full px-2 ">
                                                                <FaCalendar className="text-gray-600" />
                                                                <input
                                                                    type="text"
                                                                    id="date"
                                                                    className="w-full text-xs md:text-sm px-4 py-3 border-r border-gray-200 rounded-lg text-gray-600 border-none"
                                                                    value={formatDateString(date)}
                                                                    readOnly
                                                                    aria-label="Booking date"
                                                                />
                                                            </div>

                                                            <div className="flex flex-row gap-2 items-center w-full px-2">
                                                                <FaTag className="text-gray-600" />
                                                                <input
                                                                    type="text"
                                                                    id="promo"
                                                                    value={promoCode}
                                                                    // onChange={(e) => setPromo(e.target.value, "promo")}
                                                                    placeholder="Promo Code"
                                                                    className="w-full text-xs md:text-sm px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-600"
                                                                    aria-label="Promo code"
                                                                    readOnly
                                                                />
                                                            </div>
                                                        </div>
                                                        {(Array.isArray(items) ? items : []).map((item) =>
                                                            
                                                            (
                                                                <div key={`${item.id}-${item.rateId}-${item.rateDate}`} className="flex flex-row justify-start items-start md:items-center py-3 border-b border-gray-200 gap-6 md:gap-2">
                                                                    {/* DELETE BUTTON + IMAGE (Mobile) */}
                                                                    <div className="flex flex-row items-center gap-2">
                                                                        
                                                                        {/* Delete Button */}
                                                                        <button 
                                                                            className="text-gray-400 hover:text-red-500 transition-colors p-1.5 hover:bg-red-50 rounded-lg"
                                                                            aria-label="Remove item"
                                                                            onClick={() => handleDeleteCart(item.id, item.rateId, item.rateDate)}
                                                                        >
                                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                                />
                                                                            </svg>
                                                                        </button>

                                                                        {/* Image */}
                                                                        <img
                                                                            src={item.packagaImage}
                                                                            className="w-15 h-15 object-cover rounded-lg md:hidden"
                                                                            loading="lazy"
                                                                        />
                                                                    </div>

                                                                    {/* MAIN INFO */}
                                                                    <div className="flex flex-col w-[30vw] h-full gap-2 md:gap-0">
                                                                        <p className="text-xs md:text-sm md:text-lg font-bold text-gray-900 leading-snug">
                                                                            {item.name}
                                                                        </p>

                                                                        <div className="flex flex-row  mt-1 md:mt-2">
                                                                            <p className="text-xs md:text-sm text-blue-700">{item.rateName} x {item.qty}</p>
                                                                            <p className="text-xs md:text-sm text-blue-700">IDR {(item.price).toLocaleString()}</p>
                                                                        </div>
                                                                    </div>

                                                                    {/* QTY + PRICE (mobile: stacked, desktop: inline) */}
                                                                    <div className="flex flex-col items-end  md:flex-row md:items-start gap-4 md:gap-8 md:w-auto md:ml-16">

                                                                        {/* Qty */}
                                                                        <div className="flex items-center gap-1 md:gap-4">
                                                                            
                                                                            <button
                                                                                className="flex items-center justify-center w-5 h-5 md:w-9 md:h-9 rounded-full bg-red-100 border border-red-200 text-red-600 text-lg font-semibold hover:bg-red-200 transition"
                                                                                onClick={() => handleMinus(item, item.id , item.rateDate, item.name, promoCode ,"cart")}
                                                                            >
                                                                                –
                                                                            </button>

                                                                            <input
                                                                                type="number"
                                                                                className="text-center w-10 md:w-14 text-lg font-semibold text-gray-800"
                                                                                min={1}
                                                                                value={item.qty}
                                                                                readOnly
                                                                            />

                                                                            <button
                                                                                className="flex items-center justify-center w-5 h-5 md:w-9 md:h-9 rounded-full bg-green-100 border border-green-200 text-green-600 text-lg font-semibold hover:bg-green-200 transition"
                                                                                onClick={() => handlePlus(item, item.id , item.rateDate, item.name, item.packageImage, promoCode, "cart")}
                                                                            >
                                                                                +
                                                                            </button>

                                                                        </div>

                                                                        {/* Price Mobile */}
                                                                        <p className="text-end text-xs md:text-sm font-bold text-gray-900 md:hidden">
                                                                            IDR {(item.price * item.qty).toLocaleString()}
                                                                        </p>

                                                                    </div>

                                                                    {/* Price Desktop */}
                                                                    <div className="hidden md:flex justify-end md:w-[30vw]">
                                                                        <p className="text-xl font-bold text-gray-900">
                                                                            IDR {(item.price * item.qty).toLocaleString()}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                    </>
                                                )})
                                            }


                                            {/* Total Section */}
                                            <div className="grid grid-cols-[auto_1fr] border-t-2 border-gray-200 gap-4 mt-2 px-4 py-5 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm">
                                                <div className="flex items-start">
                                                    <p className="text-xl text-gray-900 font-bold">Total</p>
                                                </div>

                                                <div className="flex flex-col justify-between items-end">
                                                    <div>
                                                        <p className="text-2xl md:text-3xl text-gray-900 font-bold mb-1">IDR {cart.reduce((acc, item) => acc + item.price * item.qty, 0).toLocaleString()}</p>
                                                        <p className="text-xs text-gray-500 font-normal">
                                                        Include Tax and Service
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Checkout Button */}
                                            <div className="flex flex-row justify-end mt-0">
                                                <div className="hidden md:block">
                                                    <button 
                                                        className="border-0 rounded-xl text-sm md:text-mg text-white font-semibold shadow-lg px-4 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex-1"
                                                        aria-label="Proceed to checkout" onClick={handleCheckOut}
                                                    >
                                                        {paymentPage == false ? 'Proceed to Checkout' : 'Proceed to Payment'}
                                                    </button>  
                                                </div>
                                            </div>
                                        </div>
                                    
                                </>
                            )
                        }
                    </div>
                </div>
            
        </>
    )
} 
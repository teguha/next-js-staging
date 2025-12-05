"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronDown, FaChevronUp, FaChevronRight, FaCalendar } from "react-icons/fa"
import { FaShoppingBag } from "react-icons/fa"

import { FaTimes, FaTag } from "react-icons/fa";
import ImageCarousel from "./ImageCarousel";
import ModalDetailCart from "./ModalDetailCart";

export default function FilterCart({cart , handleDeleteCart, handleMinus, handlePlus, showCartPanel, setShowCartPanel, handleCheckOut, paymentPage}){
    const [qty, setQty] = useState({}); // disimpan dalam bentuk objek
    const [lastUpdateQty , setLastUpdateQty] = useState(null);
    const [openModalDetailCart , setOpenModal] = useState(false);
    // const [showCartPanel, setShowCartPanel] = useState(false);
    
   function formatDateString(dateStr) {
        // const [openModalDetailCart, setOpenModal] = useState(false);
        const [day, month, year] = dateStr.split("-");
        const date = new Date(year, month - 1, day);

        return date.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "2-digit",
            year: "numeric",
        });
    }

    const groupCart = (cart, property) => {
        return cart.reduce((acc, curentItem) => {
            const key = curentItem[property];
            // jika kunci belum ada
            if(!acc[key]){
                acc[key] = [];
            }

            acc[key].push(curentItem);
            return acc;
        }, {}) // mulai dengan objek kosong {}
    }

    const groupByDate = groupCart(cart, 'rateDate');

    const openModalCart = () => {
        setOpenModal(true);
    }

    const closeModalCart = () => {
        setOpenModal(false);
    }


    return (
        <>
            <div className="col-span-1 hidden md:block">
                <div className="border border-gray-200 shadow-xl bg-white max-w-7xl px-6 py-6 flex flex-col justify-start rounded-2xl hover:shadow-2xl transition-shadow duration-300">
                    {/* title */}
                    <h1 className="text-gray-900 font-bold text-xl md:text-2xl lg:text-3xl mb-1">
                        Booking Summary
                    </h1>
                    

                    {/* item */}
                    {
                        cart.length === 0 ? (
                            <>
                            <div className="flex flex-col items-center justify-center h-48 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-sm border border-gray-100 mt-5 transition-all hover:shadow-md">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full"></div>
                                    <FaShoppingBag className="relative text-5xl text-gray-400 mb-4"/>
                                </div>
                                <p className="text-gray-700 text-sm md:text-base font-medium">
                                    Your cart is empty
                                </p>
                                <p className="text-gray-400 text-xs md:text-sm mt-1">
                                    Add items to get started
                                </p>
                            </div>

                            </>
                        ) : (
                            <>
                                <p className="text-gray-500 text-sm mb-4">Review your booking details</p>
                                {
                                    Object.entries(groupByDate).map(([date, items]) => (
                                        <>
                                            <div className="flex-1 mt-2 mb-2" key={date}>
                                                <label htmlFor="date" className="text-sm font-medium text-gray-700 mb-2 block">
                                                    Selected Date
                                                </label>
                                                <input 
                                                    type="text" 
                                                    id="date" 
                                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm text-gray-700 bg-gray-50 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                                                    value={formatDateString(date)}
                                                    readOnly
                                                    aria-label={`Booking date: ${formatDateString(date)}`}
                                                />
                                            </div>

                                            {(Array.isArray(items) ? items : []).map((item) => (
                                                <div key={`${item.id}-${item.rateId}-${item.rateDate}`} className="grid grid-cols-[auto_1fr_auto] gap-4 px-4 py-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow mb-2">
                                                    {/* Delete action */}
                                                    <div className="flex items-start pt-1">
                                                        <button 
                                                            className="text-gray-400 hover:text-red-500 transition-colors p-1.5 hover:bg-red-50 rounded-lg"
                                                            aria-label="Remove item from booking" onClick={() => handleDeleteCart(item.id, item.rateId, item.rateDate)}
                                                        >
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </button>
                                                    </div>

                                                    {/* Info product */}
                                                    <div className="flex flex-col justify-between">
                                                        <div>
                                                            <h3 className="text-base font-semibold text-gray-900 leading-snug mb-1">
                                                            {item.name}
                                                            </h3>
                                                            <p className="text-sm text-blue-600 font-medium bg-blue-50 inline-block px-2 py-1 rounded-md">
                                                            {item.rateName} × {item.qty}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Price */}
                                                    <div className="flex items-end">
                                                        <p className="text-gray-900 text-base font-bold whitespace-nowrap">
                                                            IDR {(item.price * item.qty).toLocaleString()}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </>
                                    ))
                                }

                                {/* Total Section */}
                                <div className="grid grid-cols-[auto_1fr] border-t-2 border-gray-200 gap-4 mt-2 px-4 py-5 bg-gradient-to-br from-blue-50 to-white rounded-xl">
                                    <div className="flex items-start">
                                        <p className="text-xl text-gray-900 font-bold">Total</p>
                                    </div>

                                    <div className="flex flex-col justify-between items-end">
                                        <div>
                                            <p className="text-3xl text-gray-900 font-bold mb-1">IDR {cart.reduce((acc, item) => acc + item.price * item.qty, 0).toLocaleString()}</p>
                                            <p className="text-xs text-gray-500 font-normal">
                                                Include Tax and Service
                                            </p>
                                        </div>
                                    </div>
                                </div>
                        
                                {/* Action Buttons */}
                                <div className="flex flex-row justify-between gap-3 px-3 py-2 mt-4">
                                    <button 
                                        className="bg-white border border-gray-300 rounded-xl text-sm md:text-base text-gray-700 font-medium shadow-sm px-2 py-2 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md transition-all duration-200 flex-1"
                                        aria-label="View shopping cart"
                                        onClick={() => openModalCart()}
                                    >
                                        View Cart
                                    </button>  
                                    <button 
                                        className="border-0 rounded-xl text-sm md:text-base text-white font-semibold shadow-lg px-2 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex-1"
                                        aria-label="Proceed to checkout" onClick={handleCheckOut}
                                    >
                                        {paymentPage == false ? 'Proceed to Checkout' : 'Proceed to Payment'}
                                    </button>  
                                </div>
                            </>
                        )
                    }
                    
                </div>
            </div>

            <div className="md:hidden">
                <div
                    className={`
                        
                        ${showCartPanel ? " fixed bottom-10 left-0 right-0 bg-white rounded-t-2xl transition-transform duration-300 ease-out translate-y-0" 
                            : "translate-y-full hidden"}
                    `}
                >
                    <div className={`bg-white/0 w-full rounded-xl w-11/12 md:w-2/3 lg:w-[60vw] max-h-[90vh] overflow-y-auto md:pt-0 p-2 md:p-4 md:p-8 relative mb-12 md:mb-0 ${cart.length > 2 ? 'pt-50 md:pt-0' : 'pt-10 md:pt-0'}`}>
                        <ModalDetailCart
                            data={groupByDate}
                            cart={cart}
                            closeModalCart={closeModalCart}
                            handleDeleteCart={handleDeleteCart}
                            handleMinus={handleMinus}
                            handlePlus={handlePlus}
                        />
                    </div>
                </div>
            </div>


            <div className="fixed bottom-12 backdrop-blur-md bg-white/80 border-t border-gray-200 
                grid grid-cols-[auto_4fr_1fr] mx-auto block md:hidden px-4 py-3 gap-3 w-full 
                shadow-[0_-6px_16px_rgba(0,0,0,0.08)]">

                <div className="flex flex-col items-center justify-center col-span-1 row-span-3" onClick={() => setShowCartPanel(prev => !prev)}>
                    {/* <FaChevronUp className="text-gray-400 text-lg" /> */}
                    {showCartPanel ? (
                            <FaChevronDown className="text-gray-400 text-lg" />
                        ) : (
                            <FaChevronUp className="text-gray-400 text-lg" />
                        )
                    }
                </div>

                <div className="flex-1 flex flex-col justify-center col-span-1">
                    <p className="text-gray-700 text-sm font-semibold">Total Price</p>
                    <p className="text-gray-900 text-2xl font-bold tracking-tight">IDR {cart.reduce((acc, item) => acc + item.price * item.qty, 0).toLocaleString()}</p>
                    <p className="text-gray-500 text-xs font-medium">Includes tax & services</p>
                </div>
                {
                    paymentPage == false && (
                        <div className="flex flex-col items-center justify-center row-span-3 ">
                            <button onClick={handleCheckOut} className={`rounded-lg bg-blue-600 hover:bg-blue-700 
                                transition-all duration-300 text-white font-semibold px-4 py-2 md:px-7 md:py-3
                                shadow-md hover:shadow-lg active:scale-95 text-md md:text-base 
                                ${cart.length === 0 
                                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed shadow-none'  // Saat disabled
                                    : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg'
                                }`}
                                disabled={cart.length === 0}>
                                {paymentPage == false ? 'Continue' : 'Proceed to Payment'}
                            </button>
                        </div>
                    )
                }
            </div>

            { openModalDetailCart && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-25">
                    <div className="bg-gray-50 rounded-lg w-11/12 md:w-2/3 lg:w-[60vw] max-h-[90vh] overflow-y-auto p-4 md:p-8 relative">
                        
                        {/* Close button */}
                        <button
                            onClick={() => closeModalCart()}
                            className="absolute top-5 md:top-8 right-8 text-gray-600 hover:text-gray-900"
                        >
                            <FaTimes size={20} />
                        </button>
                        <ModalDetailCart data={groupByDate} cart={cart} closeModalCart={closeModalCart} handleDeleteCart ={handleDeleteCart} handleMinus =
                        {handleMinus} handlePlus = {handlePlus} handleCheckOut ={handleCheckOut} paymentPage={paymentPage} />
                    </div>
                </div>
                )
            }
        </>
    )
}
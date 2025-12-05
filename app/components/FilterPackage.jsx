"use client"

import { useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import ImageCarousel from "./ImageCarousel";
import { FaChevronLeft, FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa"
import { FaTimes, FaTag } from "react-icons/fa";
import { set } from "date-fns";
import ModalRateDetail from "./ModalRateDetail";
import ModalPackageDetail from "./ModalPackageDetail";

export default function FilterPackage({data, cart, dateStr , handlePlus, handleMinus }){
    
    const [qty, setQty] = useState({}); // disimpan dalam bentuk objek
    const [open, setOpen] = useState(false);
    const [openImage, setOpenImage] = useState(false);
    const [openRateDetail , setOpenRateDetail] = useState(false);
    const [activeRate, setActiveRate] = useState(null);

    // const handlePlus = (rate) => {
    //     setQty((prev) => {
    //         const cartItem = cart.find(c => c.id === data.id && c.rateId === rate.id && c.rateDate === data.date);
    //         const cartQty = cartItem?.qty || 0;

    //         // qty baru = qty cart + qty state lokal + 1
    //         const newQty = (cartQty || prev[rate.id] || 0) + 1;
    //         // jika newQty melebihi limit qty
    //         if(newQty > rate.qty){
    //             return prev;
    //         }else{
    //             const updateQty = { ...prev, 
    //                 [rate.id]: newQty 
    //             };
                
    //             //kirim perubahan ke lastUpdateQty 
    //             setLastUpdateQty({rate, newQty});
    //             return updateQty;
    //         }
    //     })
    // }

    // useEffect(() => {
    //     if(!lastUpdateQty) return;
    //     if (!data) return;
    //     const {rate, newQty} = lastUpdateQty;
    //     onUpdateCart(
    //         {
    //             id: data.id,
    //             name: data.name,
    //             rateId: rate.id,
    //             rateName: rate.name,
    //             price: rate.price,
    //             qty: newQty,
    //             rateDate : data.date
    //         },
    //         "plus"
    //     );
    // }, [lastUpdateQty]);

    // const handleMinus = (rate) => {
    //     setQty((prev) => {
    //         const cartItem = cart.find(c => c.id === data.id && c.rateId === rate.id && c.rateDate === data.date);
    //         const cartQty = cartItem?.qty || 0;
    //         const currentQty = cartQty || prev[rate.id] || 0;
    //         const newQty = Math.max(currentQty - 1, 0);
    //         const updatedQty = { ...prev, [rate.id]: newQty };
    //         setLastUpdateQty({rate, newQty});
    //         return updatedQty;
    //     });
    // };

    // useEffect(() => {
    //     if(delQty && delQty.id === data.id && delQty.rateDate === data.date){
    //         setQty((prev) => ({
    //             ...prev, 
    //             [delQty.rateId] : 0,
    //         }))
    //     }
    // }, [delQty?.ts]);


    // Modal
    const openModal = () => {
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }

    // Modal Rate Detail
    const openRateDetailModal = (item) => { 
        setActiveRate(item);
        setOpenRateDetail(true);
    }

    const closeRateDetailModal = () => {
        setOpenRateDetail(false);
    }

    // mengambil rate paling murah
    const cheapestRate = data.rates.reduce((min, r) =>
        r.price < min.price ? r : min
    );

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 container mx-auto bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl mb-6 p-6 items-start hover:shadow-2xl transition-all duration-300">
                <div className="col-span-1 md:col-span-1 lg:col-span-1 group overflow-hidden rounded-lg">
                    {/* <img src="https://www.befreetour.com/img/produk/bali-water-sports/bali-water-sports_6243f29e76ca02b9d0e373022c13ce96f2ed06bc.jpg" alt="Parasailing" className="w-full h-64 lg:h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500" loading="lazy"/> */}
                    <ImageCarousel images={data.image} />
                    <div className="flex flex-col justify-center items-center gap-2">
                        <button key={`${data.id}-${data.date}`} className="text-sm text-blue-500 font-bold text-center mt-4" onClick={() => openModal()}>Activity Details</button>
                        <FaChevronDown className="text-blue-500 text-sm" />
                    </div>
                </div>
                
                <div className="col-span-2 md:col-span-2 lg:col-span-2  border border-gray-100 rounded-2xl shadow-lg px-6 py-6 bg-white">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">{data.name}</h2>
                    <p className="text-gray-600 text-md max-w-2xl text-left mb-6">{data.desc}</p>

                    {data.rates.map((item) =>(
                        <div key={`${data.id}-${item.id}-${data.date}`} className="border-2 border-gray-200 hover:border-blue-300 hover:bg-gradient-to-br from-blue-50 to-white px-4 py-4 bg-white shadow-md rounded-xl mb-4 ">
                            <div className="flex flex-row justify-between mb-2">
                                <p className="text-lg text-gray-900 font-bold">{item.name}</p>
                                <div className="flex flex-row items-center">
                                    <FaInfoCircle className="text-blue-600 text-sm "/>
                                    <button
                                        className="text-sm font-semibold text-blue-600 
                                        leading-normal
                                        border-none
                                        hover:text-blue-700 hover:underline focus:outline-none focus:ring-0  px-2 py-1"
                                        aria-label="View rate details for premium package"
                                        onClick={() => openRateDetailModal(item)}
                                    >
                                        Rate Details
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-row justify-between mb-2">
                                <div className="flex flex-row justify-start gap-2">
                                    <p className="text-lg md:text-xl lg:text-2xl text-gray-900 font-bold">IDR {(item.price).toLocaleString()} </p>
                                    <p className="text-gray-600 mt-2 text-xs md:text-xs lg:text-sm  font-normal">/ {item.unit}</p>
                                </div>
                            {
                                (qty[item.id] || 0) <= 0 && (Array.isArray(cart) &&  !cart.some(cartItem => 
                                    cartItem.id === data.id &&
                                    cartItem.rateDate === data.date &&
                                    cartItem.rateId === item.id
                                )) 
                                
                                ? 
                                
                                (
                                    <button className="px-3 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-xs md:text-xs lg:text-sm text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
                                        onClick={
                                            () => handlePlus(item, data.id, data.date, data.name, data.image[0].img , data.promo_code ,"package")}
                                    >
                                        Select Package
                                    </button>
                                )
                                : 
                                (
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <button className="flex items-center justify-center w-9 h-9 rounded-full bg-red-100 border border-red-200 text-red-600 text-xl font-semibold hover:bg-red-200 transition" 
                                            onClick={() => handleMinus(
                                                item,        // rate info dari map
                                                data.id,    // data package id
                                                data.date,
                                                data.name,
                                                data.promo_code,
                                                "package"
                                            )}
                                        >
                                        –
                                        </button>

                                        <div className="flex items-center w-5 md:w-10">
                                            <input type="number" className="flex text-center w-5 md:w-14 text-xl font-semibold text-gray-800" value={
                                                Array.isArray(cart) && cart.find(cartItem => 
                                                    cartItem.id === data.id &&
                                                    cartItem.rateId === item.id &&
                                                    cartItem.rateDate === data.date
                                                )?.qty || qty[item.id] || 0

                                            } min ={0} readOnly />
                                        </div>

                                        <button className="flex items-center justify-center w-9 h-9 rounded-full bg-green-100 border border-green-200 text-green-600 text-xl font-semibold hover:bg-green-200 transition"
                                            onClick={() => handlePlus(item, data.id, data.date, data.name, data.image[0].img, data.promo_code,"package")}

                                        >
                                        +
                                        </button>
                                    </div>
                                )
                            }
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL DATA */}
            {open && (
                <ModalPackageDetail data={data} cheapestRate={cheapestRate} closeModal={closeModal} />
            )}

            {/* MODAL RATE  */}
            {openRateDetail && (
                <ModalRateDetail  dataPackage={data} activeRateDetail={activeRate} closeModalRateDetail={closeRateDetailModal} dateString={dateStr.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                    })}
                />    
            )}
        </>

        
    )
}
"use client"

import { useState } from "react"

export default function Footer() {
    return (
        <>
            <footer className="bg-white border-t border-gray-200 hidden md:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <p className="text-center text-sm text-gray-500">
                        © Copyright <span className="font-bold"> Watersport Bali </span> 2025. All Rights Reserved
                    </p>
                </div>
            </footer>

            <footer className="fixed bottom-0 w-full bg-white border-t border-gray-300 block md:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
                <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8 py-4">
                    {/* <p className="text-center text-xl text-gray-800 font-normal tracking-tight">
                        watersport - bali.com
                    </p>
                    <div className="border-2 border-t border-gray-500 w-30 mt-2">

                    </div> */}
                    <p className="text-center text-sm text-gray-900">
                        © Copyright <span className="font-bold"> Watersport Bali </span> 2025. All Rights Reserved
                    </p>
                </div>
            </footer>

        </>
    )
}

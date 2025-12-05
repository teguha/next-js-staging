"use client"

import { useState } from "react"
export default function HeroSectionSearch(){
    return(
        <section className="relative bg-gray-50 overflow-hidden hidden md:block">
            <div className="grid grid-cols-3 grid-rows-2 gap-6 p-6 container mx-auto">
    
                <div className="col-span-2 row-span-2">
                    <img 
                        src="https://www.befreetour.com/img/produk/bali-water-sports/bali-water-sports_6243f29e76ca02b9d0e373022c13ce96f2ed06bc.jpg" 
                        alt="G1" 
                        className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                </div>

                <div className="col-span-1 row-span-1">
                    <img 
                        src="https://www.befreetour.com/img/produk/bali-water-sports/bali-water-sports_6243f29e76ca02b9d0e373022c13ce96f2ed06bc.jpg" 
                        alt="G2" 
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                    
                <div className="col-span-1 row-span-1 grid grid-cols-2 gap-4">
                    <img 
                        src="https://www.befreetour.com/img/produk/bali-water-sports/bali-water-sports_6243f29e76ca02b9d0e373022c13ce96f2ed06bc.jpg" 
                        alt="G3" 
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <img 
                        src="https://www.befreetour.com/img/produk/bali-water-sports/bali-water-sports_6243f29e76ca02b9d0e373022c13ce96f2ed06bc.jpg" 
                        alt="G4" 
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

            </div>

        </section>
    ) 
}
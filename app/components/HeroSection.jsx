"use client";

import { useState } from "react"

export default function HeroSection(){
    return(
        <section className="relative overflow-hidden bg-white">
            <picture>
                <img 
                src="https://www.befreetour.com/img/produk/bali-water-sports/bali-water-sports_6243f29e76ca02b9d0e373022c13ce96f2ed06bc.jpg" 
                alt="Watersport Activities in Bali" 
                className="w-full h-[400px] md:h-[500px] object-cover"
                />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </section>
    )
}
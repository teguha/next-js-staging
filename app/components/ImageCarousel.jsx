"use cliant"
import { useState } from "react";
import { FaChevronLeft, FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa"

export default function ImageCarousel({images}){
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevImage = () => {
      setCurrentIndex((prev) => 
        prev === 0 ? images.length -1 : prev -1
      )
    }

    const nextImage = () => {
      setCurrentIndex((prev) => 
        prev === images.length -1 ? 0 : prev +1
      )
    }

    return (
    <div className="relative w-full ">
      <img
        src={images[currentIndex].img}
        alt={images[currentIndex].name}
        className="w-full h-64 lg:h-80 object-cover rounded-lg group-hover:scale-110 transition-transform duration-500
        transition-transform duration-500"
        loading="lazy"
      />

      {/* tombol prev/next */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-transparent border-2 border-white rounded-full w-6 h-6 p-1 flex items-center justify-center shadow hover:bg-white hover:bg-opacity-20 transition"
      >
        <FaChevronLeft className="text-xs text-white hover:text-gray-700" />
      </button>

      <button
        onClick={nextImage}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent border-2 border-white rounded-full w-6 h-6 p-1 flex items-center justify-center shadow hover:bg-white hover:bg-opacity-20 transition"
      >
        <FaChevronRight className="text-xs text-white hover:text-gray-700" />
      </button>

      {/* indikator dot */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white px-2 py-1 rounded-full">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
"use client"

import { useState, useEffect } from "react"
import { FaTag, FaCalendar } from "react-icons/fa";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/CalendarOverride.css";

export default function Filter({onUpdateFilter , dateSearch, promoSearch}) {
  function parseDateString(dateStr) {
    if (!dateStr) return null;
    const [day, month, year] = dateStr.split('-');
    return new Date(Number(year), Number(month) - 1, Number(day));
  }

  const [selectedDate, setSelectedDate] = useState(dateSearch ? parseDateString(dateSearch) : new Date());
  const [showCalendarDesktop, setShowCalendarDesktop] = useState(false);
  const [showCalendarMobile, setShowCalendarMobile] = useState(false);
  const [promoCode, setPromo] = useState(promoSearch ?? '');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    if (dateSearch) setSelectedDate(parseDateString(dateSearch));
    if(promoSearch) setPromo(promoSearch);
  }, [dateSearch, promoSearch]);

  //  format date d-M-Y
  function formatDate(date) {
    if (!date || isNaN(new Date(date))) return ""; // mencegah error jika undefined
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}-${month}-${year}`; // d-M-Y
  }

  // Format tanggal jadi string
  const formatDateString = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const submitFilter = () => {
    const dateToSend = formatDate(selectedDate || new Date());
    const codeToSend = promoCode || "";
    const dateString = selectedDate || new Date();
    onUpdateFilter(dateToSend, codeToSend, dateString);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    submitFilter();
  }

  // auto submit di awal
  useEffect(() => {
    submitFilter(); // otomatis submit saat page pertama kali load
  }, []);

  // auto sumbit ketika tanggal berubah untuk mobile
  useEffect(() => {
  const resize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    if (isMobile && selectedDate) {
        submitFilter();
      }
  }, [selectedDate, isMobile]);

  
  
  return (
    <>
      {/* Desktop */}
      <div className="max-w-5xl mx-auto px-4 hidden md:block">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
          <div className="flex flex-col md:flex-row items-stretch gap-1">
            <div className="flex-1 relative">
              <label htmlFor="date" className="sr-only">Select Date</label>
              <div className="flex items-center gap-4 px-2 py-1 cursor-pointer" onClick={() => setShowCalendarDesktop(!showCalendarDesktop)}>
                <FaCalendar className="text-gray-600" />
                <input
                  type="text"
                  id="date"
                  className="w-full px-4 py-3 border-r border-gray-200 rounded-lg focus:ring-0 focus:border-none transition-all text-gray-600"
                  value={formatDateString(selectedDate)}
                  onChange={(dateStr) => {
                    setSelectedDate(dateStr)
                  }}
                  
                />
              </div>
              {showCalendarDesktop && (
                <div className="absolute z-50 mt-2">
                    <Calendar
                        onChange={(date) => {
                            setSelectedDate(date);
                            setShowCalendarDesktop(false);
                            
                        }}
                        formatShortWeekday={(locale, date) => {
                          const short = date.toLocaleDateString("en-US", { weekday: "short" }); // e.g. Mon
                          return short.charAt(0).toUpperCase() + short.charAt(1).toLowerCase();
                        }}

                        minDate={new Date()}
                        value={selectedDate}
                    />
                </div>
              )}
            </div>

            <div className="flex-1">
              <label htmlFor="promo" className="sr-only">Promotion Code</label>
              <div className="flex items-center gap-4 px-2 py-1">
                <FaTag className="text-gray-600" />
                <input
                  type="text"
                  id="promo"
                  value={promoCode}
                  onChange={(e) => setPromo(e.target.value, "promo")}
                  placeholder="Promotion Code (Optional)"
                  className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-600"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-md hover:shadow-lg"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Mobile */}
      <div className="max-w-5xl mx-auto px-4 block md:hidden">
        <form className="bg-white rounded-2xl p-2 border-2 border-gray-200">
          <div className="flex-1 relative">
            <label htmlFor="date" className="sr-only">Select Date</label>
            <div className="flex items-center gap-2 px-2 py-1 cursor-pointer" onClick={() => setShowCalendarMobile(!showCalendarMobile)}>
              <FaCalendar className="text-gray-600 text-sm" />
              <input
                type="text"
                id="date"
                className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-600 text-sm cursor-pointer"
                value={formatDateString(selectedDate)}
                
                readOnly
              />
            </div>
            {showCalendarMobile && (
              <div className="absolute z-50 mt-2">
                <Calendar
                  onChange={(date) => {
                    setSelectedDate(date);
                    setShowCalendarMobile(false);
                 
                  }}
                  minDate={new Date()}
                  value={selectedDate}
                />
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  )
}

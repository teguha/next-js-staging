"use client"

import { useSearchParams } from 'next/navigation';
import { Activity, useState , useEffect } from "react"
// import { Head } from "next/document"
import Header from "../components/Header"
import HeroSectionSearch from "../components/HeroSectionSearch"
import Filter from "../components/Filter"
import FilterPackage from "../components/FilterPackage"
import FilterCart from "../components/FilterCart"
import Footer from "../components/Footer"
import { FaInfoCircle } from "react-icons/fa";
import { FaShoppingBag , FaCompass} from "react-icons/fa"
import { FaChevronLeft, FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa"
import ActivityNotAvailable from "../components/ActivityNotAvb"
import { set } from 'date-fns';

export default function Search(){
    const Category = [
        {
            'id': 1,
            'name': 'Watersport Bali Packages'
        },
        {
            'id': 2,
            'name': 'Snorkeling Activity'
        },
        {
            'id': 3,
            'name': 'Other Activities'
        }
    ];

    const DataPackage = [
        {
            'id'    : 1,
            'name'  : 'Bali Watersport - Parasailing + Jet Ski + Banana Boat',
            'desc'  : 'Welcome to an all-inclusive Bali adventure, combining the excitment of watersport, the beauty of Padang Padang Beach and the splendor of Uluwatu Temple',
            'date'  : '04-12-2025',
            'category_type' : 1,
            'promo_code'    : 'HSJHSJKHDS',
            'image' : [
                {
                    'id'    : 1,
                    'img'   : "https://www.befreetour.com/img/produk/bali-water-sports/bali-water-sports_6243f29e76ca02b9d0e373022c13ce96f2ed06bc.jpg",
                    'name'  : "image 1"
                },
                {
                    'id'    : 2,
                    'img'   : "https://visitbalitour.com/wp-content/uploads/2015/09/bali-jet-ski-bali-tour-2602415296-1666395775840.jpg",
                    'name'  : "image 2"
                },
                {
                    'id'    : 3,
                    'img'   : "https://fundaynusadua.com/wp-content/uploads/2024/08/fdnd-ultimate2.jpg",
                    'name'  : "image 3"
                }
            ],
            'rates' : [
                {
                    "id"    : 1,
                    "name"  : "Base Rate",
                    "old_price" : 2400000,
                    "price" : 1200000,
                    "disc"  : 50,
                    "unit"  : "Pax",
                    "date"  : "09-11-2025",
                    "qty"   : 5
                },
                {
                    "id"    : 2,
                    "name"  : "Premium Rate",
                    "old_price" : 4800000,
                    "price" : 2400000,
                    "disc"  : 50,
                    'unit'  : "Pax",
                    "date"  : "09-11-2025",
                    "qty"   : 5
                }
            ]
        },
        {
            'id'    : 2,
            'name'  : 'Bali Watersport + Quad Bike',
            'desc'  : 'Welcome to an all-inclusive Bali adventure, combining the excitment of watersport, the beauty of Padang Padang Beach and the splendor of Uluwatu Temple',
            'date'  : '04-12-2025',
            'category_type' : 1,
            'promo_code'    : 'hjhjhjhjy',
            'image' : [
                {
                    'id'    : 1,
                    'img'   : "https://www.befreetour.com/img/produk/bali-water-sports/bali-water-sports_6243f29e76ca02b9d0e373022c13ce96f2ed06bc.jpg",
                    'name'  : "image 1"
                },
                {
                    'id'    : 2,
                    'img'   : "https://visitbalitour.com/wp-content/uploads/2015/09/bali-jet-ski-bali-tour-2602415296-1666395775840.jpg",
                    'name'  : "image 2"
                },
                {
                    'id'    : 3,
                    'img'   : "https://fundaynusadua.com/wp-content/uploads/2024/08/fdnd-ultimate2.jpg",
                    'name'  : "image 3"
                }
            ],
            'rates' : [
                {
                    "id"    : 1,
                    "name"  : "Base Rate",
                    "old_price" : 2000000,
                    "price" : 1200000,
                    "disc"  : 40,
                    "unit"  : "Pax",
                    "date"  : '01-12-2025',
                    "qty"   : 5
                },
            ]
        },
        {
            'id'    : 3,
            'name'  : 'Snorkeling Blue Lagoon + Monkey Bar + Waterfall',
            'desc'  : 'Welcome to an all-inclusive Bali adventure, combining the excitment of watersport, the beauty of Padang Padang Beach and the splendor of Uluwatu Temple',
            'date'  : '03-12-2025',
            'category_type' : 2,
            'promo_code'    : 'HSJSAI22',
            'image' : [
                {
                    'id'    : 1,
                    'img'   : "https://www.befreetour.com/img/produk/bali-water-sports/bali-water-sports_6243f29e76ca02b9d0e373022c13ce96f2ed06bc.jpg",
                    'name'  : "image 1"
                },
                {
                    'id'    : 2,
                    'img'   : "https://visitbalitour.com/wp-content/uploads/2015/09/bali-jet-ski-bali-tour-2602415296-1666395775840.jpg",
                    'name'  : "image 2"
                },
                {
                    'id'    : 3,
                    'img'   : "https://fundaynusadua.com/wp-content/uploads/2024/08/fdnd-ultimate2.jpg",
                    'name'  : "image 3"
                }
            ],
            'rates' : [
                {
                    "id"    : 1,
                    "name"  : "Base Rate",
                    "old_price" : 2400000,
                    "price" : 1200000,
                    "disc"  : 50,
                    "unit"  : "Pax",
                    'date'  : '30-11-2025',
                    "qty"   : 5
                },
                {
                    "id"    : 2,
                    "name"  : "Premium Rate",
                    "old_price" : 4800000,
                    "price" : 2400000,
                    "disc"  : 50,
                    'unit'  : "Pax",
                    'date'  : '30-11-2025',
                    "qty"   : 5
                }
            ]
        },
        {
            'id'    : 4,
            'name'  : 'Bali ATV Package',
            'desc'  : 'Welcome to an all-inclusive Bali adventure, combining the excitment of watersport, the beauty of Padang Padang Beach and the splendor of Uluwatu Temple',
            'date'  : '05-12-2025',
            'category_type' : 3,
            'promo_code'    : 'HSJHJSJ888',
            'image' : [
                {
                    'id'    : 1,
                    'img'   : "https://www.befreetour.com/img/produk/bali-water-sports/bali-water-sports_6243f29e76ca02b9d0e373022c13ce96f2ed06bc.jpg",
                    'name'  : "image 1"
                },
                {
                    'id'    : 2,
                    'img'   : "https://visitbalitour.com/wp-content/uploads/2015/09/bali-jet-ski-bali-tour-2602415296-1666395775840.jpg",
                    'name'  : "image 2"
                },
                {
                    'id'    : 3,
                    'img'   : "https://fundaynusadua.com/wp-content/uploads/2024/08/fdnd-ultimate2.jpg",
                    'name'  : "image 3"
                }
            ],
            'rates' : [
                {
                    "id"    : 1,
                    "name"  : "Base Rate",
                    "old_price" : 2400000,
                    "price" : 1200000,
                    "disc"  : 50,
                    "unit"  : "Pax",
                    'date'  : '01-12-2025',
                    "qty"   : 5
                },
                {
                    "id"    : 2,
                    "name"  : "Premium Rate",
                    "old_price" : 4800000,
                    "price" : 2400000,
                    "disc"  : 50,
                    'unit'  : "Pax",
                    'date'  : '01-12-2025',
                    "qty"   : 5
                }
            ]
        },
        {
            'id'    : 5,
            'name'  : 'Ayung Rafting',
            'desc'  : 'Welcome to an all-inclusive Bali adventure, combining the excitment of watersport, the beauty of Padang Padang Beach and the splendor of Uluwatu Temple',
            'date'  : '06-12-2025',
            'category_type' : 3,
            'promo_code'    : 'HSJ9292JSS',
            'image' : [
                {
                    'id'    : 1,
                    'img'   : "https://www.befreetour.com/img/produk/bali-water-sports/bali-water-sports_6243f29e76ca02b9d0e373022c13ce96f2ed06bc.jpg",
                    'name'  : "image 1"
                },
                {
                    'id'    : 2,
                    'img'   : "https://visitbalitour.com/wp-content/uploads/2015/09/bali-jet-ski-bali-tour-2602415296-1666395775840.jpg",
                    'name'  : "image 2"
                },
                {
                    'id'    : 3,
                    'img'   : "https://fundaynusadua.com/wp-content/uploads/2024/08/fdnd-ultimate2.jpg",
                    'name'  : "image 3"
                }
            ],
            'rates' : [
                {
                    "id"    : 1,
                    "name"  : "Base Rate",
                    "old_price" : 2400000,
                    "price" : 1200000,
                    "disc"  : 50,
                    "unit"  : "Pax",
                    'date'  : '30-11-2025',
                    "qty"   : 5
                },
                {
                    "id"    : 2,
                    "name"  : "Premium Rate",
                    "old_price" : 2400000,
                    "price" : 2400000,
                    "disc"  : 0,
                    'unit'  : "Pax",
                    'date'  : '30-11-2025',
                    "qty"   : 5
                }
            ]
        },
    ];

    const searchParams = useSearchParams();
    const dateSearch = searchParams.get('date');   
    const promoSearch = searchParams.get('promo'); 
    const categrySearch = searchParams.get('category');
    const packageIdSearch = searchParams.get('packageId');

    const [date,  setDate] = useState(dateSearch ?? new Date());
    const [dateStr, setDateStr] = useState();
    const [promo, setPromo] = useState("");
    const [category, setCategory] = useState("");
    const [cart , setCart] = useState([]);      // array list
    const [delQty, setDelQty] = useState({});   //object
    const [lastUpdateQty , setLastUpdateQty] = useState(null);
    const [showCartPanel, setShowCartPanel] = useState(false);
    const [paymentPage , setPaymentPage] = useState(false);
    const handleGoToPayment = () => {
        setPaymentPage(true);
    };

    useEffect(() => {
        if (dateSearch) setDate(dateSearch ?? new Date());
        if (promoSearch) setPromo(promoSearch);
        if (categrySearch) setCategory(Number(categrySearch));
    }, [dateSearch, promoSearch, categrySearch]);

    // find category avalaible if category from search
    if(categrySearch){
        // ambil data from api
    }

    if(packageIdSearch){
        // ambil data from api
    }

    // ketika sudah dapat value date dan promo dari filter component 
    const handleFilter = (valueDate, valuePromo, valueDateStr) => {
        setDate(valueDate);
        setPromo(valuePromo);
        setDateStr(valueDateStr)
        setCategory("");
        // console.log(valueDate, valuePromo, valueDateStr);
    }

    // ketika filter dilakukan
    const ResultPackage = DataPackage.filter((item) => {
        if(date && promo){
            return item.date === date && item.promo_code === promo
        }else if(date){
            return item.date === date
        }else if(promo){
            return item.promo_code === promo;
        }else{
            return item;
        }
    });

    // ketika sudah ada category
    // hasil filter data di cek lagi apakah ada data atau kosong
    const filtered = ResultPackage?.filter(
        item => item.category_type === category
    ) || [];


    // ketika category masih kosong belum dipilih sama sekali
    // filter categry sort menampilkan data yang ada di paling atas dan kosong di paling bawah
    const sortedCategory = Category.map(cat => {
        const items = ResultPackage.filter(item => item.category_type === cat.id);
        return {
            ...cat,
            items
        }
    }).sort((a, b) => b.items.length - a.items.length);


    const handlePlus = (item, packageId, packageDate, packageName, packagaImage, promoCode, dataFrom) => {
        // console.log(promoCode);
        setCart(prev => {
            const rateId = dataFrom === "cart" ? item.rateId : item.id;

            const existing = prev.find(c => c.id === packageId && c.rateId === rateId && c.rateDate === packageDate);
            if(existing){
                const newQty = existing.qty + 1;
                if(newQty > existing.maxQty) return prev; // jangan melebihi stock

                // update qty package yang sudah ada
                return prev.map(c => c.id === packageId && c.rateId === rateId && c.rateDate === packageDate
                    ? {...c, qty: newQty}
                    : c
                );
            } else {
                
                return [...prev, {
                    id: packageId,
                    rateId: rateId,
                    rateName: item.name,
                    price: item.price,
                    qty: 1,
                    maxQty: item.qty,
                    rateDate: packageDate,
                    name: packageName || "", // optional,
                    packagaImage : packagaImage,
                    promoCode: promoCode == promo ? promoCode : "",
                }];
            }
        });
    };


    const handleMinus = (item , packageId, packageDate, packageName, promoCode, dataFrom) => {
        setCart(prev => {
            const rateId = dataFrom === "cart" ? item.rateId : item.id;
            const existing = prev.find(c => c.id === packageId && c.rateId === rateId && c.rateDate === packageDate );
            if(!existing) return prev;

            const newQty = Math.max(existing.qty - 1, 0);
            if(dataFrom === "cart"){
                if(newQty === 0 ){
                    // jika datanya dikurang sampe habis maka jadikan min = 1
                    newQty == 1;
                    return prev.map(c => c.id === packageId && c.rateId === rateId && c.rateDate === packageDate ? {...c, qty: 1} : c);
                }
            }

            if(newQty === 0){
                return prev.filter(c => !(c.id === packageId && c.rateId === rateId && c.rateDate === packageDate ));
            } else {
                return prev.map(c => c.id === packageId && c.rateId === rateId && c.rateDate === packageDate  ? {...c, qty: newQty} : c);
            }
        });
    };

    // ketika akan menghapus item pada cart
    const handleDeleteCart = (itemId, itemRateId, itemDate) => {
        setCart((prev) => prev.filter((p) => !(p.id === itemId && p.rateId === itemRateId && p.rateDate === itemDate)));
    }
    // perhitungan handle qty



    return(
        <>

        {
            !paymentPage ? (
                <>
                    <div className="hidden md:block">
                        <Header />
                    </div>
                    <HeroSectionSearch/>
                </>
            ) : (
                <div className="hidden md:block">
                    <Header />
                </div>
            )
        }

        <section className="relative bg-gray-50 mb-18 md:mb-0">
            <div className ="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 py-4 container mx-auto">
                
                {
                    !paymentPage ? (
                        <>
                            {/*  data section */}
                                <div className="col-span-1 md:col-span-2 lg:col-span-2 ">
                                    
                                    {/* Filter */}
                                    <section className="fixed top-0 w-full z-10 md:relative z-20 border-b border-gray-200 bg-white py-4 shadow-2xl sm:border-none sm:bg-transparent sm:py-0 sm:shadow-none">

                                        <div className="block md:hidden flex flex-row justify-between mx-auto px-4 mb-2">
                                            <div className="flex flex-row justify-start">
                                                <FaChevronLeft className="text-gray-900 text-xl mt-1 mr-2" />
                                                <p className="text-gray-900 font-bold text-xl">Watersport Bali</p>
                                            </div>
                                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-300 text-white">
                                                <FaShoppingBag className="w-4 h-4" onClick={() => setShowCartPanel(prev => !prev)} />
                                            </div>
                                        </div>

                                        {/* filter */}
                                        <Filter onUpdateFilter={handleFilter} dateSearch={date} promoSearch={promo} />

                                    </section>
                                    {/* Filter */}

                                    {/* Category */}
                                    <section className="relative mt-36 md:mt-10 bg-gray-50">
                                        <div className="max-w-5xl mx-auto px-4">
                                            <h2 className="text-lg text-gray-700 font-bold">Jump To</h2>
                                            <div className="flex flex-wrap justify-start gap-4 mt-4">
                                                {
                                                    Category.map((cat) => {
                                                        const isActive = cat.id === category;
                                                        
                                                        return (
                                                            <button 
                                                                key={cat.id} 
                                                                onClick={() => (setCategory(cat.id))}
                                                                className={`
                                                                    border border-gray-200 shadow-md rounded-xl bg-white
                                                                    text-xs md:text-sm md:text-base text-gray-600 font-semibold px-5 py-3
                                                                    transition-all duration-200
                                                                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                                                                    ${isActive 
                                                                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-400 shadow-lg scale-[1.02]" 
                                                                        : "hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white hover:border-blue-400 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                                                                    }
                                                                `}
                                                                aria-label={`Jump to ${cat.name} section`}
                                                            >
                                                                {cat.name}
                                                            </button>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </section>
                                    {/* Category */}
                                    
                                    {/* Watersport Bali Package */}
                                    {
                                        category ? (
                                            <section className="relative bg-gray-50 mt-2">
                                                <h1 className="text-center text-gray-700 text-2xl font-bold py-10 ">{Category.find(cat => cat.id === category).name}</h1>
                                                {/* jika category ada di set */}
                                                {/* package 1 */}
                                                {
                                                    filtered.length > 0 ? (
                                                        filtered.map(item => (
                                                            <FilterPackage
                                                                key={item.id}
                                                                data={item}
                                                                cart={cart}
                                                                handleMinus={handleMinus}  // <-- pastikan ini ada juga
                                                                handlePlus={handlePlus} 
                                                                // onUpdateCart={handleUpdateCart}
                                                                // delQty={delQty}
                                                                dateStr={dateStr}
                                                            />
                                                        ))
                                                    ) : (
                                                        <ActivityNotAvailable />
                                                    )
                                                }
                                            </section>
                                        ) : (
                                            <>
                                                {
                                                sortedCategory.some(cat => cat.items.length > 0) ? (
                                                    sortedCategory.map(cat => (
                                                        cat.items.length > 0 && (
                                                                <section key={cat.id} className="relative bg-gray-50 mt-2">
                                                                    <h1 className="text-center text-gray-700 text-2xl font-bold py-10">
                                                                        {cat.name}
                                                                    </h1>
                    
                                                                    {cat.items.map(item => (
                                                                        <FilterPackage
                                                                            key={item.id}
                                                                            data={item}
                                                                            cart={cart}
                                                                            handleMinus={handleMinus}  // <-- pastikan ini ada juga
                                                                            handlePlus={handlePlus} 
                                                                            // onUpdateCart={handleUpdateCart}
                                                                            // delQty={delQty}
                                                                            dateStr={dateStr}
                                                                        />
                                                                    ))}
                                                                </section>
                                                            )
                                                        ))
                                                    ) : (
                                                        <ActivityNotAvailable />
                                                    )
                                                }
                                            </>
                                        )
                                    }
                                    {/* Watersport Bali Package */}
                                    
                                </div>
                            {/*  data section */}
                        </>
                    ) : 
                    (
                        <>
                        <div className="col-span-1 md:col-span-2 lg:col-span-2 ">
                            <p className='text-gray-600 font-normal text-lg'>
                                Booking Section
                            </p>
                        </div>
                        </>
                    )
                }
                

                {/* cart */}
                <FilterCart  cart={cart} handleDeleteCart={handleDeleteCart} handleMinus={handleMinus}  handlePlus={handlePlus} showCartPanel={showCartPanel} setShowCartPanel={setShowCartPanel} handleCheckOut ={handleGoToPayment} paymentPage ={paymentPage} />
                {/* cart */}
            
            </div>
        </section>

        {/* Footer */}
        <Footer/>
        </>
    )
}
"use client"

import { useState } from "react"
import Head from 'next/head';
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FilterMain from "../components/FilterMain";
import PackageCard from "../components/PackageCard";
import Footer from "../components/Footer";

export default function Home() {
    const websiteSchema = {
        "@context": "http://schema.org",
        "@type": "WebSite",
        "url": "https://yourwebsite.com",
        "name": "Bali Water Sports",
        "description": "Explore the best water sports in Bali.",
        "publisher": {
        "@type": "Organization",
        "name": "Bali Water Sports",
        "logo": {
            "@type": "ImageObject",
            "url": "https://yourwebsite.com/logo.png"
        }
        }
    };

    const watersportSchema = {
        "@context": "http://schema.org",
        "@type": "Product",
        "name": "Bali Jet Ski Adventu  re",
        "description": "Experience the thrill of jet skiing in Bali with our professional instructors.",
        "image": "https://yourwebsite.com/images/jet-ski.jpg",
        "url": "https://yourwebsite.com/activities/jet-ski-adventure",
        "brand": {
        "@type": "Brand",
        "name": "Bali Water Sports"
        },
        "offers": {
        "@type": "Offer",
        "url": "https://yourwebsite.com/activities/jet-ski-adventure",
        "priceCurrency": "IDR",
        "price": "1000000",
        "priceValidUntil": "2025-12-31",
        "itemCondition": "http://schema.org/NewCondition",
        "availability": "http://schema.org/InStock",
        "seller": {
            "@type": "Organization",
            "name": "Bali Water Sports"
        }
        }
    };

    const atvSchema = {
        "@context": "http://schema.org",
        "@type": "Product",
        "name": "Bali ATV Adventure",
        "description": "Experience the best ATV riding in Bali with our all-terrain vehicles.",
        "image": "https://yourwebsite.com/images/atv-adventure.jpg",
        "url": "https://yourwebsite.com/activities/atv-adventure",
        "brand": {
            "@type": "Brand",
            "name": "Bali Water Sports"
        },
        "offers": {
            "@type": "Offer",
            "url": "https://yourwebsite.com/activities/atv-adventure",
            "priceCurrency": "IDR",
            "price": "600000",
            "priceValidUntil": "2025-12-31",
            "itemCondition": "http://schema.org/NewCondition",
            "availability": "http://schema.org/InStock",
            "seller": {
            "@type": "Organization",
            "name": "Bali Water Sports"
            }
        }
    };

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
            'promo_code'    : 'HSJHHSAJHA',
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
            'date'  : '02-12-2025',
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
                    "price" : 500000,
                    "disc"  : 80,
                    'unit'  : "Pax",
                    'date'  : '30-11-2025',
                    "qty"   : 5
                }
            ]
        },
    ];

    const sortedPackage = Category.map(cat => {
        const items = DataPackage.filter(item => item.category_type === cat.id);
        return {
            ...cat,
            items
        }
    }).sort((a, b) => b.items.length - a.items.length);

    // ini akan mengurutkna by category data
    const sortedByCategory = sortedPackage.sort((a,b) => (a.id === 3 ? 1 : b.id === 3 ? -1 : 0))
    // 1 artimya dibawa kebelakang , dan -1 artinya dibawa kedepan 

    return(
    <>
        <Head>
            {/* Meta Tags untuk halaman ini */}
            <title>Home Page - Bali Water Sports</title>
            <meta name="description" content="Explore the best water sports in Bali." />
            <meta property="og:title" content="Home Page - Bali Water Sports" />
            <meta property="og:description" content="Enjoy thrilling water activities in Bali." />
            <meta property="og:image" content="https://www.befreetour.com/img/produk/bali-water-sports/bali-water-sports_6243f29e76ca02b9d0e373022c13ce96f2ed06bc.jpg" />
            <meta property="og:url" content="https://yourwebsite.com" />
            
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />

            {/* Menambahkan semua schema untuk produk/aktivitas */}
            <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(watersportSchema) }}
            />
            <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(atvSchema) }}
            />
        </Head>

        <div>
            <div className="block sticky top-0 z-50 md:relative md:top-auto md:z-auto shadow-lg">
                <Header />
            </div>
            <HeroSection />
            <section className="relative z-20 -mt-12">
                <FilterMain />
            </section>

            {/* watersport bali package */}
            {
                sortedByCategory.map((cat, index) => (
                    <section className={`py-42 md:py-20 lg:py-20 ${
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        } -mt-20 md:-mt-12 lg:-mt-12`}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <header className="mb-10">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{cat.name}</h2>
                                <p className="text-gray-600">Experience Bali's nature through land and water thrills as well</p>
                            </header>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {
                                    cat.items.map(item =>{

                                        // untuk mengambil data rates paling murah  pada item, maka pakai reduce
                                        const cheapRates = item.rates.reduce(
                                            (min, rate) => (rate.price < min.price ? rate : min),
                                            item.rates[0] // set awal reduce
                                        )
            
                                        return (
                                            <PackageCard 
                                                image={item.image[0].img}
                                                data = {item}
                                                rateData ={cheapRates}
                                                key={item.id}
                                                title={item.name}
                                                oldPrice={cheapRates.old_price}
                                                newPrice={cheapRates.price}
                                                discount={cheapRates.disc}
                                                // link="#details"
                                            />
                                        )
                                    })
                                }
                            </div>

                            <div className="text-center mt-12">
                                <a href="#all-packages" className="inline-block bg-white text-gray-800 font-semibold px-8 py-4 rounded-lg border-2 border-blue-600 hover:bg-blue-700 hover:text-white hover:border-blue-400 hover:shadow-lg hover:scale-[0.98] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md">
                                Show All {cat.name}
                                </a>
                            </div>
                        </div>
                    </section>
                ))
            }

            <Footer />
        </div>
    </>
    )
}
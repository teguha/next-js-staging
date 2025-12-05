"use client"
import { useRouter } from 'next/navigation';
import { useState } from "react"
import Head from 'next/head';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FilterMain from "./components/FilterMain";
import PackageCard from "./components/PackageCard";
import Footer from "./components/Footer";
import { formatDate } from "date-fns";
import Link from 'next/link';

export default function Home() {

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
            'date'  : '06-12-2025',
            'category_type' : 1,
            'promo_code'    : 'Buy1Get1Free',
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
                    "qty"   : 5
                },
                {
                    "id"    : 2,
                    "name"  : "Premium Rate",
                    "old_price" : 4800000,
                    "price" : 2400000,
                    "disc"  : 50,
                    'unit'  : "Pax",
                    "qty"   : 5
                }
            ]
        },
        {
            'id'    : 2,
            'name'  : 'Bali Watersport + Quad Bike',
            'desc'  : 'Welcome to an all-inclusive Bali adventure, combining the excitment of watersport, the beauty of Padang Padang Beach and the splendor of Uluwatu Temple',
            'date'  : '07-12-2025',
            'category_type' : 1,
            'promo_code'    : 'WaterSport25',
            'image' : [
                {
                    'id'    : 1,
                    'img'   : "https://www.baliskytour.com/images/WatersportsSpaPackages1.jpg",
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
                    "qty"   : 5
                },
            ]
        },
        {
            'id'    : 3,
            'name'  : 'Snorkeling Blue Lagoon + Monkey Bar + Waterfall',
            'desc'  : 'Welcome to an all-inclusive Bali adventure, combining the excitment of watersport, the beauty of Padang Padang Beach and the splendor of Uluwatu Temple',
            'date'  : '08-12-2025',
            'category_type' : 2,
            'promo_code'    : 'BlueLagoonSnorkeling',
            'image' : [
                {
                    'id'    : 1,
                    'img'   : "https://www.travelersuniverse.com/wp-content/uploads/2025/06/1_bali-snorkeling-on-2-spots-with-lunch-and-transport-800x400.jpg",
                    'name'  : "image 1"
                },
                {
                    'id'    : 2,
                    'img'   : "https://d18sx48tl6nre5.cloudfront.net/lg_622b14bff92932f85926c9b677db3e81.jpg",
                    'name'  : "image 2"
                },
                {
                    'id'    : 3,
                    'img'   : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvwblT7-o8AlASATWdxNe6Y46moqwjFnbDwg&s",
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
                    "qty"   : 5
                },
                {
                    "id"    : 2,
                    "name"  : "Premium Rate",
                    "old_price" : 4800000,
                    "price" : 2400000,
                    "disc"  : 50,
                    'unit'  : "Pax",
                    "qty"   : 5
                }
            ]
        },
        {
            'id'    : 4,
            'name'  : 'Bali ATV Package',
            'desc'  : 'Welcome to an all-inclusive Bali adventure, combining the excitment of watersport, the beauty of Padang Padang Beach and the splendor of Uluwatu Temple',
            'date'  : '06-12-2025',
            'category_type' : 3,
            'promo_code'    : 'AtvGo25',
            'image' : [
                {
                    'id'    : 1,
                    'img'   : "https://d3uyff779abz3k.cloudfront.net/-bali-tayatha-com-/image/Everything-about-Accidents-in-Bali-ATV-Tour.jpg",
                    'name'  : "image 1"
                },
                {
                    'id'    : 2,
                    'img'   : "https://q-xx.bstatic.com/xdata/images/xphoto/800x800/478124266.jpg?k=1a9ef2e74a8cb4caacc374dedebac45ac69414554fb0762d5ca230dc276ddcde&o=",
                    'name'  : "image 2"
                },
                {
                    'id'    : 3,
                    'img'   : "https://www.baliquadbiking.com/wp-content/uploads/2023/03/4-Best-ATV-in-Bali-with-Unique-Track.jpg",
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
                    "qty"   : 5
                },
                {
                    "id"    : 2,
                    "name"  : "Premium Rate",
                    "old_price" : 4800000,
                    "price" : 2400000,
                    "disc"  : 50,
                    'unit'  : "Pax",
                    "qty"   : 5
                }
            ]
        },
        {
            'id'    : 5,
            'name'  : 'Ayung Rafting',
            'desc'  : 'Welcome to an all-inclusive Bali adventure, combining the excitment of watersport, the beauty of Padang Padang Beach and the splendor of Uluwatu Temple',
            'date'  : '07-12-2025',
            'category_type' : 3,
            'promo_code'    : 'Rafting25',
            'image' : [
                {
                    'id'    : 1,
                    'img'   : "https://www.raftingbali.net/wp-content/uploads/2023/10/River-Rafting-in-Bali-FAQ.jpg",
                    'name'  : "image 1"
                },
                {
                    'id'    : 2,
                    'img'   : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT9Ov3IF58tjmreou1Vtb6lCe5iLb5VTgdAQ&shttps://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2023/07/05/bfdf8c7d-59ad-4759-85b0-e9808067cd54-1688523953290-a9a065b7d464176adf01e5e7d3e10c6e.jpg",
                    'name'  : "image 2"
                },
                {
                    'id'    : 3,
                    'img'   : "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/e6/80/e9.jpg",
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
                    "qty"   : 5
                },
                {
                    "id"    : 2,
                    "name"  : "Premium Rate",
                    "old_price" : 2400000,
                    "price" : 500000,
                    "disc"  : 80,
                    'unit'  : "Pax",
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

    const router = useRouter(); // penting! harus ada ini
    function handleSearch(catId) {
      // console.log('ini', catId)
      router.push(`/search?date=${formatDate(new Date(), 'dd-MM-yyyy')}&promo=&category=${catId}`);
    }


    // SCHEMA ORG
    // ORGANIZATION SCHEMA
    const websiteOrgShema = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Bali Water Sports",
        "url": "https://yourwebsite.com",
        "logo": "https://yourwebsite.com/logo.png",
        "sameAs": [
          "https://www.instagram.com/yourbrand",
          "https://www.facebook.com/yourbrand",
          "https://www.youtube.com/yourbrand"
        ]
      }
    ];

    const websiteSchema = [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Bali Water Sports",
        "url": "https://yourwebsite.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://yourwebsite.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ];

    const webPageSchema =[
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Home - Bali Water Sports",
        "url": "https://yourwebsite.com",
        "description": "Explore watersports, snorkeling, water rafting, paras ATV rides, Bali attractions and online ticket booking.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://yourwebsite.com/#website"
        },
        "about": {
          "@type": "Organization",
          "@id": "https://yourwebsite.com/#organization"
        }
      }
    ];

    const itemListSchema = [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Popular Activities",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "url": "https://yourwebsite.com/activities/jet-ski-adventure"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "url": "https://yourwebsite.com/activities/atv-adventure"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "url": "https://yourwebsite.com/activities/water-rafting"
          }
        ]
      }
    ];

    const productServiceSchema = [
      {
        "@context": "https://schema.org",
        "@type": ["Product", "Service"],
        "name": "Bali Jet Ski Adventure",
        "description": "Experience an exciting jet ski ride at Tanjung Benoa with certified instructors.",
        "image": "https://yourwebsite.com/images/jet-ski.jpg",
        "url": "https://yourwebsite.com/activities/jet-ski-adventure",
        "brand": {
          "@type": "Organization",
          "name": "Bali Water Sports"
        },
        "offers": {
          "@type": "Offer",
          "name": "Starting Price",
          "priceCurrency": "IDR",
          "price": "250000",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "url": "https://yourwebsite.com/activities/jet-ski-adventure",
          "seller": {
            "@type": "Organization",
            "name": "Bali Water Sports"
          }
        }
      }
    ];
    // SCHEMA ORG



    return(
    <>
        <Head>
            {/* Meta Tags untuk halaman ini */}
            <title>Bali Water Sports & Activities | Jet Ski, Snorkeling, Water Rafting</title>
            <meta name="description" content="Book Bali water sports, Snorkeling, ATV rides, parasailing, rafting, and attraction tickets with instant confirmation." 
            />

            {/* Canonical */}
            <link rel="canonical" href="https://yourwebsite.com" />

            {/* OG */}
            <meta property="og:title" content="Bali Water Sports & Activities | Jet Ski, ATV, Tickets" />
            <meta property="og:description" content="Discover watersports, ATV, rafting and Bali attraction tickets with instant booking." />
            <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
            <meta property="og:url" content="https://yourwebsite.com" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            
            <script type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteOrgShema) }}
            />
            <script type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <script type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
            />
            <script type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productServiceSchema) }}
            />
        </Head>

        <div>
            <div className="block sticky top-0 z-50 md:relative md:top-auto md:z-auto shadow-lg">
                <Header />
            </div>
            <HeroSection />
            <section className="relative z-20 -mt-15 md:-mt-12">
                <FilterMain />
            </section>

            {/* watersport bali package */}
            {
                sortedByCategory.map((cat, index) => (
                    <section className={`${index === 0 ? "pt-42 pb-20 -mt-30" : "py-20 -mt-10"}  md:py-20 lg:py-20 ${
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }  md:-mt-12 lg:-mt-12`}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <header className={`${index === 0 ? "mb-10" : "mb-2 md:mb-10"}`}>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{cat.name}</h2>
                                <p className="text-gray-600">Experience Bali's nature through land and water thrills as well</p>
                            </header>

                            <div className="flex overflow-x-auto gap-4 px-2 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                                {
                                    cat.items.map(item =>{

                                        // untuk mengambil data rates paling murah  pada item, maka pakai reduce
                                        const cheapRates = item.rates.reduce(
                                            (min, rate) => (rate.price < min.price ? rate : min),
                                            item.rates[0] // set awal reduce
                                        )
            
                                        return (
                                            <div
                                                key={item.id}
                                                className="min-w-[92%] sm:min-w-[60%] md:min-w-0"  // <-- penting untuk 1.5 card
                                            >
                                                <PackageCard 
                                                    image={item.image[0].img}
                                                    data = {item}
                                                    rateData ={cheapRates}
                                                    key={item.id}
                                                    title={item.name}
                                                    oldPrice={cheapRates.old_price}
                                                    newPrice={cheapRates.price}
                                                    discount={cheapRates.disc}
                                                    handleSearch={handleSearch}
                                                    // link="#details"
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className="text-center mt-12 mb-12">
                                <button  onClick={() => handleSearch(cat.id ?? 1)} className="inline-block bg-white text-gray-800 font-semibold px-8 py-4 rounded-lg border-2 border-blue-600 hover:bg-blue-700 hover:text-white hover:border-blue-400 hover:shadow-lg hover:scale-[0.98] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md">
                                Show All Packages
                                </button>
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
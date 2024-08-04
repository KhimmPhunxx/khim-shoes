'use client'

import React from 'react'
import { BiCartAdd } from 'react-icons/bi'
import AOS from 'aos'
import 'aos/dist/aos.css'

const News_Arrival = () => {

    React.useEffect(() => {
        AOS.init(
            {
                duration: 1000
            }
        )
    }, [])

    const shoes_list = [
        {
            id : 1,
            name : 'Nike Air Max 270',
            desc: 'Brand new Nike Air Max 270',
            price: 120,
            ds_price: 100,
            status: 'New',
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/trm9jrvijzuqzmkyah2t/air-max-270-mens-shoes-KkLcGR.png'
        },
        {
            id : 2,
            name : 'Adidas Yeezy Boost 350',
            desc: 'Local made Adidas Yeezy Boost 350',
            price: 220,
            ds_price: 200,
            status: 'New',
            image: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558271.jpg'
        },
        {
            id : 3,
            name : 'Adidas Superstar',
            desc: 'Brand new Adidas Superstar',
            price: 160,
            ds_price: 140,
            status: 'New',
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_standard.jpg'
        },
        {
            id : 4,
            name : 'Vans Old Skool',
            desc: 'Made in USA Vans Old Skool',
            price: 310,
            ds_price: 290,
            status: 'New',
            image: 'https://images.vans.com/is/image/VansEU/VN000D3HY28-HERO?$PDP-MEDIA-SET-PREVIEW-RESOLUTION$'
        }
    ]

    return (
        <main className=' w-full mx-auto'>
            <section className=' max-w-7xl mx-auto'>
                <div className=' flex flex-col space-y-3'>
                    <h1 className=' text-4xl font-semibold text-center'>New Arrival</h1>
                    <p className=' text-sm text-center text-gray-600'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatem.
                    </p>
                </div>
                <div className=' mt-8'>
                    <div className=' grid md:grid-cols-4 gap-10'>
                        {
                            shoes_list.map((shoe, index) => (
                                <div key={index} className=' relative overflow-hidden' data-aos='fade-up'>
                                    <img src={shoe.image} alt="" className=' cursor-pointer hover:scale-105 duration-300 w-full h-[300px] object-cover' />
                                    <div className=' absolute top-0 left-0 bg-slate-800 text-white px-2 py-1 rounded-br-lg'>
                                        {shoe.status}
                                    </div>
                                    <div className=' p-2 space-y-2'>
                                        <h1 className=' text-xl font-semibold'>{shoe.name}</h1>
                                        <p className=' text-sm text-gray-600'>{shoe.desc}</p>
                                       <div className=' flex space-x-3'>
                                             <p className=' text-md text-red-600 line-through'>${shoe.price}</p>
                                             <p className=' text-md text-slate-800'>${shoe.ds_price}</p>
                                       </div>
                                    </div>
                                    <button className=' w-full font-bold hover:bg-slate-800 text-slate-800 hover:text-white duration-200 uppercase text-xs bg-slate-100 justify-center flex py-2 rounded-sm'>
                                       Buy Now 
                                    </button>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>

        </main>
    )
}

export default News_Arrival
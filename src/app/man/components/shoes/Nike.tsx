'use client'

import React from 'react'
import Nike_Shoes from './../../Json/List_ManShoes_Nike.json'
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { LuPlusCircle } from 'react-icons/lu'
import { BiCartAdd } from 'react-icons/bi'
import './main_home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Nike = () => {


    React.useEffect(() => {
        AOS.init(
            {
                duration: 1000
            }
        ), []})

    return (
        <main>
            <div className=' grid md:grid-cols-4 gap-10 px-1 md:px-0'>

                {
                    Nike_Shoes.man_shoes_nike.map((shoe, index) => (
                        <div key={index} className='content relative overflow-hidden' data-aos='fade-up'>

                            <div className="view-item absolute opacity-0 top-5 right-0 duration-300">


                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <button>
                                            <LuPlusCircle className="plus-icon text-gray-700 text-2xl" />
                                        </button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent className='md:w-[700px] w-[300px] bg-gray-100 p-2 md:p-8'>

                                        {/* List Detail Product by One */}
                                        <div className=' md:flex space-x-5'>
                                            <div className=' w-full h-56 md:h-96 md:w-1/2'>
                                                <img src={shoe.image} alt="" className=' w-full h-full object-cover' />
                                            </div>
                                            <div className=' w-1/2 space-y-5 h-full flex flex-col lg:justify-between'>
                                                <div className=' space-y-2'>
                                                    <h1 className=' text-xl md:text-3xl font-semibold'>{shoe.name}</h1>
                                                    <p className=' text-sm text-gray-600'>{shoe.desc}</p>
                                                    <div className=' flex space-x-3'>
                                                        <p className=' text-xl text-red-600 line-through'>${shoe.price}</p>
                                                        <p className=' text-xl text-slate-800'>${shoe.ds_price}</p>
                                                    </div>
                                                </div>
                                                <div className=' space-y-3 md:space-x-2'>
                                                    <button className=' bg-white border font-medium text-sm text-black py-3 px-4 rounded-sm'>Add to Cart</button>
                                                    <button className=' bg-white border font-medium text-sm text-black py-3 px-4 rounded-sm'>Buy Now</button>
                                                </div>
                                            </div>
                                        </div>

                                        <AlertDialogCancel>
                                            <button>Cancel</button>
                                        </AlertDialogCancel>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>

                            <div className=' w-full h-[300px] overflow-hidden'>
                                <img src={shoe.image} alt="" className=' cursor-pointer duration-300 w-full h-full object-cover' />
                            </div>
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
                                <BiCartAdd className=' text-lg' />
                                <span className=' ml-2 flex items-center'>Add to Cart</span>
                            </button>
                        </div>
                    ))
                }

            </div>
        </main>
    )
}

export default Nike
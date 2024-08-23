'use client'

import React from 'react'
import { BsFillCartPlusFill } from "react-icons/bs";
import { LuUserCircle } from "react-icons/lu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { TbMenuDeep } from "react-icons/tb";
import Link from 'next/link';


const Action_Button = () => {
  const menu_list = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Man',
      link: '/man'
    },
    {
      name: 'Woman',
      link: '/woman'
    },
    {
      name: 'Kids',
      link: '/kids'
    },
    {
      name: 'Sale',
      link: '/sale'
    }

  ]

  return (
    <div className='actionbutton flex space-x-4 lg:space-x-5 items-center'>
      <div className=' space-x-2 flex'>
        <div className="avarta flex items-center">
          <button>
            <LuUserCircle className=' text-2xl text-slate-800' />
          </button>
        </div>
        <div className="add-to-cart flex items-center">

          <Sheet>
            <SheetTrigger asChild>
              <button>
                <BsFillCartPlusFill className=' text-2xl text-slate-800' />
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>View Cart</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">

                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  Hello
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>

        </div>
      </div>
      <div className=' flex items-center'>
        <Sheet>
          <SheetTrigger asChild>
            <button>
              <TbMenuDeep className=' text-2xl text-slate-800' />
            </button>
          </SheetTrigger>
          <SheetContent side={'left'} className='w-[250px]'>

            

            <SheetClose asChild>
              <Link href='/'>
                <p className='block py-2 px-4 text-slate-800 hover:bg-slate-100 hover:text-white border-b`'>Home</p>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href='/man'>
                <p className='block py-2 px-4 text-slate-800 hover:bg-slate-100 hover:text-white border-b'>Man</p>
              </Link>
            </SheetClose>

          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

export default Action_Button
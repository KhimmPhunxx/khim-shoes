'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavigationBar = () => {

    const pathname = usePathname()

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
    <div className=' flex space-x-8'>  
       {/* {
              menu_list.map((menu, index) => (
                <Link key={index} href={menu.link}>
                     <p className='mx-3 font-medium text-sm '>{menu.name}</p>
                </Link>
              ))
       } */}

        {
            menu_list.map((menu, index) => (
                <Link key={index} href={menu.link}>
                    <p className={`mx-3 font-semibold hover:text-gray-900 duration-200 text-sm ${pathname === menu.link ? 'text-gray-900' : 'text-gray-500'}`}>{menu.name}</p>
                </Link>
            ))
        }

    </div>
  )
}

export default NavigationBar
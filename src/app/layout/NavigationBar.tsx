import React from 'react'
import Link from 'next/link'

const NavigationBar = () => {

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
       {
              menu_list.map((menu, index) => (
                <Link key={index} href={menu.link}>
                     <p className='mx-3 font-medium text-sm '>{menu.name}</p>
                </Link>
              ))
       }
    </div>
  )
}

export default NavigationBar
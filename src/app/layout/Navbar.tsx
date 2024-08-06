
import React from 'react'
import NavigationBar from './NavigationBar'
import Action_Button from './Action_Button'

const Navbar = () => {
  return (
    <main className=' w-full shadow sticky top-0 z-10 bg-white px-3 md:px-0'>
        <nav className=' max-w-7xl mx-auto py-2 flex justify-between'>
            <div className="logo">
                <img className='w-10' src="https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-shoes-logo-vector-illustration-to-generative-ai-png-image_10153016.png" alt="" />
            </div>
            <div className="navigation md:flex items-center hidden">
                <NavigationBar />
            </div>
            <div className="actionbutton flex items-center">
                <Action_Button />
            </div>
        </nav>
    </main>
  )
}

export default Navbar
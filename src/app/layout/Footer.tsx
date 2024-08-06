import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaTelegram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className=' w-full border bg-slate-200'>
      <section className=' h-full grid md:grid-cols-3 gap-5 max-w-7xl mx-auto py-10 px-5 lg:px-0'>
        <div className=' h-full border'>
          <div className=' w-[50%] mx-auto h-[200px] border'>
            <img className=' w-full h-full object-cover' src="https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-shoes-logo-vector-illustration-to-generative-ai-png-image_10153016.png" alt="" />
          </div>
          <h1 className=' text-4xl font-semibold text-gray-900 text-center'>Khymm Shoes</h1>
        </div>

        <div className=' h-full border space-y-5'>
          <h1 className=' text-2xl text-gray-900 font-semibold '>
            Quick Links
          </h1>
          <div className=' space-y-3 flex flex-col'>
            <Link href='/'>
              <p className=' font-medium text-gray-600 text-lg'>Home</p>
            </Link>
            <Link href='/man'>
              <p className=' font-medium text-gray-600 text-lg'>Man</p>
            </Link>
            <Link href='/woman'>
              <p className=' font-medium text-gray-600 text-lg'>Woman</p>
            </Link>
            <Link href='/kid'>
              <p className=' font-medium text-gray-600 text-lg'>Kids</p>
            </Link>
            <Link href='/sale'>
              <p className=' font-medium text-gray-600 text-lg'>Sale</p>
            </Link>


          </div>
        </div>

        <div className=' h-full border space-y-5'>
          <h1 className=' text-2xl text-gray-900 font-semibold '>
            Contact Us
          </h1>
          <div className=' space-y-2'>
            <p className=' font-medium text-gray-600 text-lg'>Address: 123 Street 1, Sensok, Phnome Penh</p>
            <p className=' font-medium text-gray-600 text-lg'>Phone: +855 962701770</p>
            <p className=' font-medium text-gray-600 text-lg'>Email:im.vakhim2211@gmail.com</p>
          </div>
          <h1 className=' text-xl text-gray-900 font-semibold '>
            Our Social Media
          </h1>
          <div className=' space-x-5 flex'>
            <Link href={'https://web.facebook.com/imvakhim'} target='_blank' >
              <FaFacebook className=' text-2xl text-gray-600' />
            </Link>
            <Link href={'https://www.instagram.com/imvakhim/'} target='_blank'>
              <FaInstagram className=' text-2xl text-gray-600' />
            </Link>
            <Link href={'https://t.me/imvakhim'} target='_blank'>
              <FaTelegram className=' text-2xl text-gray-600' />
            </Link>
            <Link href={'https://www.linkedin.com/in/imvakhim/'} target='_blank'>
              <FaLinkedin className=' text-2xl text-gray-600' />
            </Link>
            <Link href={'https://twitter.com/imvakhim'} target='_blank'>
              <FaTwitter className=' text-2xl text-gray-600' />
            </Link>
          </div>
        </div>

      </section>
      <section className=' w-full bg-slate-300 py-5'>
        <p className=' text-center text-gray-600'>© 2024 Khymm Shoes. All rights reserved</p>
      </section>
    </footer>
  )
}

export default Footer
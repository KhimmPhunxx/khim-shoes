'use client'

import React from 'react'
import { BsFillCartPlusFill } from "react-icons/bs";


const Action_Button = () => {
  return (
    <div className='actionbutton flex space-x-5 items-center'>
        <div className="add-to-cart flex items-center">
            <button>
                <BsFillCartPlusFill className=' text-2xl text-slate-800' />
            </button>
        </div>
        <div className="avarta">
            <img className='w-7 h-7 rounded-full' src="https://www.shutterstock.com/image-vector/man-avatar-profile-picture-vector-260nw-229692004.jpg" alt="" />
        </div>
    </div>
  )
}

export default Action_Button
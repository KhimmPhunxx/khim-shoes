'use client'

import React from 'react'
import { BsFillCartPlusFill } from "react-icons/bs";
import { LuUserCircle } from "react-icons/lu";

const Action_Button = () => {
  return (
    <div className='actionbutton flex space-x-2 lg:space-x-5 items-center'>
        <div className="avarta flex items-center">
            <button>
                <LuUserCircle className=' text-2xl text-slate-800' />
            </button>
        </div>
        <div className="add-to-cart flex items-center">
            <button>
                <BsFillCartPlusFill className=' text-2xl text-slate-800' />
            </button>
        </div>
    </div>
  )
}

export default Action_Button
import React from 'react'
import { RiMenuAddFill } from 'react-icons/ri'

const AddServiceBtn = () => (
  <a href="/addservice">
    <div className='w-12 h-12 flex justify-center items-center bg-slate-300 rounded-full hover:invert transition ease-in-out'>
      <RiMenuAddFill className='scale-150' />
    </div>
  </a>
)

export default AddServiceBtn
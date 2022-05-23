import React from 'react'
import { FiHome } from 'react-icons/fi'

const HomeBtn = () => (
  <a href="/">
    <div className='w-12 h-12 flex justify-center items-center bg-slate-300 rounded-full hover:invert transition ease-in-out'>
      <FiHome className='scale-150' />
    </div>
  </a>
)

export default HomeBtn
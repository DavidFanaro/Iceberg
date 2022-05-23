import React from 'react'
import { MdSettings } from 'react-icons/md'

const SettingBtn = () => (
  <a href="/setting">
    <div className='w-12 h-12 flex justify-center items-center bg-slate-300 rounded-full hover:invert transition ease-in-out'>
      <MdSettings className='scale-150' />
    </div>
  </a>
)

export default SettingBtn
import React from 'react'
import ServiceBtn from './AddServiceBtn'
import HomeBtn from './HomeBtn'
import SettingBtn from './SettingBtn'

const NavButtonGroup = () => (
  <div className='absolute left-3 bottom-3'>
    <div className='flex gap-3 bg-zinc-500 p-2 rounded-md shadow-md'>
      <HomeBtn />
      <ServiceBtn />
      <SettingBtn />
    </div>
  </div>
)

export default NavButtonGroup
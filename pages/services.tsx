/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import AddMenu from '../components/ServicesMenus/AddMenu';
import EditMenu from '../components/ServicesMenus/EditMenu';


enum Page {
  ADD,
  EDIT,
}

const services = () => {

  const [currentPage, setcurrentPage] = useState<Page>(Page.ADD);

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-5/6 h-5/6 bg-slate-100 rounded-3xl p-3'>
        <div className='flex justify-around mt-4'>
          <button type='button' onClick={() => setcurrentPage(Page.ADD)}>
            ADD
          </button>
          <button type='button' onClick={() => setcurrentPage(Page.EDIT)}>
            EDIT
          </button>
        </div>
        {currentPage === Page.ADD ? <AddMenu /> : <EditMenu />}
      </div>
    </div>
  )
}

export default services
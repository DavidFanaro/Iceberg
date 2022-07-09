import React from 'react'
import { FiEdit } from 'react-icons/fi'

// TODO: Add Images and redirect to edit page

const ServiceCard = () => (
  <div className='w-full bg-slate-300 rounded-md p-3 flex justify-between px-3'>
    <div className='flex flex-row gap-3'>
      <div>
        Image
      </div>
      <div>
        Name
      </div>
    </div>
    <button type='button' className='btn btn-sm gap-2'>
      <FiEdit />
      Edit
    </button>
  </div>
)

export default ServiceCard
import Link from 'next/link';
import React from 'react'
import { FiEdit } from 'react-icons/fi'

// TODO: Add Images and redirect to edit page

type Props = {
  id: number;
  name: string;
  image: string;
};

const ServiceCard = ({ id, name, image }: Props) => (
  <div className='w-full bg-slate-300 rounded-md p-3 flex justify-between px-3'>
    <div className='flex flex-row gap-3'>
      <img src={image} alt={name} className=' h-16' />
      <div>
        {name}
      </div>
    </div>
    <a type='button' className='btn btn-sm gap-2' href={`/editservice/${id}`}>
      <FiEdit />
      Edit
    </a>
  </div>
)

export default ServiceCard
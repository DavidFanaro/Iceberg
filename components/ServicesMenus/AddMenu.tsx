import { useFormik } from 'formik'
import React from 'react'
import { GrFormAdd } from 'react-icons/gr'

const addService = async (name: String, url: String, image: String) => {
  await fetch('api/services', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      url,
      image
    })
  })

  // if (req.ok) {
  //   console.log('sucesss!!')
  // } else {
  //   console.log(req.statusText)
  // }
}

const AddMenu = () => {
  const addServiceForm = useFormik({
    initialValues: {
      name: '',
      url: '',
      image: '',
    },
    onSubmit: values => {
      addService(values.name, values.url, values.image)
    },
  });

  return (
    <div className='flex justify-center' >
      <div className=''>
        <form onSubmit={addServiceForm.handleSubmit} className='flex flex-col gap-5'>
          <label htmlFor='name' className=''> Name
            <input className='ml-3' type="text" name='name' onChange={addServiceForm.handleChange} value={addServiceForm.values.name} />
          </label>
          <label htmlFor='Url'> Url
            <input className='ml-3' type="text" name='url' onChange={addServiceForm.handleChange} value={addServiceForm.values.url} />
          </label>
          <label htmlFor='image'> Image
            <input className='ml-3' type="text" name='image' onChange={addServiceForm.handleChange} value={addServiceForm.values.image} />
          </label>
          <button type="submit"> <GrFormAdd />ADD</button>
        </form>
      </div>
    </div>
  )
}

export default AddMenu
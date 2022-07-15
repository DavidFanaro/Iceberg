import React, { useEffect, useState } from 'react'
import ServiceCard from './EditMenuComponents/ServiceCard'

type service = {
  id: number,
  image: string,
  name: string,
  url: string
}

const EditMenu = () => {

  // eslint-disable-next-line no-unused-vars
  const [services, setservices] = useState<[service]>()

  useEffect(() => {
    fetch('/api/services').then((i) => i.json()).then((j) => {
      setservices(j)
    })
  }, [])

  return (
    <div className='pt-4'>
      {
        services ? services.map((s) =>
          <div className='py-1'>
            <ServiceCard key={s.id} id={s.id} name={s.name} image={s.image} />
          </div>
        )
          :
          <div>
            Loading
          </div>
      }
    </div>
  )
}

export default EditMenu
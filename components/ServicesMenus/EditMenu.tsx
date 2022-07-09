import React, { useEffect, useState } from 'react'
import ServiceCard from './EditMenuComponents/ServiceCard'

type service = {
  id: Number,
  image: String,
  name: String,
  url: String
}

const EditMenu = () => {

  // eslint-disable-next-line no-unused-vars
  const [services, setservices] = useState<[service | undefined]>()

  useEffect(() => {
    fetch('/api/services').then((i) => i.json()).then((j) => {
      setservices(j)
    })
  }, [])

  // useEffect(() => {

  //   console.log(services)
  // }, [services])


  return (
    <div>
      <ServiceCard />
    </div>
  )
}

export default EditMenu
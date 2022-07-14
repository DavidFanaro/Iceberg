import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const editService: NextPage = () => {

  const router = useRouter()
  const { id } = router.query

  return (

    <div>post: {id}</div>
  )
}


export default editService
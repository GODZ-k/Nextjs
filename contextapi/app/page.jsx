"use client"
import { Mycontext } from '@/Helper/Context'
import React, { createContext } from 'react'
import Header from './Components/Header'

const page = () => {
  const user = createContext(Mycontext)
  return (
    <div>
      <Header/>
      {user}
      </div>
  )
}

export default page
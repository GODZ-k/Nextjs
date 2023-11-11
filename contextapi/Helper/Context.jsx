"use client"
import React, { createContext } from 'react'
export const Mycontext=createContext()
const Context = ({children}) => {
    let data="tanmay"
  return (
    <div>
       <Mycontext.Provider value={data}>
        {children}
       </Mycontext.Provider>
    </div>
  )
}

export default Context
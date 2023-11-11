import { Mycontext } from '@/Helper/Context'
import React, { useContext } from 'react'

const Header = () => {
    const user =useContext(Mycontext)
  return (
    <div>{user}</div>
  )
}

export default Header
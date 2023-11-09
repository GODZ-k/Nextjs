"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const page = ({params}) => {
  const {id} =params
  const [User, setUser] = useState([])
  useEffect(() => {
    getdata()


  }, [])

  const getdata = async()=>{
    const getuser = await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
    const showuser = await getuser.data
    setUser(showuser)
    // console.log(showuser)
   }
  return (
    <div>{JSON.stringify(User.name)}</div>
  )
}

export default page
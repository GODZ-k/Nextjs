"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'


const page = () => {
const [User, setUser] = useState([])
useEffect(() => {
  getdata()

}, [])




  const getdata = async()=>{
    const getuser = await axios.get("https://jsonplaceholder.typicode.com/users")
    const showuser = await getuser.data
    setUser(showuser)
    console.log(showuser)
   }
  return (
<>
<button className='bg-green-700 text-white p-2 m-5 rounded' onClick={getdata}>Get data</button>
<div className='p-3'>
{User.map((elem)=>{
  return <h1>{elem.name} --   <Link href={`${elem.id}`}> Explore</Link></h1>

})}
</div>
</>  )
}

export default page
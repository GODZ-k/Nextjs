"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


// two way binding
// import React, { useState } from 'react'

// const page = () => {
//   const [username, setusername] = useState()
//   return (
//     <>
// <form action="">
//   <input type="text" className='bg-gray-900  p-2 m-3 text-white' onChange={(e)=>{
//     setusername(e.target.value)
//     console.log(username)
//   }}/>
// </form>

//     </>
//   )
// }

// export default page


const page = () => {

  return (
<>

<h1>this is home page</h1>
<Link href="/Contact/" >contact</Link>
</>  )
}

export default page
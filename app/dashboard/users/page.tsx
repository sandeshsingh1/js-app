import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>     
      <h1>Dashboard Users</h1>
      <ul>
        <li className='text-sky-300 underline'><Link href="/dashboard/users/1">USer1</Link></li>
        <li className='text-sky-300 underline'><Link href="/dashboard/users/2">USer2</Link></li>
        <li className='text-sky-300 underline'><Link href="/dashboard/users/3">USer3</Link></li>
        <li className='text-sky-300 underline'><Link href="/dashboard/users/4">USer4</Link></li>
      </ul>
    </div>
  )
}
export default page
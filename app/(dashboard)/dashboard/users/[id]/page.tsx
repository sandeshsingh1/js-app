import React from 'react'

const Userdetails = async({params}:{params:Promise<{id:string}>}) => {
  const {id}=await params;
  return (
    <div>Showing Userdetails... #{id}</div>
  )
}
export default Userdetails

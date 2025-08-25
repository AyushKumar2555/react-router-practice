import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid}=useParams()
  return (
    <div className='bg-gray-600 text-white text-xl  font-semibold rounded-2xl text-center m-4 p-4 '>
      User:{userid}
    </div>
  )
}

export default User

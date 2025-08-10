import React from 'react'
import MyAddedVehicle from '../components/MyAddedVehicle'
import BookedVehicle from '../components/BookedVehicle'
import Profile from '../components/Profile'

function Dashboard() {
  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <h1 className='text-3xl font-bold'>DASHBOARD</h1>
      <Profile />
      <BookedVehicle />
      <MyAddedVehicle />

    </div>
  )
}

export default Dashboard
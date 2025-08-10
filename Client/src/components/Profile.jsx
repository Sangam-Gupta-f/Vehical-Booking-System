import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Profile() {
const [profile, setProfile]=useState({name:"", email:""})
const user=JSON.parse(localStorage.getItem('user'));
    useEffect(()=>{
      const fetchProfile=async function () {
      const res=await fetch(`${import.meta.env.VITE_API_URL}/api/user/profile?id=${user._id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      console.log(res);
      // if(!res){
      //   throw new console.error("Failed get profile");
        
      // }
      const pro=await res.json();
      setProfile(pro.user)
    }
    fetchProfile();
  },[])
  return (
    <div className='Card w-xl flex flex-col rounded-lg p-3 m-4 bg-[#101828] text-white'>
        <h1 className='text-xl'>NAME: {profile.name}</h1>
        <h2 className='text-xl'>E-MAIL: {profile.email}</h2>

    </div>
  )
}

export default Profile
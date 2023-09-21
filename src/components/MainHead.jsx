import React from 'react'
import profile from "../assets/profile.jpeg"

const MainHead = () => {
  return (
    <div className='w-full h-[5rem] bg-slate-400'>
        <div className='flex h-[5rem] items-center justify-between w-full p-8'>
                <h1>NATURE GALLERY</h1>
                <div className=''>
                        <img 
                        src={profile} 
                        alt="profile"
                        className='rounded-full h-[50px] w-[50px] border-[4px] border-black' />
                </div>
        </div>
    </div>
  )
}

export default MainHead
import React, { useContext } from 'react'
import profile from "../assets/profile.jpeg"
import { AuthContext } from '../AuthContext'
import { Navigate, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const MainHead = () => {

  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove('refreshToken');
    Cookies.remove('accessToken');
    console.log("logout");
    navigate("/login", {replace : true});
 }
  return (
    <div className='w-full h-[5rem] bg-[#F4B241]'>
        <div className='flex h-[5rem] items-center justify-between w-full p-8'>
                <h1>NATURE GALLERY</h1>
                <div className='flex items-center gap-4'>

                <h1 className='p-3 bg-white rounded-lg cursor-pointer'
                onClick={logout}>LOGOUT</h1>
                <div className=''>
                        <img 
                        src={profile} 
                        alt="profile"
                        className='rounded-full h-[50px] w-[50px] border-[4px] border-black' />
                </div>
                </div>

        </div>
    </div>
  )
}

export default MainHead
import React, { useContext, useState } from 'react'
import { AuthContext } from '../AuthContext'

const Search = () => {

  const {searchQuery, setSearchQuery} = useContext(AuthContext);
  return (
    <div className='w-full h-[5rem] bg-black'>
        <div className='flex items-center justify-center gap-[10px] w-full h-[5rem]'>
                <input 
                type="text" 
                value={searchQuery}
                placeholder= "Search Gallery"
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-[70%] rounded-3xl outline-[0px] outline-none border-none'/>
                <div className='p-3 rounded-3xl bg-white cursor-pointer'>
                  <p>Search</p>
                </div>
        </div>
    </div>
  )
}

export default Search
import React, { useContext, useState } from 'react'
import { AuthContext } from '../AuthContext'

const Search = () => {

  const {searchQuery, setSearchQuery} = useContext(AuthContext);
  return (
    <div className='w-full h-[5rem] bg-black'>
        <div className='flex items-center justify-center w-full h-[5rem]'>
                <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-[70%] rounded-3xl outline-[0px] outline-none border-none'/>
        </div>
    </div>
  )
}

export default Search
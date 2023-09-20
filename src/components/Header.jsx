import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({content}) => {
  return (
        <div>
                <div className="w-[100%] absolute">
                        <div className="flex justify-between p-[1rem]">
                                <h1 className=' text-xl font-bold'>NATURE IMAGE GALLERY</h1>
                                <Link to={`/${content}`} className="text-xl font-medium">{content}</Link>
                        </div>
                 </div>
        </div>
        )
}

export default Header
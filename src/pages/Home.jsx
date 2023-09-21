import React from 'react'
import MainHead from '../components/MainHead'
import Search from '../components/Search'
import { images } from '../images'
import ImageGallery from '../components/ImageGallery'

const Home = () => {
  return (
    <div>
      <MainHead />
      <Search />
      <div className=''>

      <ImageGallery images={images}/>
      </div>
    </div>
  )
}

export default Home
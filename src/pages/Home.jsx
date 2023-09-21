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
      <ImageGallery images={images}/>
    </div>
  )
}

export default Home
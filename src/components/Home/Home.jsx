import React from 'react'
import HomeBtn from '../HomeBtn/HomeBtn'
import './Home.css'

const Home = () => {
  return (
    <div className='text-center  w-50 mx-auto'>
      <h1 className='p-2'>Room Locator 2.0</h1>
      <small>Powered by J-Tech</small>
      <div className='frame mx-auto m-4'>
        <HomeBtn unit={"P0083 CVICU"} />
        <HomeBtn unit={"P0080 MRI"} />
        <HomeBtn unit={"P0081 MRI"} />
        <HomeBtn unit={"P0085 MOTHER CART"} />
        <HomeBtn unit={"P1209 BASS"} />
        <HomeBtn unit={"P0084 2F PPF"} />
        <HomeBtn unit={"P0082 PCU"} />
      </div>
    </div>
  )
}

export default Home
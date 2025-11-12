import React, { useEffect } from 'react'
import HomeBtn from '../HomeBtn/HomeBtn'
import './Home.css'
import { Link } from 'react-router-dom'
import inventoryData from '../../roomData.js'
import CVICU from '../CVICU/CVICU.jsx'
import cvicuData from '../../roomData'
import { use } from 'react'

const Home = () => {

  return (
    <div className='text-center  w-50 mx-auto'>
      <h2 className='mt-4 w-100'>Room Locator 2.0</h2>
      <small >Powered by J-Tech</small>
      <div className='frame mx-auto m-4'>
        <Link to='/i-tracker-app/CVICU'><HomeBtn unit={"P0083 CVICU"} /></Link>
        <HomeBtn unit={"P0080 MRI"} />
        <HomeBtn unit={"P0081 MRI"} />
        <HomeBtn unit={"P0085 MOTHER CART"} />
        <HomeBtn unit={"P1209 BASS"} />
        <HomeBtn unit={"P0084 2F PPF"} />
        <Link to='/PCU'><HomeBtn unit={"P0082 PCU"} /></Link>

      </div>
    </div>
  )
}

export default Home
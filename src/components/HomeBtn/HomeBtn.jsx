import React from 'react'
import "./HomeBtn.css"

const HomeBtn = ({ unit }) => {
  return (
    <button className="myBtn w-75 d-block mx-auto m-3">{unit}</button>

  )
}

export default HomeBtn
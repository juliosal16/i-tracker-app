import React from 'react'
import "./HomeBtn.css"

const HomeBtn = ({ unit }) => {
  return (
    <button style={{ textDecoration: "none" }} className="myBtn w-100 d-block mx-auto m-3">{unit}</button>

  )
}

export default HomeBtn
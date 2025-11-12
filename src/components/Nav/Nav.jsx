import React from 'react'
import MyLogo from '../../assets/myLogo.svg'

const Nav = () => {
  return (
    <nav className="navbar  " style={{ backgroundColor: "#03624c" }}>
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/i-tracker-app/">
          <img src={MyLogo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
          J-Tech
        </a>
      </div>
    </nav>
  )
}

export default Nav
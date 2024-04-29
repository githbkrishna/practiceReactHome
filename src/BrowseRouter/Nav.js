import React from 'react'
import logo from '../assets/logoo.png'
import BrowsRout from './BrowsRout.css'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {

  let navigate = useNavigate()

  return (
    <nav className=''>
        <div className="logo">
            <img src={logo} className='' alt="" navigate="/home" />
        </div>
        <ul className=''>

          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>

          <li><Link to="/devlopers">Developers</Link></li>
          <li><Link to="/fetch">FetchDev</Link></li>
          
        </ul>
    </nav>
  )
}

export default Nav
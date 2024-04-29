import React from 'react'
import { Link } from 'react-router-dom'
import "./fetch.css";


function Fetch() {
  return (
    <div className='mainfetch'>
        <h1>fetch</h1>

        {/* <div>
          <Link to="/fetch/getcomp">GetComp</Link>
        </div>

        <div>
          <Link to="/fetch/postcomp">PostComp</Link>
        </div> */}

        <div>
          <Link to="/fetch/deletecomp">DeleteComp</Link>
        </div>

        <div>
          <Link to="/fetch/putcomp">PutComp</Link>
        </div>
        
    </div>
  )
}

export default Fetch
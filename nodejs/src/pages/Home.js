import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

const Home = () => {
  return (
    <div>
      <div className='navbar'>
        <h1>Preference</h1>
        <ul className='nav'>
            <li className='nav-item'><a className="nav-link "><Link to='/personal'>Personal</Link></a></li>
            <li className='nav-item'><a className="nav-link "><Link to='/professional'>Professional</Link></a></li>
        </ul>
        
      </div>
    </div>
  )
}

export default Home

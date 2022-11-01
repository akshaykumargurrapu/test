import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

const Home = () => {

  // const personadata = personaldatafetch
  async function personal_data_fetching() {
    const items = JSON.parse(localStorage.getItem('qwert'))
  const email = items.email
  const token = items.token
    // e.preventDefault()

    const response = await fetch('http://localhost:6969/api/personaldatafetch', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token,
            email
        }),
    })
    const data = await response.json()
    console.log(data)
    localStorage.setItem("personaldata", JSON.stringify(data.user))
    // return data.user
}

personal_data_fetching()

  return (
    <div>
      <div className='navbar'>
        <h1>Preference</h1>
        <ul className='nav'>
            <li className='nav-item'><a className="nav-link "><Link to='/personal'>Personal</Link></a></li>
            <li className='nav-item'><a className="nav-link "><Link to='/professional'>Professional</Link></a></li>
            <li className='nav-item'><a className="nav-link ">Hi,{JSON.parse(localStorage.getItem('qwert')).name}</a></li> &nbsp;&nbsp;&nbsp;&nbsp;
            <button  className='btn btn-danger' onClick={(e) =>{
              localStorage.clear()
              window.location.href = '/login'
            }}>logout<li className='nav-item'><a className="nav-link "></a></li></button>
        </ul>
        
      </div>
      <div>

        {()=>{
          return <><h1>asds</h1></>
        }}
      </div>
    </div>
  )
}

export default Home

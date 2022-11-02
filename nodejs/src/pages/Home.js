import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'


const Home = () => {

  const [userper,setUserper]=useState({})
  const [userpro, setUserpro] = useState({})
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
    setUserper(JSON.parse(localStorage.getItem('personaldata')))
    // return data.user
  }

  async function professional_data_fetching() {
    const items = JSON.parse(localStorage.getItem('qwert'))
    const email = items.email
    const token = items.token

    // e.preventDefault()

    const response = await fetch('http://localhost:6969/api/professionaldatafetch', {
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
    localStorage.setItem("professionaldata", JSON.stringify(data.user))
    
    setUserpro(JSON.parse(localStorage.getItem('professionaldata')))
    // return data.user
  }


  useEffect(()=>{
    personal_data_fetching()
    professional_data_fetching()
  },[])
  

  return (
    <div>
      <div className='navbar'>
        <h1>Preference</h1>
        <ul className='nav'>
          <li className='nav-item'><a className="nav-link "><Link to='/personal'>Personal</Link></a></li>
          <li className='nav-item'><a className="nav-link "><Link to='/professional'>Professional</Link></a></li>
          <li className='nav-item'><a className="nav-link ">Hi,{JSON.parse(localStorage.getItem('qwert')).name}</a></li> &nbsp;&nbsp;&nbsp;&nbsp;
          <button className='btn btn-danger' onClick={(e) => {
            localStorage.clear()
            window.location.href = '/'
          }}>logout<li className='nav-item'><a className="nav-link "></a></li></button>
        </ul>

      </div>
      <div>
        <h1>sadgjhg</h1>
        {
          userper.weight
        }
        {  userpro.linkedin}
      </div>
    </div>
  )
}

export default Home

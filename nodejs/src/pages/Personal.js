import React, { useContext, useState } from 'react'
import Home from './Home'
import '../App.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { dataContext } from '../nodeContext';
import { Link } from 'react-router-dom'


const Personal = () => {
  const [food, setFood] = useState('')

  const [hobbies, setHobbies, tShirt, settShirt,
    height, setHeight, weight, setWeight] = useContext(dataContext);


  const changeHandler = (e) => {
    setHobbies([...hobbies, food]);
  }


  async function personal_data(e) {
    const items = JSON.parse(localStorage.getItem('qwert'))
    const email = items.email
    const token = items.token
    e.preventDefault()

    const response = await fetch('http://localhost:6969/api/personadata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token,
        email,
        hobbies,
        tShirt,
        weight,
        height
      }),
    })
    const data = await response.json()
    console.log(data)
    if (data.status === 'ok')
      alert("Updated Data")
    else
      alert("Error")
    window.location.href = '/Home'
  }

  const renderhobbies = hobbies && hobbies.map(hobbie =>{
    return(
      <h5>{hobbie}</h5>
    )
  })

  return (

    <div className='main'>
      <div className='navbar'>
        <h1>Preference</h1>
        <ul className='nav'>
          <li className='nav-item'><a className="nav-link "><Link to='/home'>Home</Link></a></li>
          <li className='nav-item'><a className="nav-link "><Link to='/personal'>Personal</Link></a></li>
          <li className='nav-item'><a className="nav-link "><Link to='/professional'>Professional</Link></a></li>
          <li className='nav-item'><a className="nav-link ">Hi,{JSON.parse(localStorage.getItem('qwert')).name}</a></li> &nbsp;&nbsp;&nbsp;&nbsp;
          <li className='nav-item'><button className='btn btn-danger' onClick={(e) => {
            localStorage.clear()
            window.location.href = '/'
          }}>Logout</button></li>
        </ul>

      </div>
      <div className='data'>
        <h1>Personal Preference</h1>
        <form onSubmit={personal_data}>
          <table>

            <tr>
              <td>
                <span>
                  <input type="text" class="form-control" placeholder="Enter TShirt Size" value={tShirt} onChange={(e) => settShirt(e.target.value)} />

                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span>
                  <input type="text" class="form-control" placeholder="Enter Height" value={height} onChange={(e) => setHeight(e.target.value)} />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span>
                  <input type="text" class="form-control" placeholder="Enter Weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span>
                  <input type="text" class="form-control" placeholder="Enter Food Habits" value={food} onChange={(e) => setFood(e.target.value)} />
                  <button type="button" class="btn btn-primary" onClick={changeHandler}>Add</button>
                </span>
                {renderhobbies}
              </td>
            </tr>
          </table>
          <div className='btnn'>
            <input type='submit' className='btn btn-success' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Personal;

import React, { useContext, useEffect, useState } from 'react'
import '../App.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { dataContext } from '../nodeContext';


const Personal = () => {
  const [food, setFood] = useState('')
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [hobbies, setHobbies, tShirt, settShirt,
    height, setHeight, weight, setWeight] = useContext(dataContext);

  useEffect(() => {
    let x = JSON.parse(localStorage.getItem('personaldata'))
    setHobbies(x.hobbies)
    settShirt(x.tShirt);
    setHeight(x.height);
    setWeight(x.weight);
  }, [setHobbies, settShirt, setHeight, setWeight])


  const changeHandler = () => {
    if (food !== '' && !hobbies.some(ele => ele.toLowerCase() === food.toLowerCase()))
      setHobbies([...hobbies, food]);
    setFood('')
  }

  const handleButtonClick = () => {
    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
      window.location.href='/Home'
    },500);
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
    if (data.status === 'ok')
      handleButtonClick()
    else
    {
      alert("Error")
      window.location.href = '/Home'
    }
      
    
  }

  return (
    <div className='main'>
      {isAlertVisible && (
        <div className='alert-container'>
          <div className='alert-inner'>Updated Data Successfully</div>
        </div>)}
      <div className='data'>
        <h1>Personal Preference</h1>
        <form>
          <table>
            <thead>
              <tr>
                <td>
                  <span>
                    <input type="text" className="form-control" placeholder="Enter TShirt Size" value={tShirt} onChange={(e) => settShirt(e.target.value)} required />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <input type="text" className="form-control" placeholder="Enter Height" value={height} onChange={(e) => setHeight(e.target.value)} required />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <input type="text" className="form-control" placeholder="Enter Weight" value={weight} onChange={(e) => setWeight(e.target.value)} required />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <input type="text" className="form-control" placeholder="Enter Food Habits" value={food} onChange={(e) => setFood(e.target.value)} />
                    <button type="button" className="btn btn-primary" onClick={changeHandler}>Add</button>
                  </span>
                  {hobbies && hobbies.map((h, idx) => (
                    <span key={idx}>
                      <strong>{h}</strong>
                      &nbsp;&nbsp;
                      <button type="button" className="btn btn-danger" onClick={() => { setHobbies(hobbies.filter(x => x !== h)) }}>x</button>
                    </span>
                  ))}
                </td>
              </tr>
            </thead>

          </table>
          <div className='btnn'>
            <button type='submit' className='btn btn-success' onClick={personal_data}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Personal;

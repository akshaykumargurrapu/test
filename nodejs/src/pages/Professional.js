import React, { useState,useEffect } from 'react'
import Home from './Home'

const Professional = () => {

  const [data,setData] = useState('');
  const [data1,setData1] = useState('');
  const [linkedin, setLinkedin] = useState('')
  const [company, setCompany] = useState('')
  const [skills, setSkills] = useState([])
  const [work, setWork] = useState([])

  const changeHandler = (e)=>{
    setSkills( [...skills , data ]);
    // console.log(hobbies)
  
  } 
  const changeHandlerwork = (e)=>{
    setWork( [...work , data1 ]);
    // console.log(hobbies)
  
  } 

  const items = JSON.parse(localStorage.getItem('qwert'))
  const email = items.email
  async function professional_data(e) {
    e.preventDefault()

    const response = await fetch('http://localhost:6969/api/professionaldata', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            linkedin,
            company,
            skills,
            work
        }),
    })
    const data = await response.json()
    console.log(data)
    if (data.status === 'ok')
        alert("Updated Data")
    else
        alert("Error")
}
  return (
    <div className='main'>
      <Home/>
      <div className='data'>
        <h1>Professional Preference</h1>
        <form onSubmit={professional_data}>
        <table>
        <tr>
            <td>
                <span>
                    <input type="text" class="form-control" placeholder="Enter Linkedin URL" value = {linkedin} onChange={(e)=>setLinkedin(e.target.value)}  />
                </span>
            </td>
          </tr>
          <tr>
            <td>
                  <span>
                      <input type="text" class="form-control" placeholder="Current Company" value={company} onChange={(e)=>setCompany(e.target.value)}/>
                  </span>
            </td>
          </tr>
          <tr>
            <td>
                  <span>
                        <input type="text" class="form-control" placeholder="Work Experience" value={data1} onChange={(e)=>setData1(e.target.value)}/>
                        <button type="button" class="btn btn-primary" onClick={changeHandlerwork}>Add</button>
                  </span>
            </td>
          </tr>
          <tr>
            <td>
                <span>
                    <input type="text" class="form-control" placeholder="Enter Technical Skills" value={data} onChange={(e)=>setData(e.target.value)}/>
                    <button type="button" class="btn btn-primary" onClick={changeHandler}>Add</button>
                </span>
            </td>
            </tr>
            
        </table>
        <div className=''>
          <input type='submit' className='btn btn-success' />
          
        </div>
        </form>
      </div>
    </div>
  )
}

export default Professional

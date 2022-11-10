import { React, useEffect, useState } from "react";
import { dataContext } from '../nodeContext';
import { useContext } from 'react';
const Admin = () => {
  const [ tShirt, settShirt,
    height,setHeight, weight,setWeight,
    company, setCompany, skills, setSkills, work, setWork] = useContext(dataContext);
  const [data1, setData1] = useState([])
    useEffect(()=>{
      setCompany('')
    },[setCompany])
  async function finduserspersonaldata(e) {
    e.preventDefault()
    let body = { height, weight, tShirt }
    Object.keys(body).forEach(key => {
      if(body[key]==='')
        delete body[key]
    })
    const response = await fetch('http://localhost:6969/api/finduserpersonaldata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    })
    const data = await response.json()
    setData1(data.user)
  }


  async function findusersprofessionaldata(e) {
    e.preventDefault()
    let body = { company,work, skills  }
    Object.keys(body).forEach(key => {
      if(body[key]==='')
        delete body[key]
    })
    const response = await fetch('http://localhost:6969/api/findusersprofessionaldata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    })
    const data = await response.json()
    setData1(data.user)
  }

  return (
    <div>
      <div className="main">
        <div className="form">
          <table>
            <tbody>
              <tr>
                <td>
                  <th>Personal Data</th>
                  <form>
                    <input type="text" placeholder="Height" className="form-control" value={height} onChange={(e) => { setHeight(e.target.value) }} />
                    <input type="text" placeholder="Weight" className="form-control" value={weight} onChange={(e) => { setWeight(e.target.value) }} />
                    <input type="text" placeholder="TShirt" className="form-control" value={tShirt} onChange={(e) => { settShirt(e.target.value) }} />
                    {/* <input type="text" placeholder="hobbies" className="form-control" value={hobbies} onChange={(e)=>{setHobbies([e.target.value])}} /> */}
                    <br />
                    <button type='submit' className="btn btn-primary" onClick={finduserspersonaldata}>search</button>
                  </form>
                </td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td>
                  <th>Professional Data</th>
                  <form>
                    <input type="text" placeholder="Company" className="form-control" value={company} onChange={(e) => { setCompany(e.target.value);} } />
                    <input type="text" placeholder="Work" className="form-control" value={work} onChange={(e) => { setWork(e.target.value) }}/>
                    <input type="text" placeholder="Skill" className="form-control" value={skills} onChange={(e) => { setSkills(e.target.value) }}/>
                    <br />
                    <button type='submit' className="btn btn-primary" onClick={findusersprofessionaldata}>search</button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <ul >
        {data1 && data1.map((user,idx)=>(
          <li key={idx}>{user.email}</li>
        ))}
      </ul>
    </div>
    
  )
}

export default Admin;
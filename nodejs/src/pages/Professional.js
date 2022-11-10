import React, { useState, useContext, useEffect } from 'react'
import { dataContext } from '../nodeContext';

const Professional = () => {

  const [data, setData] = useState('');
  const [data1, setData1] = useState('');
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [linkedin, setLinkedin, company, setCompany,
    skills, setSkills, work, setWork] = useContext(dataContext)
  useEffect(() => {
    let x = JSON.parse(localStorage.getItem('professionaldata'))
    setLinkedin(x.linkedin)
    setCompany(x.company)
    setSkills(x.skills);
    setWork(x.work);
  }, [setLinkedin, setCompany, setSkills, setWork])


  const changeHandler = () => {
    if (data !== '')
      setSkills([...skills, data]);
    setData('')
    // console.log(hobbies)

  }
  const changeHandlerwork = () => {
    if (data1 !== '')
      setWork([...work, data1]);
    setData1('')
    // console.log(hobbies)
  }

  const handleButtonClick = () => {
    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
      window.location.href = '/Home'
    }, 500);
  }

  async function professional_data(e) {
    const items = JSON.parse(localStorage.getItem('qwert'))
    const email = items.email
    const token = items.token
    e.preventDefault()

    const response = await fetch('http://localhost:6969/api/professionaldata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token,
        email,
        linkedin,
        company,
        skills,
        work
      }),
    })
    const data = await response.json()
    if (data.status === 'ok') {
      handleButtonClick()
    }
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
        <h1>Professional Preference</h1>
        <form>
          <table>
            <tr>
              <td>
                <span>
                  <input type="text" class="form-control" placeholder="Enter Linkedin URL" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} required />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span>
                  <input type="text" class="form-control" placeholder="Current Company" value={company} onChange={(e) => setCompany(e.target.value)} required />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span>
                  <input type="text" class="form-control" placeholder="Work Experience" value={data1} onChange={(e) => setData1(e.target.value)} />
                  <button type="button" class="btn btn-primary" onClick={changeHandlerwork}>Add</button>
                </span>
                {work && work.map((w, idx) => (
                  <span key={idx}>
                    <strong>{w}</strong>
                    <button type="button" class="btn btn-primary" onClick={() => { setWork(work.filter((x) => x !== w)) }}>x</button>
                  </span>
                ))}
              </td>
            </tr>
            <tr>
              <td>
                <span>
                  <input type="text" class="form-control" placeholder="Enter Technical Skills" value={data} onChange={(e) => setData(e.target.value)} />
                  <button type="button" class="btn btn-primary" onClick={changeHandler}>Add</button>
                </span>
                {skills && skills.map((s, idx) => (
                  <span key={idx}>
                    <strong>{s}</strong>
                    <button type="button" class="btn btn-primary" onClick={() => { setSkills(skills.filter((x) => x !== s)); }}>x</button>
                  </span>
                ))}
              </td>
            </tr>

          </table>
          <div className='btnn'>
            <button type='submit' className='btn btn-success' onClick={professional_data}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Professional

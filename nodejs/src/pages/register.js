import React, { useState } from 'react';

function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [hobbies,setHobbies] = useState([]);
  const [tShirt, settShirt] = useState('');
  const [height,setHeight] = useState('');
  const [weight,setWeight] = useState('');
  const [linkedin, setLinkedin] = useState('')
  const [company, setCompany] = useState('')
  const [skills, setSkills] = useState([])
  const [work, setWork] = useState([])


  async function registerUser(e) {
    e.preventDefault()
    const response = await fetch('http://localhost:6969/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password,
        hobbies,
        tShirt,
        weight,
        height,
        linkedin,
        company,
        skills,
        work
      }),
    })
    const data = await response.json()
    console.log(data)
    console.log(response)
    if (data.status === 'ok')
      window.location.href = '/Login'
  }

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={registerUser}>
        <input type="text" placeholder="Firstname"
          onChange={(e) => setName(e.target.value)} value={name}>
        </input>
        <br></br>
        <input type="email" placeholder="email"
          onChange={(e) => setEmail(e.target.value)} value={email}>
        </input>
        <br></br>
        <input type="password" placeholder="password"
          onChange={(e) => setPassword(e.target.value)} value={password}>
        </input>
        <br></br>
        <input type="submit" placeholder="Register">
        </input>
      </form>

    </div>
  );
}

export default Register;

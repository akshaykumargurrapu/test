import './App.css';
import React, { useState } from 'react';

function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  async function registerUser(e){
    e.preventDefault()
    const response = await fetch('http://localhost:6969/api/register',{
      method:'POST',
      headers :{
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        name,
        email,
        password
      }),
    })
    const data = await response.json()
    console.log(data)
    console.log(response)
  }

  return (
   <div>
    <h1>Registration</h1>
    <form onSubmit={registerUser}>
      <input type="text" placeholder = "Firstname" onChange={(e)=>setName(e.target.value)} value = {name}>
      </input>
      <br></br>
      <input type="email" placeholder = "email" onChange={(e)=>setEmail(e.target.value)} value = {email}>
      </input>
      <br></br>
      <input type="password" placeholder = "password" onChange={(e)=>setPassword(e.target.value)} value = {password}>
      </input>
      <br></br>
      <input type="submit" placeholder = "submit">
      </input>
    </form>

   </div>
  );
}

export default App;

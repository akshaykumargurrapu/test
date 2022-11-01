import React, { useState } from 'react';
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  async function loginUser(e) {
    e.preventDefault()
    const response = await fetch('http://localhost:6969/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      }),
    })
    // const response=await axios.post('http://localhost:6969/api/login',{email,password})
    const data = await response.json()
    console.log(data)
    console.log(response)
    console.log(data.token)
    if (data.token) {
      alert("Login Sucessful")
      localStorage.setItem("qwert", JSON.stringify(data))
      window.location.href = "/Home"

    }
    else {
      alert("Please check your email and password")
    }

  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input type="email" placeholder="email"
          onChange={(e) => setEmail(e.target.value)} value={email}>
        </input>
        <br></br>
        <input type="password" placeholder="password"
          onChange={(e) => setPassword(e.target.value)} value={password}>
        </input>
        <br></br>
        <input type="submit" placeholder="Login">
        </input>
      </form>

    </div>
  );
}

export default Login;

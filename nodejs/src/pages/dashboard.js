import React, { useState } from "react";

function Dashboard(){
    const [hobbies, setHobbies] = useState('') 
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const items = JSON.parse(localStorage.getItem('qwert'))
    console.log(items.name)
    const emails = items.email
    console.log(emails)



    async function professional_data(e){
        e.preventDefault()

        const response = await fetch('http://localhost:6969/api/userdata', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                emails, 
                hobbies,
                weight,
                height
            }),
          })
          const data = await response.json()
          console.log(data)
          if (data.status === 'ok')
            alert(123)
          alert("nonfs")
    }
    return (
        
        <div>
            <form onSubmit={professional_data}>
                <input type="text" placeholder="Hobbies" onChange={(e)=> setHobbies(e.target.value)} value = {hobbies}></input>
                <input type="text" placeholder="weight" onChange={(e)=> setWeight(e.target.value)} value = {weight}></input>
                <input type="text" placeholder="height" onChange={(e)=>setHeight(e.target.value)} value = {height}></input>

                <input type="submit" placeholder="submit"></input>


            </form>

    
        </div>
    )
}

export default Dashboard;
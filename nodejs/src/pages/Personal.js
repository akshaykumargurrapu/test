import React,{useState,useEffect} from 'react'
import Home from './Home'
import '../App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



const Personal = () => {
  const [food, setFood] = useState('')

  const [hobbies,setHobbies] = useState([]);
  const [tShirt, settShirt] = useState('');
  const [height,setHeight] = useState('');
  const [weight,setWeight] = useState('');


  const changeHandler = (e)=>{
    setHobbies( [...hobbies , food]);
    // console.log(hobbies)
  
  } 
  useEffect(()=>{
    console.log(hobbies)
    console.log(tShirt);
    console.log(height);
    console.log(weight);
  },[hobbies])

  const items = JSON.parse(localStorage.getItem('qwert'))
  const email = items.email
  async function personal_data(e){
    e.preventDefault()

    const response = await fetch('http://localhost:6969/api/personadata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
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
}
  return (
    
    <div className='main'>
      <Home/>
      <div className='data'>
        <h1>Personal Preference</h1>
        <form onSubmit={personal_data}>
        <table>
          
          <tr>
            <td>
                <span>
                    <input type="text" class="form-control" placeholder="Enter TShirt Size" value={tShirt} onChange={(e)=>settShirt(e.target.value)}/>
                    
                </span>
            </td>
          </tr>
          <tr>
            <td>
                  <span>
                        <input type="text" class="form-control" placeholder="Enter Height" value={height} onChange={(e)=>setHeight(e.target.value)}/>
                  </span>
            </td>
            </tr>
            <tr>
            <td>
                  <span>
                      <input type="text" class="form-control" placeholder="Enter Weight" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
                  </span>
            </td>
          </tr>
          <tr>
            <td>
                <span>
                    <input type="text" class="form-control" placeholder="Enter Food Habits" value={food} onChange={(e)=>setFood(e.target.value)}/>
                    <button type="button" class="btn btn-primary" onClick={changeHandler}>Add</button>
                </span>
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

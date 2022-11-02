import {React, useState} from "react";
import { dataContext } from '../nodeContext';
import { useContext } from 'react';
const Admin =()=>{
  const [hobbies, setHobbies, tShirt, settShirt,
    height, setHeight, weight, setWeight, company, setCompany, 
    skills, setSkills, work, setWork] = useContext(dataContext);
 const [data1, setData1] = useState([])

    async function findusers(e){
        e.preventDefault()
        let body={height,weight,tShirt, hobbies}
        body=Object.keys(body).filter(item=>body[item]==='' && delete body[item])
        console.log(body)
        const response = await fetch('http://localhost:6969/api/finduserpersonadata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    })
    const data =await response.json()


    setData1(data.user)

}


const renderuser = data1 && data1.map(user=>{
    console.log(user , "wssdw")
    return(
    <h1>{user.email}</h1>
    )
})

    return(
    <>
    <h1>Admin login</h1>

    <table>
        <tr>
            <th>
                PersonalData
            </th>
            <th>
                professionaldata
            </th>
        </tr>
        <tr>
            <td>
                <form onSubmit={findusers}>
                    <input type="number" placeholder="height" value={height} onChange={(e)=>{setHeight(e.target.value)}} >
                    </input>
                    <input type="number" placeholder="weight" value={weight} onChange={(e)=>{setWeight(e.target.value)}} >
                    </input>
                    <input type="number" placeholder="tshit" value={tShirt} onChange={(e)=>{settShirt(e.target.value)}} >
                    </input>
                    <input type="text" placeholder="hobbies" value={hobbies} onChange={(e)=>{setHobbies([e.target.value])}} >
                    </input>
                    <input type='submit'></input>
                </form>
                
            </td>
        </tr>
    </table>
    {
                    renderuser
                }
    </>
    )
}

export default Admin;
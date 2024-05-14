import React, { useState } from 'react'
import './index.css'
const App = () => {
  const [input,setinput] =useState('')
  const [number,setnumber] = useState('')
  const [expance,setexpance] = useState([])
  const handleClick = () => {
    if(!input || !number) return;
    const newExpance = {
      id : expance.length +1,
      title : input,
      amount : number
    }
    setexpance([...expance, newExpance])
    setinput('');
    setnumber('');
  }
  const handelDelete = (Id) => {
    setexpance(expance.filter((expance) => 
      expance.id !== Id
    ))
  }
  return (
    <div className='Container'>
      <h1>Expance Tracker</h1>
      <div className='input-container'>
        <input type="text" value={input} placeholder='Enter Expance Title' onChange={(e)=>setinput(e.target.value)}/>
        <input type="number" value={number} placeholder='Enter Expance Amount' onChange={(e)=>setnumber(e.target.value)}/>
        <button onClick={handleClick}>Save Expance</button>
      </div>
      <div className='display-data'>
      <ul>
        {
          expance.map((expance) => (
            <li key={expance.id}>
              <span>{expance.title}</span>
              <span>${expance.amount}</span>
              <button onClick={()=>{handelDelete(expance.id)}}>Delete</button>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export default App

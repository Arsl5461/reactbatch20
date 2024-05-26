import React,{useState} from 'react'

const Counter = () => {
    const [counter,setcounter]=useState(0);
    const add=()=>{
setcounter(counter+1)
    }
    const minus=()=>{
        setcounter(counter-1)
    }
  return (
    <div>
      <div className="d-flex">
        <button className='btn btn-danger' onClick={()=>minus()}>-</button>
        <h1>{counter}</h1>
        <button className='btn btn-primary' onClick={()=>add()}>+</button>
      </div>
    </div>
  )
}

export default Counter

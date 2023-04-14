import React from 'react'
import { useState } from 'react';

function Inputy() {
    const [fruit,setFruit] = useState('Apple');
    const [inputText,setinputText] = useState('');
  
    const updateInputText=(event)=>{
      const currInputValue = event.target.value;
      setinputText(currInputValue);
    }
  return (
    <div>
      <div className="inp">
        {/* <p>Today fruit is {fruit}</p> */}
        <p>Today fruit is {inputText}</p>
        <input type="text" onChange={updateInputText}/>
        {/* <button onClick={()=>setFruit(inputText)}>submit</button> */}
      </div>
    </div>
  )
}

export default Inputy
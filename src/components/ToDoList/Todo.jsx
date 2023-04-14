import React, { useState } from 'react'
import './Todo.css'

function Todo() {
    const [Notes,setNotes] = useState([]);
    const [CurrNote,setCurrNote] = useState('');

    const UpdateCurrNote=(event)=>{
        setCurrNote(event.target.value);
    }

    const AddCurrNote = () => {
        const NewNoteArray = [...Notes,CurrNote];
        setNotes(NewNoteArray);
    }

  return (
    <div>
        <input type="text" onChange={UpdateCurrNote}/>
        <button onClick={AddCurrNote}>Submit</button>
        <ul>
            {
                Notes.map((note,index)=>{
                    return(<li key={index}>{note}</li>)
                })
            }
        </ul>

        <button onClick={()=>{setNotes([])}}>Reset</button>

    </div>
  )
}

export default Todo
import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createNote } from '../redux/slices/notesSlice';

function CreateNote() {
    const [title,settitle] = useState('');
    const [desc, setdesc] = useState('');

    const dispatch = useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(createNote({
          title,
          desc,
          id: nanoid(9)
        }))
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Title here' onChange={(e)=>settitle(e.target.value)}/>
            <input type="text" placeholder='Description Here' onChange={(e)=>setdesc(e.target.value)}/>
            <input type="submit" onClick={handleSubmit}/>
        </form>
    </div>
  )
}

export default CreateNote
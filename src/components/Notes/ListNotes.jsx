import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote } from '../redux/slices/notesSlice';

function ListNotes() {
    const notes = useSelector(state => state.notesReducer.notes);
    const dispatch = useDispatch();
    const boxcolour = ["blueviolet","cadetblue","burlywood","cornflowerblue","chocolate"];

  return (
    <div>
        {notes.map((note,index) => {
            return(<div style={{border:"1px grey solid",margin:"5px",borderRadius:"3px",padding:"5px",backgroundColor:boxcolour[index%5]}}>
            <p>{note.id}</p>
            <h2>{note.title}</h2>s
            <p>{note.desc}</p>
            <button onClick={()=>dispatch(deleteNote(note.id))}>delete</button>
            </div>
            )
        })}
    </div>
  )
}

export default ListNotes
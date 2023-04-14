import { useState } from 'react'
import './App.css'
import Inputy from './components/Inputy'
import CreateNote from './components/Notes/CreateNote'
import ListNotes from './components/Notes/ListNotes'
import Todo from './components/ToDoList/Todo'
import Counter from './components/UseReducer/UseredcuerPractise'

function App() {

  return (
    <div className="App">
      {/* <Inputy/>
      <br/>
      <Todo/> */}


      {/* noted uncomment this */}
        <CreateNote/>
        <ListNotes/>

      {/* <Counter/> */}
    </div>
  )
}

export default App

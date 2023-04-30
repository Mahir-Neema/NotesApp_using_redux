import { useState } from 'react'
import './App.css'
import Inputy from './components/Inputy'
import CreateNote from './components/Notes/CreateNote'
import ListNotes from './components/Notes/ListNotes'
import Todo from './components/ToDoList/Todo'
import Counter from './components/UseReducer/UseredcuerPractise'
import Reducerpractise from './components/ReducerPractise/reducerpractise'


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
      {/* <Reducerpractise/> */}
    </div>
  )
}

export default App

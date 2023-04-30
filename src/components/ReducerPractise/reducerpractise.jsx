import React, { useReducer } from 'react'


function reducer(state,action){
    switch(action.type){
        case 'name_change':{
            return {
                name: state.newname,
                age: state.age
            }
        }

        case 'increase_salary':{
            return {
                name: state.name,
                age: state.age+1
            }
        }
    }

    throw Error("Unknown action:" + action.type); 
}

const initialstate   = {name:'mahir neema',salary:9000}

function Reducerpractise() {
    const [state,dispatch] = useReducer(reducer, initialstate);

    function handlenamechange(e){
        dispatch({
            type:'name_change',
            newname: e.target.value
        });
    }

    function handleincreasesalary(){
        dispatch({
            type:'increase_salary'
        });
    }

  return (
    <>
    <input value={state.name} onChange={handlenamechange}/>
    <button onClick={handleincreasesalary}> increase salary</button>

    <h2>{state.name} has a salary of ${state.salary}</h2>
    </>
  )
}

export default Reducerpractise
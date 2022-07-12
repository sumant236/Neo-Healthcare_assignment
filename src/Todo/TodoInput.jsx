import React, { useState } from 'react'

export const TodoInput = ({addData}) => {
    const [state, setState] = useState("");
  return ( <>
        <h1>Todo List</h1>
        <div style={{display: "flex", gap: "2rem"}}>
            <input type="text" placeholder='Add Something' value={state} onChange={(e)=> setState(e.target.value)}/>
            <button onClick = {()=>{addData(state); setState("")}}>Add Todo</button>
        </div>
    </>
  )
}

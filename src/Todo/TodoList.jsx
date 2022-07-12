import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, toggleTodo } from '../redux/action';

export const TodoItem = ({title, status, deleteItem, toggleItem, complete, id}) => {
    return (
        <div style={{display: "flex", gap: "2rem", margin: "2rem"}}>
            <div>{title}</div>
            <div>{status?"Success":"Fail"}</div>
            <button onClick={()=>deleteItem(id)}>Delete</button>
            {!status?<button onClick={()=>toggleItem(id)}>Complete</button>:null}
        </div>
    )
}

export const TodoList = () => {
    const todos = useSelector((state)=>state.todos);
    console.log(todos);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        const action = removeTodo(id);
        dispatch(action);
    }
    const handleToggle = (id) => {
        const action = toggleTodo(id);
        dispatch(action);
    }
    return (
        <div>
          {todos.map((item)=>(<TodoItem key={item.id} {...item} toggleItem={handleToggle} deleteItem={handleDelete}/>))}
        </div>
  )
}

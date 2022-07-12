import React from 'react'
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'
import {v4 as uuid} from "uuid"
import { addTodo } from '../redux/action'
import { useDispatch } from 'react-redux'

export const Todo = () => {
    const dispatch = useDispatch();
    const handleAdd = (text) => {
        const action = addTodo ({
            title: text,
            status: false,
            id: uuid()
        })
        dispatch(action);
    }
  return (
    <div>
        <TodoInput addData={handleAdd}/>
        <TodoList />
    </div>
  )
}

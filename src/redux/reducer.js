import { actionConstants } from "./action";

const initState = {
    todos: [
    ]
}


export function reducer ( state = initState , action ){
    switch (action.type) {
        case actionConstants.ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos, action.payload
                ]
            }
        case actionConstants.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((item)=>item.id!==action?.payload?.id)
            }
        case actionConstants.TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((item)=>item.id===action.payload.id?{...item, status: !item.status}: item)
            }
        default: 
            return state
    }
}
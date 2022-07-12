export const actionConstants = {
    ADD_TODO : "ADD_TODO",
    REMOVE_TODO: "REMOVE_TODO",
    TOGGLE_TODO: "TOGGLE_TODO"
}

export const addTodo = ({id, title, status, complete}) => {
    return {
        type: actionConstants.ADD_TODO,
        payload: {
            id, title, status,
        }
    }
}

export const removeTodo = (id) => {
    return {
        type: actionConstants.REMOVE_TODO,
        payload: {
            id: id
        }
    }
}

export const toggleTodo = (id) => {
    return {
        type: actionConstants.TOGGLE_TODO,
        payload: {
            id: id
        }
    }
}
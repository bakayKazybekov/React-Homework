import { createStore } from "redux"

const initialState = {
    todoList: [],

    posts: [],
    users:[]
}

function todoReducer (state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
        case 'DELETE_TODO': 
            return {
                ...state,
                todoList: state.todoList.filter((i) => i.id !== action.payload && i)
            }
        case 'EDIT_TODO': 
            return {
                ...state,
                todoList: state.todoList.filter((i) => i.id === action.payload.id ? action.payload : i)
            }
        default:
            return state
    }
}

export function addTodo (todo) {
    return {
        type: 'ADD_TODO',
        payload: todo,
    }
}

export function deleteTodo (id) {
    return {
        type: 'DELETE_TODO',
        payload: id,
    }
}

export function editTodo (obj) {
    return {
        type: 'EDIT_TODO',
        payload: obj,
    }
}

export const store = createStore(todoReducer)
import { createStore } from "redux"
import { initialState } from "./initialState"

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
                todoList: state.todoList.map((i) => i.id === action.payload.id ? action.payload : i)
            }
        case 'CHANGE_DONE':
            return {
                ...state,
                todoList: state.todoList.map((i) => i.id === action.payload ? {...i, isDone: !i.isDone} : i)
            }
        default:
            return state
    }
}

export const store = createStore(todoReducer)
import { createSlice } from '@reduxjs/toolkit'
import { fetchTodos } from './actions'
import { initialState } from "./initialState"

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
      addTodos: (state, action) => {
        state.todos.push(action.payload)
      }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.todos = action.payload
            state.isLoad = false
        })
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.error = action.payload
            state.isLoad = false
        })
        builder.addCase(fetchTodos.pending, (state) => {
            state.isLoad = true
        })
    }
})

export const { addTodos } = todosSlice.actions
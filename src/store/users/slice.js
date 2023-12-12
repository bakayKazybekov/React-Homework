import { createSlice } from '@reduxjs/toolkit'
import { fetchUsers } from './actions'
import { initialState } from "./initialState"

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      addUsers: (state, action) => {
        state.users.push(action.payload)
      }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload
            state.isLoad = false
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.error = action.payload
            state.isLoad = false
        })
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoad = true
        })
    }
})

export const { addUsers } = usersSlice.actions
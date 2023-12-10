import { createSlice } from '@reduxjs/toolkit'
import { fetchComments } from './actions'
import { initialState } from "./initialState"

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
      addComments: (state, action) => {
        state.comments.push(action.payload)
      }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.comments = action.payload
            state.isLoad = false
        })
        builder.addCase(fetchComments.rejected, (state, action) => {
            state.error = action.payload
            state.isLoad = false
        })
        builder.addCase(fetchComments.pending, (state) => {
            state.isLoad = true
        })
    }
})

export const { addComments } = commentsSlice.actions
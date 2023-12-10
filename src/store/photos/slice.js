import { createSlice } from '@reduxjs/toolkit'
import { fetchPhotos } from './actions'
import { initialState } from "./initialState"

export const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
      addPhotos: (state, action) => {
        state.photos.push(action.payload)
      }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPhotos.fulfilled, (state, action) => {
            state.photos = action.payload
            state.isLoad = false
        })
        builder.addCase(fetchPhotos.rejected, (state, action) => {
            state.error = action.payload
            state.isLoad = false
        })
        builder.addCase(fetchPhotos.pending, (state) => {
            state.isLoad = true
        })
    }
})

export const { addPhotos } = photosSlice.actions
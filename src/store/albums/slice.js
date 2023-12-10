import { createSlice } from '@reduxjs/toolkit'
import { fetchAlbums } from './actions'
import { initialState } from "./initialState"

export const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {
      addAlbums: (state, action) => {
        state.albums.push(action.payload)
      }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAlbums.fulfilled, (state, action) => {
            state.albums = action.payload
            state.isLoad = false
        })
        builder.addCase(fetchAlbums.rejected, (state, action) => {
            state.error = action.payload
            state.isLoad = false
        })
        builder.addCase(fetchAlbums.pending, (state) => {
            state.isLoad = true
        })
    }
})

export const { addAlbums } = albumsSlice.actions
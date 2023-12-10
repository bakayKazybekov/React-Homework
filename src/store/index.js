import { configureStore } from '@reduxjs/toolkit'
import { albumsSlice } from './albums/slice'
import { commentsSlice } from './comments/slice'
import { photosSlice } from './photos/slice'
import { postsSlice } from './posts/slice'
import { todosSlice } from './todos/slice'
import { usersSlice } from './users/slice'

export const store = configureStore({
    reducer: {
        postsReducer: postsSlice.reducer,
        usersReducer: usersSlice.reducer,
        commentsReducer: commentsSlice.reducer,
        albumsReducer: albumsSlice.reducer,
        todosReducer: todosSlice.reducer,
        photosReducer: photosSlice.reducer
    }
})
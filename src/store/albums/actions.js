import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../api";

export const fetchAlbums = createAsyncThunk(
    'albums/fetchAlbums', 
    async (_, thunkAPI) => {
        try {
            const response = await API.get('albums')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при загрузке Альбомов!')
        }
    }
)
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../api";

export const fetchPhotos = createAsyncThunk(
    'photos/fetchPhotos', 
    async (_, thunkAPI) => {
        try {
            const response = await API.get('photos?albumId=1')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при загрузке Фотографий!')
        }
    }
)
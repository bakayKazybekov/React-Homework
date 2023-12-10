import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../api";

export const fetchComments = createAsyncThunk(
    'comments/fetchComments', 
    async (_, thunkAPI) => {
        try {
            const response = await API.get('comments')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при загрузке Комментариев!')
        }
    }
)
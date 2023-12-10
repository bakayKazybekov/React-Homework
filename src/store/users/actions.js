import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../api";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers', 
    async (_, thunkAPI) => {
        try {
            const response = await API.get('users')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при загрузке Пользователей!')
        }
    }
)
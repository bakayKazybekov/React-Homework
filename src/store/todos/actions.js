import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../api";

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos', 
    async (_, thunkAPI) => {
        try {
            const response = await API.get('todos')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при загрузке Tудушек!')
        }
    }
)
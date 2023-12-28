import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const CATE_URL = 'https://fakestoreapi.com/products/categories'

const initialState = []

export const fetchCategory = createAsyncThunk('posts/fetchCategory', async () => {
    try {
        const response = await axios.get(CATE_URL)
        return response.data
    }
    catch (err) {
        return err.message;
    }
})



const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const selectAllCategory = (state) => state.category;

export default categorySlice.reducer
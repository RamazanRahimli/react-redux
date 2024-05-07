import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSliceThunk = createAsyncThunk('api,data', async () => {
    try {
        const res = await axios.get('https://dummyjson.com/products');
        console.log('tank', res.data.products);
        return res.data.products;
    } catch (error) {
        throw error;
    }
});

const initialState = {
    loading: false,
    products: [],
    error: null
};

export const getSlice = createSlice({
    name: 'getSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSliceThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getSliceThunk.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getSliceThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // action.error.message içinde hatanın açıklaması olacak
            });
    }
});

export default getSlice.reducer;

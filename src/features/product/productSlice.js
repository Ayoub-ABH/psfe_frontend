import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productServices";

const initialState = {
  products: [],
  cardProducts:[],
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: ""
}

//get newPoducts
export const getNewProducts = createAsyncThunk(
    "product/getNew",
    async (thunkAPI) => {
      try {
        return await productService.getNewProducts();
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );



const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
      
    },
    extraReducers: () => {
        
    },
});


//export const { } = productSlice.actions;
export default productSlice.reducer;

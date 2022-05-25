import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "./orderServices";

const initialState = {
  order:{},
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: ""
}

//get newPoducts
export const addOrder = createAsyncThunk(
    "order/Add",
    async (order,thunkAPI) => {
      try {
        return await orderService.addOrder(order);
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


  const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      }

    },
    extraReducers: (builder) => {
      builder
      .addCase(addOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      
    }
})





export const { reset } = orderSlice.actions;
export default orderSlice.reducer;
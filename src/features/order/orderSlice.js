import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "./orderServices";

const initialState = {
  order:{},
  allOrders:[],
  allOrdersToSearch:[],
  myOrders:[],
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: ""
}

//add order
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


 export const getAllOrders = createAsyncThunk(
  "order/all",
  async (_,thunkAPI) => {
    try {
      return await orderService.getAllOrders();
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

export const getMyOrders = createAsyncThunk(
  "order/my",
  async (_,thunkAPI) => {
    try {
      return await orderService.getMyOrders();
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

export const deleteOrder = createAsyncThunk(
  "order/delete",
  async (idOrder,thunkAPI) => {
    try {
      return await orderService.deleteOrder(idOrder);
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


export const updateOrderStatus = createAsyncThunk(
  "order/update",
  async (orderData,thunkAPI) => {
    try {
      return await orderService.updateOrderStatus(orderData);
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
      },
      setOrdersList:(state,action)=>{
        state.allOrders=action.payload;
      },

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


      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allOrders=action.payload;
        state.allOrdersToSearch=action.payload;

      })


      .addCase(getMyOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.myOrders=action.payload;
      })

      .addCase(deleteOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message= action.payload;
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(updateOrderStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message= action.payload;
      })
      .addCase(updateOrderStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      
    }
})





export const { reset,setOrdersList } = orderSlice.actions;
export default orderSlice.reducer;
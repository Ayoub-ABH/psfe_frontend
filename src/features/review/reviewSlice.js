import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import reviewService from "./reviewServices";


const initialState = {
    productReviews:{},
    allReviews:[],
    allReviewsToSearch:[],
    isSuccess: false,
    isLoading: false,
    isError: false,
    message: ""
  }

//add review
export const addReview = createAsyncThunk(
    "review/Add",
    async (data,thunkAPI) => {
      try {
        return await reviewService.addProductReview(data);
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

//get Product reviews
export const getReviews = createAsyncThunk(
  "review/getAll",
  async (query,thunkAPI) => {
    try {
      return await reviewService.getAllProductReviews(query);
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


//get Product reviews
export const deleteReview = createAsyncThunk(
  "review/delete",
  async (Review,thunkAPI) => {
    try {
      return await reviewService.deleteProductReview(Review);
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


//get Product reviews
export const getAllReviews = createAsyncThunk(
  "review/all reviews",
  async (_,thunkAPI) => {
    try {
      return await reviewService.getAllReviews();
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

const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      },
      setReviewsList:(state,action)=>{
        state.allReviews=action.payload;
      },

    },
    extraReducers: (builder) => {
      builder
      .addCase(addReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(addReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })


      .addCase(getReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.productReviews = action.payload;
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.isLoading = false;
        // state.isError = true;
        // state.message = action.payload;
      })

      .addCase(deleteReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(deleteReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })


      .addCase(getAllReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allReviews = action.payload;
        state.allReviewsToSearch = action.payload;

      })
      .addCase(getAllReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

    },
});


export const { reset,setReviewsList } = reviewSlice.actions;
export default reviewSlice.reducer;

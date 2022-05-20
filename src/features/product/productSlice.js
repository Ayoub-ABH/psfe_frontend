import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productServices";

const initialState = {
  products: {new :[],top:[]}, 
  shopProducts:{},
  categories:[],
  product:{},
  brands:[],
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: ""
}

//get newPoducts
export const getHomeProducts = createAsyncThunk(
    "product/getNew",
    async (_,thunkAPI) => {
      try {
        return await productService.getHomeProducts();
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

//get allProducts
export const getAllProducts = createAsyncThunk(
  "product/getAll",
  async (_,thunkAPI) => {
    try {
      return await productService.getAllProducts();
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

//get SomeProducts
export const getSomeProducts = createAsyncThunk(
  "product/getSome",
  async (query,thunkAPI) => {
    try {
      return await productService.getSomeProducts(query);
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


//get OneProduct
export const getOneProduct = createAsyncThunk(
  "product/getOne",
  async (id,thunkAPI) => {
    try {
      return await productService.getOneProduct(id);
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
      reset: (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      }

    },
    extraReducers: (builder) => {
      builder
      .addCase(getHomeProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHomeProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products=action.payload;
      })
      .addCase(getHomeProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      
      
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.shopProducts=action.payload;
        state.brands=[...new Set(action.payload.docs.map((p) => p.brand))];
        state.categories=[...new Set(action.payload.docs.map((p) => p.category))];
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getSomeProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.shopProducts=action.payload;
      })
      .addCase(getSomeProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })


      .addCase(getOneProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product=action.payload;
      })
      .addCase(getOneProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
    },
});


export const { reset } = productSlice.actions;
export default productSlice.reducer;

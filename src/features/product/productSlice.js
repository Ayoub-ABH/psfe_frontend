import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productServices";

const initialState = {
  products: {new :[],top:[]}, 
  shopProducts:{},
  allProducts:[],
  allProductsToSearch:[],
  categories:[],
  product:{},
  brands:[],
  isSuccess: false,
  isLoadingProduct: false,
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

//get allProducts amdin
export const getAllProductsAdmin = createAsyncThunk(
  "product/getAllAdmin",
  async (_,thunkAPI) => {
    try {
      return await productService.getAllProductsAdmin();
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
//add product 
export const addProduct = createAsyncThunk(
  "product/add",
  async (productData,thunkAPI) => {
    try {
      return await productService.addProduct(productData);
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


//update product 
export const updateProduct = createAsyncThunk(
  "product/update",
  async (productData,thunkAPI) => {
    try {
      return await productService.updateProduct(productData);
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

//delete product
export const deleteProduct = createAsyncThunk(
  "product/delete",
  async (idProduct,thunkAPI) => {
    try {
      return await productService.deleteProduct(idProduct);
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
        state.isLoadingProduct = false;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      },
      setProductsList:(state,action)=>{
        state.allProducts=action.payload;
      },

    },
    extraReducers: (builder) => {
      builder
      .addCase(getHomeProducts.pending, (state) => {
        state.isLoadingProduct = true;
      })
      .addCase(getHomeProducts.fulfilled, (state, action) => {
        state.isLoadingProduct = false;
        state.isSuccess = true;
        state.products=action.payload;
      })
      .addCase(getHomeProducts.rejected, (state, action) => {
        state.isLoadingProduct = false;
        state.isError = true;
        state.message = action.payload;
      })
      
      
      .addCase(getAllProducts.pending, (state) => {
        state.isLoadingProduct = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoadingProduct = false;
        state.isSuccess = true;
        state.shopProducts=action.payload;
        state.brands=[...new Set(action.payload.docs.map((p) => p.brand))];
        state.categories=[...new Set(action.payload.docs.map((p) => p.category))];
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoadingProduct = false;
        state.isError = true;
        state.message = action.payload;
      })

      
      
      .addCase(getSomeProducts.fulfilled, (state, action) => {
        state.isLoadingProduct = false;
        state.isSuccess = true;
        state.shopProducts=action.payload;
      })
      .addCase(getSomeProducts.rejected, (state, action) => {
        state.isLoadingProduct = false;
        state.isError = true;
        state.message = action.payload;
      })


      .addCase(getOneProduct.pending, (state) => {
        state.isLoadingProduct = true;
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.isLoadingProduct = false;
        state.isSuccess = true;
        state.product=action.payload;
      })
      .addCase(getOneProduct.rejected, (state, action) => {
        state.isLoadingProduct = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getAllProductsAdmin.pending, (state) => {
        state.isLoadingProduct = true;
      })

      .addCase(getAllProductsAdmin.fulfilled, (state, action) => {
        state.isLoadingProduct = false;
        state.isSuccess = true;
        state.allProducts=action.payload;
        state.allProductsToSearch=action.payload;
      })

      .addCase(addProduct.pending, (state) => {
        state.isLoadingProduct = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isLoadingProduct = false;
        state.isSuccess = true;
        state.message=action.payload;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.isLoadingProduct = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(deleteProduct.pending, (state) => {
        state.isLoadingProduct = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoadingProduct = false;
        state.isSuccess = true;
        state.message=action.payload;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoadingProduct = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(updateProduct.pending, (state) => {
        state.isLoadingProduct = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoadingProduct = false;
        state.isSuccess = true;
        state.message=action.payload;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.isLoadingProduct = false;
        state.isError = true;
        state.message = action.payload;
      })
      
    },
});


export const { reset,setProductsList } = productSlice.actions;
export default productSlice.reducer;

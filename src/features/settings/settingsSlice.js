import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import settingsService from "./settingsServices";


const initialState = {
    allSettings:[],
    isSuccess: false,
    isLoadingSettings: false,
    isError: false,
    message: ""
  }



//get all settings
export const getAllSettings= createAsyncThunk(
  "settings/all",
  async (_,thunkAPI) => {
    try {
      return await settingsService.getAllSettings();
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


//update settings
export const updateSettings = createAsyncThunk(
  "settings/update",
  async (data,thunkAPI) => {
    try {
      return await settingsService.updateSettings(data);
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



const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoadingSettings = false;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      }

    },
    extraReducers: (builder) => {
      builder
      .addCase(getAllSettings.pending, (state) => {
        state.isLoadingSettings = true;
      })
      .addCase(getAllSettings.fulfilled, (state, action) => {
        state.isLoadingSettings = false;
        state.isSuccess = true;
        state.allSettings = action.payload;
      })
      .addCase(getAllSettings.rejected, (state, action) => {
        state.isLoadingSettings = false;
        state.isError = true;
        state.message = action.payload;
      })


      .addCase(updateSettings.pending, (state) => {
        state.isLoadingSettings = true;
      })
      .addCase(updateSettings.fulfilled, (state, action) => {
        state.isLoadingSettings = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      
    },
});


export const { reset } = settingsSlice.actions;
export default settingsSlice.reducer;

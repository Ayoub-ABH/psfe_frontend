import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contactService from "./contactServices";


const initialState = {
    allContacts:[],
    isSuccess: false,
    isLoading: false,
    isError: false,
    message: ""
  }

//add review
export const addContact = createAsyncThunk(
    "contact/add",
    async (contact,thunkAPI) => {
      try {
        return await contactService.addContact(contact);
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
export const getAllContacts = createAsyncThunk(
  "contact/all",
  async (_,thunkAPI) => {
    try {
      return await contactService.getAllContacts();
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
export const deleteContact = createAsyncThunk(
  "contact/delete",
  async (idContact,thunkAPI) => {
    try {
      return await contactService.deleteContact(idContact);
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



const contactSlice = createSlice({
    name: "contact",
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
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })


      .addCase(getAllContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allContacts = action.payload;
      })
      .addCase(getAllContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

    },
});


export const { reset } = contactSlice.actions;
export default contactSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contactService from "./contactServices";


const initialState = {
    allContacts:[],
    allContactsToSearch:[],
    isSuccess: false,
    isLoadingContact: false,
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
        state.isLoadingContact = false;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      },
      setContactsList:(state,action)=>{
        state.allContacts=action.payload;
      },

    },
    extraReducers: (builder) => {
      builder
      .addCase(addContact.pending, (state) => {
        state.isLoadingContact = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoadingContact = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoadingContact = false;
        state.isError = true;
        state.message = action.payload;
      })


      .addCase(getAllContacts.pending, (state) => {
        state.isLoadingContact = true;
      })
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.isLoadingContact = false;
        state.isSuccess = true;
        state.allContacts = action.payload;
        state.allContactsToSearch = action.payload;
      })
    

      .addCase(deleteContact.pending, (state) => {
        state.isLoadingContact = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoadingContact = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoadingContact = false;
        state.isError = true;
        state.message = action.payload;
      })

    },
});


export const { reset,setContactsList} = contactSlice.actions;
export default contactSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userServices";

// Get user from localStorage
const userInfo = JSON.parse(localStorage.getItem("userInfo"));

const initialState = {
  user: userInfo ? userInfo.user : null,
  allUsers:[],
  allUsersToSearch:[],
  isSuccess: false,
  isLoadingUser: false,
  isError: false,
  message: "",
};

// Register user
export const register = createAsyncThunk(
  "user/register",
  async (user, thunkAPI) => {
    try {
      return await userService.register(user);
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



//login user
export const login = createAsyncThunk(
  "user/login",
  async (user, thunkAPI) => {
    try {
      return await userService.login(user);
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

// Add user
export const addUser = createAsyncThunk(
  "user/add",
  async (user, thunkAPI) => {
    try {
      return await userService.addUser(user);
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

// Add user
export const deleteUser = createAsyncThunk(
  "user/delete",
  async (idUser, thunkAPI) => {
    try {
      return await userService.deleteUser(idUser);
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

//get all users
export const getAllUsers = createAsyncThunk(
  "user/get all",
  async (_, thunkAPI) => {
    try {
      return await userService.getAllUsers();
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

//update user
export const updateUserProfile = createAsyncThunk(
  "user/update",
  async (data, thunkAPI) => {
    try {
      return await userService.updateUserProfile(data);
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
) 

//update user
export const updateUserFromAdmin = createAsyncThunk(
  "user/updateFromAdmin",
  async (data, thunkAPI) => {
    try {
      return await userService.updateUserFromAdmin(data);
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


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoadingUser = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    logout:(state)=>{
      localStorage.removeItem('userInfo')
      state.user = null;
    },
    setUsersList:(state,action)=>{
      state.allUsers=action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoadingUser = false;
        state.isSuccess = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoadingUser = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(login.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoadingUser = false;
        state.isSuccess = true;
        state.user=action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoadingUser = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(addUser.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.isLoadingUser = false;
        state.isSuccess = true;
        state.message=action.payload;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.isLoadingUser = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(deleteUser.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoadingUser = false;
        state.isSuccess = true;
        state.message=action.payload;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoadingUser = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(updateUserProfile.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isLoadingUser = false;
        state.isSuccess = true;
        state.user=action.payload.user;
        state.message='user updated';
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoadingUser = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(updateUserFromAdmin.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(updateUserFromAdmin.fulfilled, (state, action) => {
        state.isLoadingUser = false;
        state.isSuccess = true;
        state.message=action.payload;
      })
      .addCase(updateUserFromAdmin.rejected, (state, action) => {
        state.isLoadingUser = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getAllUsers.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoadingUser = false;
        state.isSuccess = true;
        state.allUsers = action.payload;
        state.allUsersToSearch=action.payload;
      })
  },
});

export const { reset,logout,setUsersList} = userSlice.actions;
export default userSlice.reducer;

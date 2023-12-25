import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import axios, { AxiosResponse } from "axios";

export interface User {
  id?: string;
  // myposter?: [];
  name: string;
  surname: string;
  // age: number;
  // country: string;
  // info: string;
  username: string;
  // gender: string;
  password: string;
  // bio: string;
  email: string;
  number: string;
  // ispublic: boolean;
  // ntfctncontent?:string,
}

export const getUsersData = createAsyncThunk("users/getUsersData", async () => {
  const response: AxiosResponse<User[]> = await axios.get(
    "https://userapideployda.onrender.com/users"
  );
  return response.data;
});

export const postUsersData = createAsyncThunk(
  "users/postUsersData",
  async (newUser: User) => {
    console.log(newUser);
    const response: AxiosResponse<User[]> = await axios.post(
      "https://userapideployda.onrender.com/users",
      { ...newUser, id: uuidv4() }
    );
    return response.data;
  }
);

export interface UserState {
  user: User;
  users: User[];
}
export interface Id {
  _id: string;
}
const initialState: UserState = {
  user: {
    name: "",
    surname: "",
    username: "",
    password: "",
    email: "",
    number: '',
  },
  users: [],
}

export const UserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<User>) => {
      const { payload } = action;
      let obj: User = {
        name: payload.name,
        surname: payload.surname,
        username: payload.username,
        password: payload.password,
        email: payload.email,
        number: payload.number,
      };
      state.user = obj;
    },
  },



  extraReducers: (builder) => {
    builder
      .addCase(getUsersData.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(getUsersData.rejected, (state, action) => {
        console.error("Failed to get news data:", action.error);
      })
      .addCase(postUsersData.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(postUsersData.rejected, (state, action) => {
        console.error("Failed to post user data:", action.error);
      });

  },
})

export const { getUser } = UserSlice.actions

export default UserSlice.reducer
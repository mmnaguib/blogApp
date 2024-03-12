import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface UserLogin{
  email: string,
  password: string
}
interface loginAuth{
  user: UserLogin | null,
}
const initialState: loginAuth = {
  user: null
}
export const loginUser = createAsyncThunk('auth/login', async(user: UserLogin) => {
  const response = await fetch("https://dummyjson.com/auth/login", {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({user})
  })
const data = await response.json();
return data;
})
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled,(state, action: PayloadAction<loginAuth>) => {
      // state.user = action.payload;
    }).addCase(loginUser.rejected, (action)=>{
      console.log(action)
    })
  },
});

export default AuthSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { updateUser } from "./apiRequest";

const initUser = JSON.parse(localStorage.getItem('user')) || {
  name: "Vo Quoc Hung",
  age: "20",
  about: "Im a sortware engineer",
  avatar:
    "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/327345757_482797330717644_3948553057199752675_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=t7vD1TTrShIAX_SnI9Y&_nc_ht=scontent.fdad3-1.fna&oh=00_AfB6gWkWKMqExVquitJkqIE4jlRVUnhwPSFWlmb8FL4zdQ&oe=640F84C9",
  theme: "red",
  pending: false,
  error: false,
}

export const userSlice = createSlice({
  name: "user",
  initialState: initUser ,
  reducers: {
    // updateStart: (state) =>{
    //   state.pending = true
    // },
    // updateError: (state)=>{
    //   state.pending = false;
    //   state.error = true

    // },
    // updateSuccess: (state,action)=>{
    //   state.pending = false;
    //   state.error = false;
    //   state.name = action.payload.name;
    //   state.age = action.payload.age;
    //   state.about = action.payload.about;
    //   state.avatar = action.payload.avatar;
    //   state.theme = action.payload.theme;
    //   localStorage.setItem('user',JSON.stringify({...action.payload,pending: false, error: false}))
    // },
  },
  extraReducers: (builder)=>{
    builder.addCase(updateUser.pending,(state)=>{
      state.pending = true
    })
    builder.addCase(updateUser.rejected,(state)=>{
      state.pending = false
      state.error = true
    })
    builder.addCase(updateUser.fulfilled,(state,action)=>{
      state.pending = false
      state.error = false
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avatar = action.payload.avatar;
      state.theme = action.payload.theme;
      localStorage.setItem('user',JSON.stringify({...action.payload,pending: false, error: false}))
    })
  }
});
export const { updateStart, updateError, updateSuccess } = userSlice.actions;
export default userSlice.reducer;

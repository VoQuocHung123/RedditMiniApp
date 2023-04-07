import { createSlice } from "@reduxjs/toolkit";
import { createNewPost } from "./apiRequest";
const initPosts = JSON.parse(localStorage.getItem("post")) || {
   listPost:[{ title: "what day is today", descriptions: "...", tag: "ShitPost" }]
}
console.log(initPosts)
export const postSlice = createSlice({
  name: "posts",
  initialState: initPosts,
  reducers: {
    // createPostSuccess: (state, action) => {
    //    state.listPost = [...state.listPost,action.payload];
    //   localStorage.setItem('posts',JSON.stringify({listPost:[...state.listPost]}))
    // },
  },
  extraReducers : (builder)=>{
    builder.addCase(createNewPost.fulfilled,(state,actions)=>{
      state.listPost = [...state.listPost,actions.payload]
      localStorage.setItem('post',JSON.stringify({listPost:[...state.listPost]}))
    })
  }
});
export const { createPostSuccess } = postSlice.actions;
export default postSlice.reducer;

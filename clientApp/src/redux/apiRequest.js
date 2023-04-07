import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser = createAsyncThunk('user/update',async (user) => {
  try {
     const res = await axios.post('http://localhost:9000/api/update',user);
     return res.data
  } catch (error) {
    console.log(error);
  }
}) 

export const createNewPost = createAsyncThunk('post/create',async (post)=>{
  try {
      const res = await axios.post('http://localhost:9000/api/createpost',post)
      return res.data
  } catch (error) {
  }
}) 

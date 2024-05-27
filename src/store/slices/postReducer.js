import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const fetchPost = createAsyncThunk(
    'fetchPost',
    async (_,{dispatch})=>{
        let res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return res.data
    }
)


export const postSlice = createSlice({
    name: 'post-slice',
    initialState : {
        post :[],
        isFetching : false
    },
    extraReducers:(builder)=>{
        builder.addCase(
            fetchPost.pending, (state,action)=>{
                state.isFetching = true
            }
        ),
        builder.addCase(
            fetchPost.fulfilled , (state,action)=>{
                state.post = action.payload
                state.isFetching = false
            }
        )
    }
    
    

})

export default postSlice.reducer
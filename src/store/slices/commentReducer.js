import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const fetchComments = createAsyncThunk(
    'fetchTodos',
    async (_,{dispatch})=>{
        let res = await axios.get('https://jsonplaceholder.typicode.com/comments')
        return res.data
    }
)


export const commentsSlice = createSlice({
    name: 'comments-slice',
    initialState : {
        comments:[],
        isFetching : false
    },
    extraReducers:(builder)=>{
        builder.addCase(
            fetchComments.pending, (state,action)=>{
                state.isFetching = true
            }
        ),
        builder.addCase(
            fetchComments.fulfilled , (state,action)=>{
                state.comments = action.payload
                state.isFetching = false
            }
        )
    }
    
    

})

export default commentsSlice.reducer
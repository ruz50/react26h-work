import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const fetchUsers = createAsyncThunk(
    'fetchTodos',
    async (_,{dispatch})=>{
        let res = await axios.get('https://jsonplaceholder.typicode.com/users')
        return res.data
    }
)


export const usersSlice = createSlice({
    name: 'users-slice',
    initialState : {
        users:[],
        isFetching : false
    },
    extraReducers:(builder)=>{
        builder.addCase(
            fetchUsers.pending, (state,action)=>{
                state.isFetching = true
            }
        ),
        builder.addCase(
            fetchUsers.fulfilled , (state,action)=>{
                state.users= action.payload
                state.isFetching = false
            }
        )
    }
    
    

})

export default usersSlice.reducer
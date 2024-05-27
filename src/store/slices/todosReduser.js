import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const fetchTodos = createAsyncThunk(
    'fetchTodos',
    async (_,{dispatch})=>{
        let res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        return res.data
    }
)


export const todosSlice = createSlice({
    name: 'todos-slice',
    initialState : {
        todos :[],
        isFetching : false
    },
    extraReducers:(builder)=>{
        builder.addCase(
            fetchTodos.pending, (state,action)=>{
                state.isFetching = true
            }
        ),
        builder.addCase(
            fetchTodos.fulfilled , (state,action)=>{
                state.todos= action.payload
                state.isFetching = false
            }
        )
    }
    
    

})

export default todosSlice.reducer
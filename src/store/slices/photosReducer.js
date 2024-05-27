import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const fetchPhotos = createAsyncThunk(
    'fetchTodos',
    async (_,{dispatch})=>{
        let res = await axios.get('https://jsonplaceholder.typicode.com/photos')
        return res.data
    }
)


export const photosSlice = createSlice({
    name: 'photos-slice',
    initialState : {
        photos:[],
        isFetching : false
    },
    extraReducers:(builder)=>{
        builder.addCase(
            fetchPhotos.pending, (state,action)=>{
                state.isFetching = true
            }
        ),
        builder.addCase(
            fetchPhotos.fulfilled , (state,action)=>{
                state.photos= action.payload
                state.isFetching = false
            }
        )
    }
    
    

})

export default photosSlice.reducer
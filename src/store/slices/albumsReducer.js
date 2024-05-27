import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const fetchAlbums = createAsyncThunk(
    'fetchTodos',
    async (_,{dispatch})=>{
        let res = await axios.get('https://jsonplaceholder.typicode.com/albums')
        return res.data
    }
)


export const albumsSlice = createSlice({
    name: 'albums-slice',
    initialState : {
        albums:[],
        isFetching : false
    },
    extraReducers:(builder)=>{
        builder.addCase(
            fetchAlbums.pending, (state,action)=>{
                state.isFetching = true
            }
        ),
        builder.addCase(
            fetchAlbums.fulfilled , (state,action)=>{
                state.albums = action.payload
                state.isFetching = false
            }
        )
    }
    
    

})

export default albumsSlice.reducer
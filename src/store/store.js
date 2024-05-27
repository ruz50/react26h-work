import { configureStore } from '@reduxjs/toolkit'
import postReducer from './slices/postReducer'
import commentReducer from './slices/commentReducer'
import photosReducer from './slices/photosReducer'
import albumsReducer from './slices/albumsReducer'
import usersReducer from './slices/usersReducer'
import todosReducer from './slices/todosReduser' 

const store = configureStore({
    reducer: {
        postData: postReducer,
        commentsData: commentReducer,
        photosData: photosReducer,
        albumsData: albumsReducer,
        usersData: usersReducer,
        todosData: todosReducer
    }
})

export default store

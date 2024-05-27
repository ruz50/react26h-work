import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchAlbums } from '../../store/slices/albumsReducer'

const Albums = () => {
    const {albums,isFetching} = useSelector((state)=>state.albumsData)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchAlbums())
    },[])
  return (
    
    <div>{
        isFetching? <h1>loading</h1>:albums.map((el)=>{
          return <div key={el.id}>{el.title}</div>
        })
      }</div>
  )
}

export default Albums
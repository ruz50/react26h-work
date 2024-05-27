import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchPhotos } from '../../store/slices/photosReducer'
import './photos.css'

const Photos = () => {
    const {photos,isFetching} = useSelector((state)=>state.photosData)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchPhotos())
    },[])
  return (
    <div className='photos'>{
        isFetching? <h1>loading</h1>:photos.map((el)=>{
          return <img src={el.url} alt="" key={el.id} />
        })
      }</div>
  )
}

export default Photos
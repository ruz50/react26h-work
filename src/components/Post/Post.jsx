import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchPost } from '../../store/slices/postReducer'

const Post = () => {
    const {post,isFetching} = useSelector((state)=>state.postData)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchPost())
    },[])
  return (
    
    <div>{
        isFetching? <h1>loading</h1>:post.map((el)=>{
          return <div key={el.id}>{el.title}</div>
        })
      }</div>
  )
}

export default Post
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchComments } from '../../store/slices/commentReducer'

const Comments = () => {
    const {comments,isFetching} = useSelector((state)=>state.commentsData)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchComments())
    },[])
  return (
    
    <div>{
        isFetching? <h1>loading</h1>:comments.map((el)=>{
          return <div key={el.id}>{el.name}</div>
        })
      }</div>
  )
}

export default Comments
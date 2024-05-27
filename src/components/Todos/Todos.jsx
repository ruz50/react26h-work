import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchTodos } from '../../store/slices/todosReduser'

const Todos = () => {
    const {todos,isFetching} = useSelector((state)=>state.todosData)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchTodos())
    },[])
  return (
    
    <div>{
        isFetching? <h1>loading</h1>:todos.map((el)=>{
          return <div key={el.id}>{el.title}</div>
        })
      }</div>
  )
}

export default Todos
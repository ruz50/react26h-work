import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchUsers} from '../../store/slices/usersReducer'

const Users = () => {
    const {users,isFetching} = useSelector((state)=>state.usersData)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
  return (
    
    <div>{
        isFetching? <h1>loading</h1>:users.map((el)=>{
          return <div key={el.id}>{el.name}</div>
        })
      }</div>
  )
}

export default Users
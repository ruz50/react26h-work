import React from 'react'
import { NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
  return (
    <div className='header'>
      <NavLink className='navlink' to='/post' >POST</NavLink>
      <NavLink className='navlink' to='/comments'>COMMENTS</NavLink>
      <NavLink className='navlink' to='/albums'>ALBUMS</NavLink>
      <NavLink className='navlink' to='/photos'>PHOTOS</NavLink>
      <NavLink className='navlink' to='/todos'>TODOS</NavLink>
      <NavLink className='navlink' to='/users'>USERS</NavLink>
    </div>
  )
}

export default Header
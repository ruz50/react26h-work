import './App.css'
import Main from './Pages/Main/Main'
import { Route,Routes } from 'react-router-dom'
import Post from './components/Post/Post'
import Albums from './components/Albums/Albums'
import Comments from './components/Comments/Comments'
import Photos from './components/Photos/Photos'
import Todos from './components/Todos/Todos'
import Users from './components/Users/User'
function App() {
  
  return (
    <>
    <Main/>
    <Routes>
      <Route path='/post' element={<Post/>}/>
      <Route path='/albums' element={<Albums/>}/>
      <Route path='/comments' element={<Comments/>}/>
      <Route path='/photos' element={<Photos/>}/>
      <Route path='/todos' element={<Todos/>}/>
      <Route path='/users' element={<Users/>}/>
    </Routes>
    
    </>
  )
}

export default App

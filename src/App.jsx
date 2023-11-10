import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Posts from './components/Posts';
import TittlePost from './components/TittlePost';
import Comments from './components/Comments';
import Todos from './components/Todos';
import TittleBody from './components/TittleBody';
import Header from './components/Header';
import PostsDelete from './components/PostsDelete';
import Users from './components/Users';


function App() {
  
  return (

       <>
       <div className='App'>
       <Header />
      <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/posts" element={<Posts/>} />
            <Route path="/tittlebody" element={<TittleBody/>} />
            <Route path="/tittleposts" element={<TittlePost />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/postdelete" element={<PostsDelete />} />


          </Routes>
       </div>
        
       
        
          </>
    
    

  )
}

export default App


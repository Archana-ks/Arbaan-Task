// import { useState } from 'react';
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Posts from './components/Posts';
import TittlePost from './components/TittlePost';
import Comments from './components/Comments';
import Todos from './components/Todos';
import TittleBody from './components/TittleBody';
import Sidebar from './components/Sidebar';
import Header from './components/Header';


function App() {
  
  return (

       <div>
        <Header />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/tittlebody" element={<TittleBody/>} />
            <Route path="/tittleposts" element={<TittlePost />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/comments" element={<Comments />} />

          </Routes>
          </div>
    
    

  )
}

export default App


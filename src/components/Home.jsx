
import React from 'react'
import Sidebar from './Sidebar';
import Posts from './Posts';
import "./Home.css"

function Home() {
  return (
    <div>
      <div className ='home'>
      <Sidebar />
        <Posts />
     </div>
    </div>
  )
}

export default Home
import React from 'react'
import { useEffect, useState } from 'react'
// import Sidebar from "./Sidebar"

function Posts() {
    const [posts, setPosts]= useState(null)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(data => {setPosts(data)})

  },[]);
  return (
    <>
     <div className="container">
      
        {posts ?(
          posts.map((post)=> {
            return (
              <div className="card mt-3" style={{backgroundColor:"rgb(156, 114, 114)", color:"white", height:"150px"}}>
                  <div className="card-body">
                  <h6 className="card-title">Id:{post.id}</h6>
                  <h6 className="card-title">UserID : {post.userId}</h6>
                  <p className="card-title">Tittle : {post.title}</p>
                  </div>
              </div>
            )
          })
        ) : (<h3>Loading....</h3>)
        }
   </div>
      </>

  )
}

export default Posts
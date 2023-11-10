import React from 'react'
import { useEffect, useState } from 'react'
// import Sidebar from "./Sidebar"

function PostsDelete() {
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
              <div className="card mt-3" style={{backgroundColor:"whitesmoke", height:"150px"}}>
                  <div className="card-body">
                  {/* <h6 className="card-title">Id : {post.id}</h6> */}
                  <h6 className="card-title">UserId : {post.userId}</h6>
                  <p className="card-title">Tittle : {post.title}</p>
                  {/* <h5 className="card-title">Body : {post.body}</h5> */}
                  <a href="#" class="btn btn-primary">Delete</a>

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

export default PostsDelete;
import React from 'react'
import { useEffect,useState } from 'react'

function TittlePost() {

  const [posts, setPosts]= useState(null)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(data => {setPosts(data)})
  },[]);

  return (
    <div>
            
        {(posts) ?(
          posts.map((post)=>{
            return (
              <div className="container">
              <div className="card mt-3" style={{backgroundColor:"yellow"}}>
                  <div className="card-body">
                  <h6 className="card-title">Id : {post.id}</h6>
                  <h6 className="card-title">UserID : {post.userId}</h6>
                  <p className="card-title">Tittle : {post.title}</p>
                  <p className="card-text">Body : {post.body}</p>
                  </div>
              </div>
              </div>
            )
          })
        ) : (<h3>Loading....</h3>)
        }
    </div>

      )
}

export default TittlePost
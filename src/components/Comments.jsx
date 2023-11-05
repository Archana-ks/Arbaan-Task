import React from 'react'
import { useEffect, useState } from 'react'

function Comments() {

  const [comments, setComments]= useState(null)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(data => data.json())
    .then(data => {setComments(data)})

  },[]);
  
  return (
    <div>
            
            {(comments) ?(
              comments.map((post)=>{
                return (
                  <div className="container">
                  <div className="card"  mt="3" style={{backgroundColor:"grey", color:"white"}}>
                      <div className="card-body">
                      <h6 className="card-title">PostID:{post.postId}</h6>
                      <h6 className="card-title">Name:{post.name}</h6>
                      <p className="card-text"> Email:{post.email}</p>
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

export default Comments
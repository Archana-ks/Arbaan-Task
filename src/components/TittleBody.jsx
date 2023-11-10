import React from 'react';
import { useEffect, useState } from 'react';

function TittleBody() {

  const [tittle, setTittle]= useState(null)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(data => {setTittle(data)})

  },[]);
  
  return (
    <div>
            
            {(tittle) ?(
              tittle.map((post)=>{
                return (
                  <div className="container">
                  <div className="card  mt-3" style={{backgroundColor:"green", color:"white"}}>
                      <div className="card-body">
                      <h6 className="card-title">ID : {post.id}</h6>
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

export default TittleBody;
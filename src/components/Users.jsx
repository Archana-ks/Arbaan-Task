import React from 'react'
import { useEffect, useState } from 'react'

function Users() {
    const [todos, setTodos]= useState(null)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(data => {setTodos(data)})

  },[]);
  
  return (
    <div>
        {(todos) ?(
              todos.map((post)=>{
                return (
                  <div className="container">
                  <div className="card mt-3" style={{backgroundColor:"lightgreen"}}>
                      <div className="card-body">
                      <h6 className="card-title">ID : {post.id}</h6>
                      {/* <h6 className="card-title">UserID : {post.userId}</h6> */}
                      <p className="card-text"> Name : {post.name}</p>
                      <p className="card-text"> Username : {post.username}</p>

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

export default Users
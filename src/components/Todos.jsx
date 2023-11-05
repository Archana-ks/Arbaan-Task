import { useEffect, useState } from 'react'
import React from 'react'

function Todos() {

  const [todos, setTodos]= useState(null)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(data => data.json())
    .then(data => {setTodos(data)})

  },[]);
  return (
       <div>
            
            {(todos) ?(
              todos.map((post)=>{
                return (
                  <div className="container">
                  <div className="card"  mt="3" style={{backgroundColor:"lightgreen"}}>
                      <div className="card-body">
                      <h6 className="card-title">ID:{post.id}</h6>
                      <h6 className="card-title">UserID:{post.userId}</h6>
                      <p className="card-text"> Tittle:{post.title}</p>
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

export default Todos
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
      <div>
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href=""><h4>Arbaan Admin</h4></a>
            
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
              <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="">
                    <Link className="nav-link" to="/">
                    Users</Link>
                    </a>
               </li>
                
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="">
                    <Link className="nav-link" to="/posts">
                    Posts</Link>
                   </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="">
                  <Link className="nav-link" to="/comments">
                    Comments</Link>
                    </a>
                </li>
                
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="">
                  <Link className="nav-link" to="/todos">
                  Todos </Link>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="">
                  <Link className="nav-link" to="/postdelete">
                  PostsDelete  </Link>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="">
                  <Link className="nav-link" to="/tittlebody">
                    TittleBody</Link>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="">
                  <Link className="nav-link" to="/tittleposts">
                  TittlePost
                  </Link>
                  </a>
                </li>            
              </ul>
            </div>
          </div>
        </nav>
      </div>
  )
}

export default Header
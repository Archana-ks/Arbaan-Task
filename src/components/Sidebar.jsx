import React from 'react'
// import TittleBody from './TittleBody';
// import TittlePost from './TittlePost';
// import Todos from './Todos';
// import Header from "./Header";
// import Posts from './Posts';
import './Sidebar.css';
import {BsCardList, BsChatRightDots, BsFillGrid1X2Fill,
  BsFillFileSpreadsheetFill, BsFillFileTextFill} from 'react-icons/bs';
  import { Link } from "react-router-dom";




function Sidebar() {
  return (
    < >
      <div className='sideleft'>
      <Link to="/posts"><h6><BsFillGrid1X2Fill />  &nbsp; Posts</h6></Link><br></br>

        <h6> <BsFillFileSpreadsheetFill />  &nbsp;  Tittle body</h6><br></br>
        <h6><BsFillFileTextFill />   &nbsp; Tittle post</h6><br></br>
        <h6> <BsChatRightDots />  &nbsp; Todos</h6><br></br>
        <h6>  <BsCardList />  &nbsp; Comments</h6> <br></br>
        </div>       
    </>
  )
}

export default Sidebar;
import React,{useContext}from 'react'
import './NavBar.css'
import {Link,useNavigate}  from 'react-router-dom'
import {UserContext} from '../App';


const NavBar=() =>{
  const {state,Dispatch}=useContext(UserContext);
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    Dispatch({type:"LOGOUT"});
    navigate.push('/login');
  }
  const navList=()=>{
    if(state){
       return[
   
        <li><Link to="/profile">Profile</Link></li>,
        <li> <button onClick={()=>logout()} className="waves-effect waves-light   #64b5f6 blue darken-1">Logout</button></li>
       
       ]
    }else{
      return [
        <li><Link to="/login">Login</Link></li>,
        <li><Link to="/signup">Sign-Up</Link></li>,
             <li><Link to="/create-post">CreatePost</Link></li>,
             <li><Link to="/profile">Profile</Link></li>,
         
        
      ]
    }
  }
  return (        
  <nav>
  <div className="nav-wrapper white">
    <Link to="/" className="brand-logo">Instagram</Link>
    <ul id="nav-mobile" className="right">
    {navList()}
    </ul>
  </div>
</nav>
  )
}

export default NavBar

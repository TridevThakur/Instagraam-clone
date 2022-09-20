import React,{useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import M from 'materialize-css'
import {useNavigate} from 'react-router-dom'
import { UserContext } from '../App'

function Login() {
//const {state,dispatch}=useContext(UserContext);
 
  const navigate=useNavigate();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const login=()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      M.toast({html:"Enter valid Email",classes:"#b71c1c red darken-4"})
      return
    }   
    
    fetch("/login",{
      method:"post",
      headers:{
        "content-Type":"application/json"
      },
      body:JSON.stringify({
        email:email,
        password:password

      })
    })
    .then(response=>response.json())
    .then(function(data){
      console.log(data);
      if(data.error)
         M.toast({html: data.error,classes:"#b71c1c red darken-4"})
      else{
        localStorage.setItem("token",data.token)
        localStorage.setItem("userInfo",JSON.stringify(data.userInfo));
        // dispatch the action and state to the reducer
       // dispatch({type: "USER", payload:data.userInfo});
         M.toast({html:"Login Sucessfull",classes:"#1b5e20 green darken-4"})
        navigate('/');
      }
    }).catch(error=>{
       console.log(error)
    })
  }
  return (
    <div className='login-container'>
      <div className='card login-card input-field input:focus'>
        <h2>Instagram</h2>
        <input type="email" placeholder='Email' value={email} onChange={(event)=>setEmail(event.target.value)}/>
        <input type="password" placeholder='Password' value={password} onChange={(event)=>setPassword(event.target.value)}/>
        <button onClick={()=>login()} className="waves-effect waves-light btn-large  #64b5f6 blue darken-1">Login</button>
        <h6>
          <Link to="/signup">Don't have an account?</Link>
        </h6>
      </div>
    </div>
  )
}

export default Login

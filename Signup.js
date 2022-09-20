import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import M from 'materialize-css'
import {useNavigate} from 'react-router-dom'
import './Signup.css'

function Signup() {
  const navigate=useNavigate();
  const [fullName,setFullName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const register=()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      M.toast({html:"Enter valid Email",classes:"#b71c1c red darken-4"})
      return
    }
    
    fetch("/register",{
      method:"post",
      headers:{
        "content-Type":"application/json"
      },
      body:JSON.stringify({
        fullName:fullName,
        email:email,
        password:password

      })
    })
    .then(response=>response.json())
    .then(function(data){
      console.log(data)
      if(data.error)
         M.toast({html: data.error,classes:"#b71c1c red darken-4"})
      else{
         M.toast({html: data.result,classes:"#1b5e20 green darken-4"})
        navigate('/login');
      }
    }).catch(error=>{
       console.log(error)
    })
  }
  return (
   
    <div className='login-container'>
      <div className='card login-card input-field input:focus'>
        <h2>Instagram</h2>
        <input type="text" placeholder='fullName'  value={fullName}  onChange={(event)=>setFullName(event.target.value)}/>
        <input type="email" placeholder='Email' value={email} onChange={(event)=>setEmail(event.target.value)}/>
        <input type="password" placeholder='Password' value={password} onChange={(event)=>setPassword(event.target.value)}/>
        <button onClick={()=>register()} className="waves-effect waves-light btn-large  #64b5f6 blue darken-1">Sign-up</button>
        <h6>
          <Link to="/login">Already have an account?</Link>
        </h6>
      </div>
    </div>
  )
}

export default Signup

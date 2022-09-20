import React, { useEffect,useState } from 'react'
import './Home.css'
function Home() {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    fetch("/posts",{
      method:"get",
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("token")
      }
    })
    .then(response=>response.json())
    .then(function(data){
      console.log(data);
      setPosts(data.posts);
    }).catch(error=>{
      console.log(error)
    })
  },[]);
  return (
    <div className='home-container'>
     <div className='card home-card'>
       <h5 style={{padding:"10px"}}>Haansel Gretel</h5>
        <div className='card-image'>
           <img src='https://images.unsplash.com/photo-1551636898-47668aa61de2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cG9zdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt="Girls"/>
        </div>
     <div className='card-content'>
     <i className="material-icons" style={{color:"red"}}>favorite</i>
        <h6>Post Title</h6>
        <p>Welcome</p>
        <input type="text" placeholder='Enter Comment'/>
     </div>

     </div>
     <div className='card home-card'>
       <h5 style={{padding:"10px"}}>Haansel Gretel</h5>
        <div className='card-image'>
           <img src='https://images.unsplash.com/photo-1551636898-47668aa61de2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cG9zdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt="Girls"/>
        </div>
     <div className='card-content'>
     <i className="material-icons" style={{color:"red"}}>favorite</i>
        <h6>Post Title</h6>
        <p>Welcome</p>
        <input type="text" placeholder='Enter Comment'/>
     </div>

     </div>
     <div className='card home-card'>
       <h5 style={{padding:"10px"}}>Haansel Gretel</h5>
        <div className='card-image'>
           <img src='https://images.unsplash.com/photo-1551636898-47668aa61de2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cG9zdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt="Girls"/>
        </div>
     <div className='card-content'>
     <i className="material-icons" style={{color:"red"}}>favorite</i>
        <h6>Post Title</h6>
        <p>Welcome</p>
        <input type="text" placeholder='Enter Comment'/>
     </div>

     </div>

    </div>
  )
}

export default Home

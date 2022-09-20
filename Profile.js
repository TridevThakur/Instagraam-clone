import React,{useEffect,useState} from 'react'
import './Profile.css'

function Profile() {
  const [myposts, setMyposts]=useState([]);
  useEffect(()=>{
    fetch("/myposts",{
      method:"get",
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("token")
      }
    })
    .then(response=>response.json())
    .then(function(data){
      console.log(data);
      setMyposts(data.posts);
    
    }).catch(error=>{
      console.log(error)
    })
  },[]);
  return (
    <div className='main-container'>
    <div className='profile-container'>
      <div>
       <img style={{width:"166px",height:"150px",borderRadius:"83px"}} src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="girls in a jacket"/>
      </div>
    <div className='detail-section'>
              <h4>Tridev Thakur</h4>
              <div className='followings'>
                   <h6>50 Posts</h6>
                   <h6>35 Followers</h6>
                   <h6>87 Followings</h6>
              </div>
    </div>
    </div>
    <div className='posts'>
    {
      myposts.map((post)=>{
        return(
          <img src={post.image} className='post' alt={post.title} key={post._id}/>
        )
      })
    }
     
     
     
    </div>
    
    </div>
  )
}

export default Profile

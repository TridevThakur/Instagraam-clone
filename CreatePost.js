import React,{useState,useEffect} from 'react'
import './CreatePostContainer.css'
import M from 'materialize-css'
import {useNavigate} from 'react-router-dom'

function CreatePost () {
  const [title,setTitle]=useState("");
  const [body,setBody]=useState("");
  const [image,setImage]=useState("");
  const navigate=useNavigate();

  useEffect(()=>{
   if(image){
    fetch("/createpost",{
      method:"post",
      headers:{
        "content-Type":"application/json",
        "Authorization":"Bearer "+ localStorage.getItem("token")
      },
      body:JSON.stringify({
        title:title,
        body:body,
        image:image

      })
    })
    .then(response=>response.json())
    .then(function(data){
      if(data.error)
         M.toast({html: data.error,classes:"#b71c1c red darken-4"})
      else{
         M.toast({html: "Post created sucessfully",classes:"#1b5e20 green darken-4"})
        navigate('/');
      }
    }).catch(error=>{
       console.log(error)
    })
   }
  },[image]);

const submitPost=()=>{
  const formData=new FormData();
  formData.append("file",image);
  formData.append("upload_preset","instaapp");
  formData.append("cloud_name","instaapplication1");

  fetch("https://api.cloudinary.com/v1_1/instaapplication1/image/upload",{
    method:"post",
    body:formData

  }).then(response=>response.json())
  .then(data=>{
   setImage(data.url); 
  })
  .catch(error=>console.log(error));
}

  return (
    <div className='card create-post-container'>
        <input value={title} onChange={(event)=>setTitle(event.target.value)}
         type="text" placeholder='Post Title'/>
        <input value={body} onChange={(event)=>setBody(event.target.value)}
        type="text" placeholder='Post Content'/>
         <div className="file-field input-field">
      <div className="btn #64b5f6 blue darken-1">
        <span>Upload Post Image</span>
        <input type="file" onChange={(event)=>setImage(event.target.files[0])}/>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text"/>
      </div>
   
    </div>
    <button onClick={()=>submitPost()} className="waves-effect waves-light btn-large #64b5f6 blue darken-1">Submit Post</button>
    </div>
  )
}

export default CreatePost

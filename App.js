import React,{useEffect,createContext,useReducer,useContext} from 'react';
import { BrowserRouter,Route,Routes,useNavigate} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import CreatePost from './pages/CreatePost';
import './App.css'
import {reducer,initialState} from './reducers/userReducer'

export const UserContext=createContext();
const CustomRouting=()=>{
const navigate=useNavigate();


//useEffect(()=>{
//const userInfo=JSON.parse(localStorage.getItem("userInfo"));
//if(userInfo){
 // dispatch({type: "USER",payload: "userInfo"});
 // navigate.push('/');// User logged in so redirect to home
//}
//else{
  //navigate.push('/login');
//}
//},[]);
  return(
    <>
    <Routes>
    <Route  path="/" exact element={<Home />} />
    <Route  path="login" element={<Login/>} />
    <Route  path="signup" element={<Signup/>} />
    <Route  path="profile" element={<Profile/>} />
    <Route  path="create-post" element={<CreatePost/>} />
    </Routes>
    </>
  )
}





function App() {
const [state, dispatch]=useReducer(reducer,initialState);
  return (
 <UserContext.Provider value={{state: state,dispatch:dispatch}}>
    <BrowserRouter>

     <NavBar />
     <CustomRouting/>
    </BrowserRouter>
    </UserContext.Provider>
   
  
  );
}

export default App;

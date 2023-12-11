import React, { useContext, useEffect, useState } from "react";
// import Hearder from "../header/hearder";
// import { Loginhearder } from "../header/hearder";
import { logincontext } from "../../App";
import axios from "axios";
import Loginnav from "../Navbar/loginnav";
// import styles from "../cssfiles/login.module.css"

function Loginpage() {
  const[userdata,setuserdata]=useState([])      //state for getting data from the api
  const checker=useContext(logincontext)          //data from the parent app.js setted to checker
 const [username,setusername]=useState("")       //user data from the form 
  const userhandler=(event)=>{
      setusername(event.target.value)
  }
const [password,setpassword]=useState("")       //user password data from the from
 const passwordhandler=(event)=>{
  setpassword(event.target.value);
 }

 useEffect(()=>{
  axios.get("https://fakestoreapi.com/users").then((res)=>setuserdata(res.data))
 },[])
 


 const submithandler=(event)=>{                   //evaluating the our and api data
  event.preventDefault()
  if(userdata.find((person) => person.username === username)&& userdata.find((person) => person.password === password)){
    checker.setlogin1()
  }
  else{
    alert("plz enter right details")
  }

 }
  return (
    <div>
      <Loginnav/>
      <div style={{marginTop:200}}>
      <form onSubmit={submithandler}>
        <label>username</label>
        <input type="text" value={username} onChange={(event)=>userhandler(event) }/><br></br>
        <label>password</label>
        <input type="text" value={password} onChange={(event)=>passwordhandler(event)} /><br></br>
        <input type="submit" />
      </form>
   
    </div>
    </div>
  );
}

export default Loginpage;


import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
  const serverData={"user":"Harish","RollNumber":3915}
  const [loggedin,setLoggedin]=useState(false)
  const Loginuser=()=>{
    localStorage.setItem('user',JSON.stringify(serverData))
    window.location.replace('/account')
    setLoggedin(true)


  }
    useEffect(() => {
      if (localStorage.getItem('user')){
        console.log("Logged in")
        setLoggedin(true)
      }
      else{
        console.log("user not loginned")
        setLoggedin(false)
       
     
      }
      
    }, [loggedin,localStorage.getItem("user")]);




  
  return (
    <div>
        <div className='col-lg-3 mx-auto shadow p-3' style={{ margin: '20px auto' }}>
        <input placeholder='Enter your Email' className='form-control my-1'></input>
        <input placeholder='enter your password' className='form-control my-1'></input>
        <button className="btn btn-success form-control" onClick={Loginuser}>Login</button>


        </div>
      
    </div>
  )
}

export default Login

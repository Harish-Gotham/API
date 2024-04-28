import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'

const Signup = () => {
  const[f_name,setFname]=useState(null)
  const[surname,setSurname]=useState(null)
  const[email,setEmail]=useState(null)
  const[password,setPassword]=useState(null)
  
 const signUpuser=async()=>{
  const data = new FormData()
  data.append("f_name",f_name)
  data.append("surname",surname)
  data.append("email",email)
   data.append("password",password)
  const response= await axios.post("https://manojkoravangi.com/signup.php",data,{headers:{'content-type':'multipart/form-data'}})
  if(response){
    console.log(response.data.data);       
    if (response.data.status==="success"){  
      setDisplaymodal(true)
    }
    else{
      setDisplaymodal(false)
    }
  }
}
const [displaymodal,setDisplaymodal]=useState(false)





 




  return (
    
      <>
      <div>
      <Modal show={displaymodal} onHide={()=>setDisplaymodal(false)}>
      <Modal.Body>
      <h4>Success</h4>
      </Modal.Body>
      </Modal>


    </div>
    <div className='col-lg-4 mx-auto'>
    <input placeholder='Enter your firstname' className="form-control"type="text" onChange={(event)=>setFname(event.target.value)}></input>
     <input placeholder='Enter your surname' className="form-control" type="text" onChange={(event)=>setSurname(event.target.value)}></input>
     <input placeholder='Enter your Email' className="form-control"type="text" onChange={(event)=>setEmail(event.target.value)}></input>
     <input placeholder='Enter your password' className="form-control" type="password" onChange={(event)=>setPassword(event.target.value)}></input>
     ServerSignUp
     <button className="btn btn-success form-control" onClick={signUpuser}>Signup</button>


    </div>
    </> 
      
    
  )
}

export default Signup

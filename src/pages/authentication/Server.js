import axios from 'axios'
import React, { useState } from 'react'
import { Modal} from 'react-bootstrap'

const Server = () => {
    const[email,setEmail]=useState(null)
    const[password,setPassword]=useState(null)
   
    const LoginUser =async ()=>{
      const data =new FormData()
      data.append("email",email)
      data.append("password",password)

       const response= await axios.post("https://manojkoravangi.com/login.php",data,{headers:{'content-type':'multipart/form-data'}})
        if(response){
            console.log(response.data.data);       
            if (response.data.status==="success"){
              window.location.replace('/account')
              localStorage.setItem("userdata",JSON.stringify(response.data.data))
            }
            else{
              setDisplaymodal(true)
            }
          
          
          
          }



    }
const [displaymodal,setDisplaymodal]=useState(false)
  return (
    <div>
      <Modal show={displaymodal} onHide={()=>setDisplaymodal(false)}>
      <Modal.Body>
      <h4>invaliduser</h4>
      </Modal.Body>
      </Modal>
     
    <div>
     <input placeholder='Enter your Email' className="form-control"type="text" onChange={(event)=>setEmail(event.target.value)}></input>
     <input placeholder='Enter your password' className="form-control" type="password" onChange={(event)=>setPassword(event.target.value)}></input>
     
     <button className="btn btn-success form-control" onClick={LoginUser}>ServerLogin</button>


    </div>
     
      
    </div>
  )
}

export default Server

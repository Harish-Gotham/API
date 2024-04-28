import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Search = () => {
    
    const [result,setResult]=useState(null)
    const [mapped,setMapped]=useState(null)

const SearchFunctionality=async()=>{
    const data =new FormData()
    data.append("category","courses")
    data.append("limit",10)
    data.append("key",result)
    const response =await axios.post("https://skillsuprise.com/basic-search.php",data,{headers:{'content-type':'multipart/form-data'}})
    
    if(response){
   if(response.data){
    console.log(response.data.data)
    setMapped(response.data.data)
   }
    }}
return (
    <>
    <div className='col-lg-3 mx-auto '>
    <input placeholder="enter your categories" className='form-control' onChange={(event)=>{setResult(event.target.value);SearchFunctionality()}}></input>
    <button onClick={SearchFunctionality} className='form-control btn btn-success'>Search</button>
    </div>
    {mapped?<>
    <div className='d-flex flex-wrap'>
    {mapped.map((element)=>(
    <div className='col-lg-3 shadow'>
      <div className='m-3'>
     <img className='w-100' src={element.course_cover_url}></img>
     <p>{element.course_title}</p>
     <p>{element.course_price}</p>
     <p>{element.course_cuttoff_price}</p>
     <p>{element.ratings}</p>
     <p>{element.course_url}</p>
     </div>
    </div>)
)}
</div></>:<></>}
</>
  )
}

export default Search

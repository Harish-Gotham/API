import axios from 'axios'
import React, { useState } from 'react'

const CoursesList = () => {
    const [courses,setCourses]=useState([])
    const [limit,setLimit]=useState(200)
      const List =async({mode})=>{
        const data =new FormData()
        data.append("mode",mode)
        data.append("limit",limit)
       
        const response =await axios.post("https://skillsuprise.com/get-courses.php",data,{headers:{'content-type':'multipart/form-data'}})
        if(response){
            console.log(response.data)
            setCourses(response.data)
        }
        
        



    }
  return (
    <>
    <div className='colo-lg-4 max-auto'>
        
        <button className='btn btn-success my-2 form-control' onClick={setLimit(5)}>limit5</button>
        <button className='btn btn-success my-2 form-control' onClick={setLimit(10)}>limit10</button>  
        <button className='btn btn-success my-2 form-control' onClick={List}>Allcourses</button>
        <button className='btn btn-success my-2 form-control' onClick={()=>{List({mode:'live'})}}>onlineCourses</button>
        <button className='btn btn-success my-2 form-control' onClick={()=>{List({mode:'offline'})}}>offlineCourses</button>
        <button className='btn btn-success my-2 form-control' onClick={()=>{List({mode:'selfpaced'})}}>selfpacedCourses</button>
        <button className='btn btn-success my-2 form-control' onClick={()=>{List({mode:'specialization'})}}>specialization</button>
        {courses?
        <>
        <div className="d-flex flex-wrap">
        {courses.map((element)=>(
          
          <div className="col-lg-3">

          <div className='p-3 me-2 card'>
          <img src={element.course_cover_url} className='w-100'></img>
          <h5>{element.course_title}</h5>
          <p>{element.rating}</p>
          <p>{element.course_cutoff_price}</p>
          <a href={element.course_url}>url</a>
          </div>
          </div>


        


        ))}
      </div>
      </>:
        
        <></>}
    </div>
    </>
  )
}

export default CoursesList

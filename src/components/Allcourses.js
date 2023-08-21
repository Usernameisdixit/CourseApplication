import React, { useEffect, useState } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourses=()=>
{

    useEffect(()=>{

document.title="All Courses"

    // calling loading course function
    getAllCoursedFromServer();
    
    },[])


    // function to call server

    const getAllCoursedFromServer=()=>
    {

        axios.get(`${base_url}/courses`).then(

(response)=>{

    //console.log(response.data);
    toast.success("courses have been loaded",{position:"bottom-center"});
    setCourses(response.data);

},
(error)=>{
    //console.log(error);
    toast.error("something went wrong!",{position:"bottom-center"});

}



        );
    };




 
    const [courses,setCourses]=useState({
    // {title:"java courses",description:"this is demo course"},
    // {title:"Django courses",description:"this is demo course"},
    // {title:"React courses",description:"this is demo course"},
    // {title:" courses",description:"this is demo course"}


})


    const deleteCourseInAllCourses=(id)=>
    {
        setCourses(courses.filter((c)=>(c.id!=id)))
    }


    
    
    return(
<div>

    <h1>AllCourses</h1>
    <p>List of courses as follows</p>

    {
        courses.length>0?courses.map(

        (item)=>(<Course key={item.id} course={item} deletecourse={deleteCourseInAllCourses}/>)

        ):"NO Courses"



    }
   
   

</div>

    )



}

export default AllCourses
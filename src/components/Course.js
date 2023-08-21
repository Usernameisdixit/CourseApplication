import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Card, Container } from "react-bootstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { Link, Route, Router } from "react-router-dom";


const Course=({course,deletecourse})=>
{


    const deleteCourse=(id)=>{
axios.delete(`${base_url}/courses/${id}`).then(

(response)=>{

    toast.success("course has been deleted")
    deletecourse(id)
},
(error)=>
{
    toast.error("course not deleted!! server problem.")

}


)

}




    return(

        
        
        
<Card style={{padding:30}} className="mt-2">


<Card.Body>

<Card.Subtitle style={{color:"blue"}}><b>course id=</b>{course.id}

</Card.Subtitle>

<Card.Subtitle>{course.title}
    
</Card.Subtitle>

<Card.Text>{course.description}</Card.Text>


{/* <Container> */}
    <Button variant="danger" onClick={()=>{
        deleteCourse(course.id)
    }}>Delete</Button>{' '}
   
    
    <Link to={`/update/${course.id}`}>
    <Button  variant="warning" >Update</Button>
    </Link>

 


    
{/* </Container> */}
</Card.Body>


</Card>



    )

}


export default Course
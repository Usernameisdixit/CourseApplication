import React, { Fragment, useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import { ReactDOM } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import base_url from "../api/bootapi";


const UpdateCourse=()=>
{

    const {id}=useParams();

    const [values,setValues]=useState({id:id,title:'',description:''})

    useEffect(()=>
    {

        document.title="Update Course"

        axios.get(`${base_url}/courses/${id}`).then(

(response)=>{
    setValues({...values,id:response.data.id,title:response.data.title,description:response.data.description})
    
    console.log(response)},
(error)=>{console.log(error)}

        )
        

    },[])

const navigate=useNavigate()
    const handleSubmit=(e)=>
    {

        axios.put(`${base_url}/courses`,values).then(


(response)=>{
    navigate("/view-courses")
},
(error)=>{}

        )
        e.preventDefault()
    }


    return(

<>
<h1 className="text-center">Update Product</h1>

<Form onSubmit={handleSubmit} className="text-center">
    <FormGroup>
    <label for="userid">Course Id</label><br/>
<input type="text" name="user_id" id="userid" value={values.id} onChange={(e)=>{

setValues({...values,id:e.target.value})
}}></input>
</FormGroup>

<FormGroup>
    <label for="title">Course title</label><br/>
<input type="text"  id="title" value={values.title} onChange={(e)=>{

setValues({...values,title:e.target.value})
}}></input>
</FormGroup>


<FormGroup>
    <label for="description">Course description</label><br/>
<input type="text"  id="description" value={values.description} onChange={(e)=>{

setValues({...values,description:e.target.value})

}} ></input>
</FormGroup>


<Button  className="mt-2" type="submit" variant="success">Update</Button>

</Form>


</>
    )
}

export default UpdateCourse
import React, { Fragment, useState } from "react";
import { Button, ButtonGroup, Container, FormGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";


const AddCourse=()=>
{

    useEffect(()=>{

        document.title="Add Courses"
            
            },[])


            const [course, setCourse]=useState({})

            //form handler function

            const handleForm=(e)=>
            {

                console.log(course);
                postDataToServer(course)
                console.log(course)
                setCourse("")
                e.preventDefault();
               
            }


            //create function to post data on server
            const postDataToServer=(data)=>
            {
axios.post(`${base_url}/courses`,data).then(

(response)=>
{console.log(response)
console.log("success")
console.log(data)

toast.success("course has been added",{position:"bottom-center"});


},
(error)=>
{
console.log(error)
console.log("error")
toast.error("Error! something went wrong",{position:"bottom-center"})
}



)

            }

    return(

<Fragment>
<h1 className="text-center" my-3>Fill Course Details</h1>
    <Form onSubmit={handleForm} className="text-center">
  <FormGroup>

    <label for="userid">Course Id</label><br/>
    <input type="text" placeholder="Enter id" name="user_id" id="userid" onChange=
    
    { (e)=>{

        setCourse({...course,id:e.target.value})
    }


    }/>
  </FormGroup>
 

  <FormGroup>

    <label for="title">Course Title </label><br/>
    <input type="text" placeholder="Enter title here" id="title" onChange={

        (e)=>
        {
            setCourse({...course,title:e.target.value})
        }
    }></input>
  </FormGroup>


  <FormGroup>

<label for="description">Course Description</label><br/>
<input type="textarea" placeholder="Enter description here" id="description" style={{height:20}} onChange={

(e)=>
{
    setCourse({...course,description:e.target.value})
}


}></input>

  </FormGroup>


  <Container className="text-center gap-5 my-2">
    

<Button type="submit" variant="success">Add Button</Button>{' '}
<Button type="reset" variant="warning">Clear</Button>



  </Container>
  

    </Form>

</Fragment>


    )

}

export default AddCourse
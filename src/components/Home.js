import React, { useState } from "react";
import { Button, Container, Modal, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";

import { Card } from "react-bootstrap";
import { toast } from "react-toastify";
import { ReactDOM } from "react";

const Home=()=>
{

      useEffect(()=>{

            document.title="Home || Learn Code with Developer"
                
                },[])

     const [displayText,setDisplayText]=useState('')
     const[buttonVisible,setButtonVisible]=useState(true)
             
                const menuOfTitles=()=>
               {
             //toast.success("Going to learn more in React js",{position:"bottom-center"})
             //e.target.value="hello"
             //const root=ReactDOM.createRoot(document.getElementById("click").innerHTML="Hello").render
             setDisplayText("Hello World!!!")
             setButtonVisible(false)

          }

 return(


    

<Card  style={{width:"auto",height:"100%",backgroundColor:"aquamarine"}} className="text-center bg-priamry" bg="">
      <Card.Body>
<Card.Title>Learn code with Developer</Card.Title>
<Card.Text>this app has front end with react js and backend with Spring boot</Card.Text>
{buttonVisible && <Button id="click" onClick={menuOfTitles} variant="outline-primary">Get Started</Button>}
<br/>
<p>{displayText}</p>



      </Card.Body>
    </Card>


    
 )


}

export default Home
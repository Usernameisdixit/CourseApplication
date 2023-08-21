import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';


import './App.css';
import { Button,Container,Spinner} from 'react-bootstrap';

import { Toast} from 'react-bootstrap';

import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

import { Modal } from 'react-bootstrap';
import Home from './components/Home';
  
import Course from './components/Course';
import AllCourses from './components/Allcourses';

import Header from './components/Header';

import AddCourse from './components/AddCourse';

import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import Menus from './components/Menus';

import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Routes } from 'react-router-dom';
import UpdateCourse from './components/UpdateCourse';





function App() {

const btn_click=()=>
{
  //alert("Hello button clicked")
  toast("Hi This is toast container")
  toast.info("wow so easy",{position:"top-center"})
  
  

  
}

  return (
     <div>
      <Router>
      <ToastContainer/> 
    {/* <h1>hi juju</h1>
    <Button variant='outline-warning'><Spinner size='sm'></Spinner><span>Loading..</span></Button>{' '}
    <Button variant='outline-warning'><Spinner animation='border' size='sm'></Spinner></Button>{' '}
    <Button variant='outline-primary' onClick={btn_click}>Click me</Button> */}

    <Container>

<Header/>
<Row>

<Col md="4">
<h2><Menus/></h2>
</Col>

<Col md="8">

  <Routes>
<Route exact path='/' element={<Home/>}/>
<Route exact path='/add-course' element={<AddCourse/>} />
<Route exact path='/view-courses' element={<AllCourses/>}/>
<Route exact path='/update/:id' element={<UpdateCourse/>}/>

</Routes>

</Col>





</Row>




    </Container>


    </Router>
   
    </div>
    
  );
}

export default App;

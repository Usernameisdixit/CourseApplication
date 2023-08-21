import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menus=()=>
{

return(

<ListGroup>

<Link className="list-group-item list-group-item-action" action to="/" variant="info">Home</Link>
<Link className="list-group-item list-group-item-action" action to="/add-course" variant="info">Add Course</Link>
<Link className="list-group-item list-group-item-action" action to="/view-courses" variant="info">View Course</Link>
<Link className="list-group-item list-group-item-action" action to="#link1" variant="info">About</Link>
<Link className="list-group-item list-group-item-action" action to="#link1" variant="info">Contact</Link>



</ListGroup>

)



}

export default Menus
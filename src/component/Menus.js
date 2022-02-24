import React from 'react'
import { Link } from 'react-router-dom';
import { ListGroup} from 'reactstrap';

const Menus = () => {
    return (
        <div>
    <ListGroup >
      <Link className="list-group-item list-group-item action" tag="a" to="/">Home</Link>
      <Link className="list-group-item list-group-item action" tag="a" to="/project-staff">ProjectStaff</Link>
      <Link className="list-group-item list-group-item action" tag="a" to="/add-course">AddCourses</Link>
      <Link className="list-group-item list-group-item action" tag="a" to="/view-courses">ViewCourses</Link>
      <Link className="list-group-item list-group-item action" tag="a" to="/about">About</Link>
      <Link className="list-group-item list-group-item action" tag="a" to="#">ContactUs</Link>
      <Link className="list-group-item list-group-item action" tag="a" to="/student">Students</Link>
      <Link className="list-group-item list-group-item action" tag="a" to="/add-student">Add Student</Link>
    </ListGroup>
        </div>
    )
}

export default Menus

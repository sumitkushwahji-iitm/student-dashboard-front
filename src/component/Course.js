import React, { useEffect } from "react";
import Allcourses from "./Allcourses";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


const Course = ({ course , update}) => {
const notify = () => toast("Wow so easy!");

  //delete course function
  const deleteCourse=(id)=>{
    axios.delete(`/courses/${id}`).then(
      (response)=>{
       toast.success("course deleted");
      update(id);
      },
      (error)=>{
       toast.error("server error || not deleted");
      }
    )

  }


  return (
    <div>
      <ToastContainer />
      <Card className="text-center">
        <CardBody>
          <CardTitle tag="h5">{course.title}</CardTitle>
          {/* <CardSubtitle tag="h6" className="mb-2 text-muted">{course.title}</CardSubtitle> */}
          <CardText>{course.description}</CardText>
          <Button
            color="danger"
            onClick={() => {
              deleteCourse(course.id);
            }}
          >
            Delete
          </Button>
          <Button color="warning" onClick={notify}>
            Update
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Course;

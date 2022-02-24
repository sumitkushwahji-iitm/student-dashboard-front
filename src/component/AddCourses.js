import axios from "axios";
import React ,{useEffect, useState} from "react";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

const AddCourses = () => {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = "Add Courses";
  }, []);

 const [course, setCourse]= useState({});

 //use handle function

const handleForm=(e)=>{
  console.log(course);
postDataToServer(course);
  e.preventDefault();
}

const postDataToServer=(data) =>{
  axios.post("/courses",data).then(
    (response)=>{
      console.log(response);
      console.log("success")
      toast.success("course added successfully");
    },(error)=>{
      console.log("error")

    }
  );
}



  return (
    <div>
      <Form onSubmit={handleForm}>
        <FormGroup >
          <Label for="userId">Course_Id</Label>
          <Input
            type="text"
            name="userId"
            id="userId"
            placeholder="Enter Course id"
            onChange ={(e)=>{
              setCourse({...course, id:e.target.value});
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Enter title"
            onChange ={(e)=>{
              setCourse({...course, title:e.target.value});
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            placeholder="Describe Here"
            onChange ={(e)=>{
              setCourse({...course, description:e.target.value});
            }}
            style={{height: 200}}
          />
        </FormGroup>
        <Container className="text-center">
        <Button type="submit" color="primary mr-2">AddCourses</Button>
        <Button type="reset" color="danger" >Clear</Button>
        </Container>
        
      </Form>
      </div>
  );
};

export default AddCourses;

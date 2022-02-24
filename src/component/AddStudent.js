import axios from "axios";
import React ,{useEffect, useState} from "react";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

const AddStudent = () => {

     // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = "Add Student";
  }, []);

 const [student, setStudent]= useState({});

 //use handle function

const handleForm=(e)=>{
  console.log(student);
postDataToServer(student);
toast.success("Student data added succesfully");
  e.preventDefault();
}

const postDataToServer=(data) =>{
  axios.post("/student", data).then(
    (response)=>{
      console.log(response);
      console.log("success")
      toast.success("Student data added succesfully");
    },(error)=>{
      console.log("error")

    }
  );
}





    return (
        <div>
            <Form onSubmit={handleForm}>
        <FormGroup >
          <Label for="userId">student Id</Label>
          <Input
            type="text"
            name="userId"
            id="userId"
            placeholder="Enter Student id"
            onChange ={(e)=>{
              setStudent({...student, id:e.target.value});
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="title">Name</Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Name"
            onChange ={(e)=>{
              setStudent({...student, name:e.target.value});
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
              setStudent({...student, title:e.target.value});
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Mobile</Label>
          <Input
            type="text"
            name="description"
            id="description"
            placeholder="Enter here"
            onChange ={(e)=>{
              setStudent({...student, mobile:e.target.value});
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="title">Guide</Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Guide Name"
            onChange ={(e)=>{
              setStudent({...student, guide:e.target.value});
            }}
          />
        </FormGroup>
        <Container className="text-center">
        <Button type="submit" color="primary mr-2">AddStudent</Button>
        <Button type="reset" color="danger" >Clear</Button>
        </Container>
        
      </Form>
        </div>
    )
}

export default AddStudent

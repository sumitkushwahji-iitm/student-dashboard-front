
import React, { useState, useEffect } from "react";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Students = () => {
  let i=1;
    // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = "student|| code with sumit";
    getAllStudentFromServer();
  }, []);

   //function to call server:
   const getAllStudentFromServer=()=>{
    axios.get(`/student`).then(
      (response)=>{
        console.log(response.data);
        setStudent(response.data);
        toast.success("Students");

      },(error)=>{
        console.log("error")

      }
    );
  }
   //hooks
   const [student, setStudent] = useState([]);

    return (
        <div>
            <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">S.No.</th>
      <th scope="col">ID No</th>
      <th scope="col">Name</th>
      <th scope="col">title</th>
      <th scope="col">mobile</th>
      <th scope="col">guide</th>
      
    </tr>
  </thead>
  <tbody>
  {student.length > 0
        ? student.map((item) => <tr>
        <th scope="row">{i++}</th>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.title}</td>
        <td>{item.mobile}</td>
        <td>{item.guide}</td>
        
      </tr>)
        : "no student"}
    
    </tbody>
    </table>
    {/* <Link className="list-group-item list-group-item action" tag="a" to="/users/export/pdf">Export to pdf</Link>
    <Link to={{ pathname: "localhost:9090" }} >hello</Link>
     */}
     <Link className="list-group-item list-group-item action" tag="a" to="/users/export/pdf">view pdf</Link>
        </div>
    )
}

export default Students

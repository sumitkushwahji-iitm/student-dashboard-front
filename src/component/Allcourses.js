import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourses = () => {
  
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = "Courses|| code with sumit";
    getAllCoursesFromServer();
  }, []);

  //function to call server:
  const getAllCoursesFromServer=()=>{
    axios.get(`/courses`).then(
      (response)=>{
        console.log(response.data);
        setCourses(response.data);
        toast.success("Courses");

      },(error)=>{
        console.log("error")

      }
    );
  }
 


  //hooks
  const [courses, setCourses] = useState([]);

const updateCourses=(id)=>{
  setCourses(courses.filter((c)=>c.id != id))
}

  return (
    <div>
      <h1 className="text-center">Courses</h1>
      <p className="text-center">List of Courses</p>
      {courses.length > 0
        ? courses.map((item) => <Course key={item.id} course={item} update={updateCourses}/>)
        : "no courses"}
    </div>
  );
};

export default Allcourses;

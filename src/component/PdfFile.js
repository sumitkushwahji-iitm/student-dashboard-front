import React , {useState, useEffect} from 'react'
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const PdfFile = () => {

    useEffect(() => {
        // Update the document title using the browser API
        document.title = "student|| code with sumit";
        getAllStudentFromServer();
      }, []);
    
       //function to call server:
       const getAllStudentFromServer=()=>{
        axios.get(`/users/export/pdf`).then(
          (response)=>{
            console.log(response.data);
            setStudent(response.data);
            toast.success("Students");
    
          },(error)=>{
            console.log("error")
    
          }
        );
      }

      const [student, setStudent] = useState([]);

    return (
        <div>
           
      {/* <Link className="list-group-item list-group-item action" tag="a" to="/student">Students</Link> */}
      {/* <iframe src="" style="width:600px; height:500px;" frameborder="0"></iframe> */}

        </div>
    )
}

export default PdfFile

import "./App.css";
import AddCourses from "./component/AddCourses";
import Allcourses from "./component/Allcourses";
import Header from "./component/Header";
import { Container, Row, Col } from "reactstrap";
import Menus from "./component/Menus";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import About from "./component/About";
import ProjectStaff from "./component/ProjectStaff";

import Home from "./component/Home";


import Students from "./component/Students";
import AddStudent from "./component/AddStudent";
import PdfFile from "./component/PdfFile";



function App() {
 
  return (
    <div>
      <Router>
        <Header />
        <Container>
          <Row>
            <Col md={3}>
              <Menus />
            </Col>
            <Col md={9}>
            <Route path="/" component= {Home} exact />
            <Route path="/project-staff" component= {ProjectStaff} exact />
            <Route path="/add-course" component= {AddCourses} exact />
            <Route path="/view-courses" component= {Allcourses} exact />
            <Route path="/about" component= {About} exact />
            <Route path="/student" component= {Students} exact />
            
            <Route path="/add-student" component= {AddStudent} exact />
            <Route path="/users/export/pdf" component= {PdfFile} />
           
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;

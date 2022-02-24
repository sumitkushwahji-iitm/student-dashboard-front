import React, { useEffect } from "react";
import { Jumbotron, Button } from "reactstrap";



const About = () => {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = "Home";
  }, []);

  return (
    <div>
      <Jumbotron className="text-center bg-warning">
        <h1 className="display-3">Welcome To NPL</h1>
        <p className="lead">
        Time and Frequency (T&F) section plays leading role as the Indian Time
         Authority (ITA) who is responsible for measuring“time” and “frequency”
         with highest level of accuracy in India and keep them traceable to the 
         International Bureau of Weights and Measures (BIPM) using ultraprecise 
         satellite links to realize “second”, i.e., the unit of time in International
          System (SI) of Units.
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default About;

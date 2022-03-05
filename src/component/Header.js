import React from "react";
import { Card, CardBody } from "reactstrap";

const Header = () => {
  return (
    <div>
      {/* <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardBody>
        <h1 className="text-center mt-2 mb-4 bc-red">Time and Frequency Metrology Section (DU 6.0, DP 6.01)</h1>
        </CardBody>
      </Card> */}
      {/* <section id="section-top" class="section section-top">
        <div id="header-logo" class="header header-logo">
          <div id="header-top">
            <div id="block-block-44" class="block block-block">
              <div class="content">
                <div class="logo">
                  <a href="/" title="Home">
                    <img src="https://www.nplindia.in/sites/all/themes/fbg/logo.png" alt="Home" />
                  </a>
                </div>{" "}
              </div>
            </div>
            <div id="block-block-45" class="block block-block">
              <div class="content">
                <p class="row1">CSIR-National Physical Laboratory</p>
                <p class="row2">"National Measurement Institute of India"</p>
              </div>
            </div>
            <div id="block-block-46" class="block block-block">
              <div class="content">
                <div class="logo-csir">
                  <a href="" title="Home">
                    <img src="https://www.nplindia.in/sites/all/themes/fbg/logo.png" alt="Home" />
                  </a>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
        <div class="cf"></div>
      </section>*/}

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-2">
              <img
                src="https://www.nplindia.org/wp-content/uploads/2021/09/NPL-logo-300x298.png"
                class="img-fluid mx-5"
                alt="nplindia"
              />
            </div>
            <div class="col-sm-8">
              <div class="row text-center">
                <div class=" navbar-text mb-0 h1 mx-auto text-primary">
                  CSIR-National Physical Laboratory
                </div>
                <div class=" navbar-text mb-0 h3 mx-auto">
                  "National Measurement Institute of India"
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <img
                src="https://www.nplindia.org/wp-content/uploads/2021/10/CSIR-logo-300x300.png"
                class="img-fluid mx-5"
                alt="nplindia"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

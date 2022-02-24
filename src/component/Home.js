import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';


const Home = () => {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = "Home";
  }, []);

    return (
        <div>
        <Jumbotron className="text-center ">
        {/* <h1 className="display-3" >Hello, world!</h1> */}
        <p className="lead">Indian Standard Time Metrology Division (D#6.0)</p>
        <hr className="my-2" />
        <div class="content text-start">
    <p>The main objective of this division is to strengthen and encourage the overall development in the field of science and technology for the country. The main responsibility is the realization, establishment, custody, maintenance, dissemination and upgradation of the national standards for&nbsp;<strong>Time &amp; Frequency, LF &amp; HF Voltage, Current, Microwave and Magnetic parameters</strong>.</p>
<p>The Time &amp; Frequency Metrology Section is responsible for the highest level of time and frequency measurements in India using ultraprecise satellite links. In simple words,&nbsp;<strong>CSIR-NPL maintains the Indian Standard Time (IST)</strong>. The time authority by NPL is based on a bank of Cesium (Cs) atomic clocks and a Hydrogen maser. These clocks are so accurate that they would lose or gain one second in about three lakh years. The traceability of our time scale with BIPM is at the level of few nano-seconds (ns). In addition, we carry out research and development on primary atomic clocks. Our first Cs fountain clock, with an accuracy of a few parts in 10<sup>-15</sup>, became operational in 2011. A second Cs Fountain is under development (project NOVOCEF). Recently, we have started developing a more accurate clock (≈10<sup>-17</sup>) at optical wavelengths based on a single trapped Ytterbium ion (project STIOS).</p>
<p>The Division also maintains the primary standards like Josephson Voltage Standards, Multi Junction thermal converters as LF Voltage and Current Standards, WBCO and Calorimeter as Microwave attenuation and Power Standards. A dedicated group is working for establishing the Device Fabrication and Characterization for Quantum Metrology.</p>
<p>The section also has additional capabilities like cryostat system, E-field, RF I-V impedance analyser, Phasor measurement unit (PMU), nano fabrication facility with the help of Focussed Ion Beam (FIB) system.</p>
<p>The Division is also providing various&nbsp;<strong>apex level&nbsp;</strong><a href="http://www.nplindia.org/calibration-testing-charges"><strong>calibration services</strong></a>&nbsp;in the above &nbsp;parameters to the industry &amp; user organizations of the country and provides educational training on industrial metrology to support the economic growth.</p>
<p><strong>MoUs:</strong></p>
</div>
         <p className="lead">
        <Link to="www.nplindia.org" target="_blank" >Csir npl</Link>
        <a href="ww.nplindia.org"> csir npl</a>
        </p>
      </Jumbotron>
      
        </div>
    )
}

export default Home

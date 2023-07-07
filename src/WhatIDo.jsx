import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBook} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function Whatido(){
return(
<section className="px-5">
   <Container>
      <Row>
         <Col className='col'>
         <p className='text-bold fs-4'> My Projects</p>
         </Col>
      </Row>
      <Row className='py-4'>
         <Col xs={12} md={6}>
         <div className='d-flex py-3'>
         <div className='px-4'><FontAwesomeIcon className="color" icon={faBook}></FontAwesomeIcon></div>
         <div>
         <h6 className='text-bold'>Heart Failure Risk Analysis</h6>
         <ul className='list p-0'>
            <li className='lh-2'>Python , Streamlit , Jupyter Notebook , ML</li>
            <li className=''>This project predicts if a person is prone to heart failure or 
             not based on his or her medical report by using various ml algorithms.</li>
         </ul>
         </div>
         </div>
         <div className='d-flex py-3'>
         <div className='px-4'><FontAwesomeIcon className="color" icon={faBook}></FontAwesomeIcon></div>
         <div><h6 className='text-bold'>Find My Tutor</h6>
         <ul className='list p-0'>
            <li>MERN Stack</li>
            <li> This project connects tutors and students through a single
            platform, and the student can find a verified mentor using the filter by area
            or by class option to connect with them.</li>
         </ul>
         </div>
         </div>
         </Col>
         <Col xs={12} md={6}>
         <div className='d-flex py-3'>
         <div className='px-4'><FontAwesomeIcon className="color" icon={faBook}></FontAwesomeIcon></div>
         <div><h6 className='text-bold'>Megapack</h6>
         <ul className='list p-0'>
            <li>Html, CSS , Bootstrap</li>
            <li> This is a basic megapack website made using bootstrap. It is made using bootstrap.</li>
         </ul>
         </div>
         </div>
         <div className='d-flex py-3'>
        <div className='px-4'><FontAwesomeIcon  className="color" icon={faBook}></FontAwesomeIcon></div>
         <div><h6 className='text-bold'>My Resume</h6>
         <ul className='list p-0'>
            <li>Html , CSS , Bootstrap , React</li>
            <li>This project describes the candidate's relevant experience, skills, and achievements. An impressive website made using React Bootstrap. it also takes feedback from the interviewer.</li>
         </ul>
         </div>
         </div>
         </Col>
      </Row>
   </Container>
</section>
);
}
export default Whatido;
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Container from 'react-bootstrap/Container';
import "./style.css";


function Education(){
    return(
  <section class="py-5">
  <Container>
    <Row className='px-5'>
      <Col xs={12} sm={12} md={6}>
      <h4 className='py-3'>Education</h4>
  <ul class="timeline">
    <li class="timeline-item mb-5">
      <h5>BTech Cse </h5>
      <div className='edu'>
      <p>Jaypee Institute of Information Technology</p>
      <p>2020-2024</p>
      <p>Cgpa : 7.8</p>
      </div>
    </li>

    <li class="timeline-item mb-5">
      <h5>Senior Secondary Exam</h5>
      <div className='edu'>
      <p class=" mb-2">St. Mary's Convent Sr. Sec. School</p>
      <p class=" mb-2">2020</p>
      <p>Percentage : 89.8%</p>
      </div>
    </li>

    <li class="timeline-item mb-5">
      <h5>Secondary Exam</h5>
      <div className='edu'>
      <p class=" mb-2">St. Mary's Convent Sr. Sec. School</p>
      <p class=" mb-2">2018</p>
      <p>Percentage : 93.6%</p>
      </div>
    </li>
  </ul>
  </Col>
  <Col xs={12} sm={12} md={6}>
      <h4 className='py-3'>Experience</h4>
  <ul class="timeline">
    <li class="timeline-item mb-5">
      <h5>Internship</h5>
      <div className='edu'>
      <p>Wizard Infoways Pvt. Ltd.</p>
      <p>June 2023-Present</p>
      </div>
    </li>

    <li class="timeline-item mb-5">
      <h5>Head</h5>
      <div className='edu'>
      <p class=" mb-2">Bhangde De Sartaaj</p>
      <p class=" mb-2">Aug 2022 - Aug 2023</p>
      <p>Percentage : 89.8%</p>
      </div>
    </li>
  </ul>
  </Col>
  </Row>
  </Container>
</section>
    );
}
export default Education;
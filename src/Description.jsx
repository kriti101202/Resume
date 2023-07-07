import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import RESUME from "./RESUME.pdf";
import kriti from './kriti.jpg';

function Description(){
    return (
        <section>
        <Container fluid className="text-bg-dark py-3">
        <Row className="p-5">
        <Col xs={12} md={6}><img className="profile" src={kriti} alt="profile"></img>
        </Col>
        <Col xs={12} md={6}>
        <p>Web Developer</p>
        <h1>Kritika Agrawal</h1>
        <p className='py-3'>A Web Developer  specializing in HTML , CSS , Bootstrap , JavaScript, React ,  MySQL, and front-end development. Adept at collaborating with dynamic teams to build high quality websites and identify opportunities to enhance the user experience.
        </p>
        <div>
        <a className='text-decoration-none'
        href={RESUME}
        download="RESUME"
        target="_blank"
        rel="noreferrer">
        <Button variant="outline-primary rounded-pill detail px-3 text-white">Download CV</Button>{' '}
        </a>
        <Link className='text-decoration-none' to="/Contact">
        <Button href='/contact' variant="outline-light detail rounded-pill px-3">Contact</Button>{' '}
        </Link>
        </div>
        </Col>
      </Row>
      </Container>
      </section>
    );
}
export default Description;
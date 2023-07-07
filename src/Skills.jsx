import Container from 'react-bootstrap/Container';
import React from "react";
import "./style.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';


function Skills(){
    return (
        <section>
            <Container className='px-5'>
                <Row>
                <Col xs={12} sm={12} md={6}>
                <div><p className='fs-4'>Skills</p></div>
                <div className='py-3'><p className='cert text-bold'>Html <span className='percent'>60%</span></p>
                <ProgressBar className='bar' now={60} /></div>
                <div className='py-3' ><p className='cert text-bold'>CSS <span className='percent'>60%</span></p>
                <ProgressBar className='bar' now={60} /></div>
                <div className='py-3'> <p className='cert text-bold'>Javascript <span className='percent'>60%</span></p>
                <ProgressBar className='bar' now={60} /></div>
                <div className='py-3'><p className='cert text-bold'>React.js<span className='percent'>60%</span></p>
                <ProgressBar className='bar' now={60} /></div>
                </Col>
                <Col xs={12} sm={12} md={6} className='py-5'>
                <div className='py-3'><p className='cert text-bold'>Bootstrap<span className='percent'>60%</span></p>
                <ProgressBar className='bar' now={60} /></div>
                <div className='py-3'><p className='cert text-bold'>Mongo DB <span className='percent'>60%</span></p>
                <ProgressBar className='bar' now={60} /></div>
                <div className='py-3'><p className='cert text-bold'>My SQL <span className='percent'>60%</span></p>
                <ProgressBar className='bar' now={60} /></div>
                <div className='py-3'><p className='cert text-bold'>Python <span className='percent'>60%</span></p>
                <ProgressBar className='bar' now={60} /></div>
                </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Skills;
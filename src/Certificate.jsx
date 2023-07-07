import Container from 'react-bootstrap/Container';
import React from "react";
import "./style.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Certificate(){
    return (
    <section>
        <Container className='py-5'>
        <Row>
                <Col xs={12} sm={12} className="text-bold fs-4 px-5"><p>Certificates</p></Col>
        </Row>
        <Row className="py-3">
                <Col xs={12} sm={6} className="text-bold px-5">
                <div className="cardel text-center">
                <p>Project Exhibition Certificate</p>
                <p className="cert">Issued on 12th May 2023</p>
                </div>
                </Col>
                <Col xs={12} sm={6} className="text-bold px-5">
                <div className="cardel text-center">
                <p>Web Development Bootcamp</p>
                <p className="cert">Issued on 5th July 2023</p>
                </div>
                </Col>
        </Row>
        </Container>
    </section>

    );
}
export default Certificate;
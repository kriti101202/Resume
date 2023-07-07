import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./style.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Details() {

    return(
        <section>
            <Container className="px-5">
            <Form className="input-borders">
                <Row>
                    <Col xs={12} md={4} className="py-5" >
                    <div className="d-flex py-3">
                        <div><FontAwesomeIcon className="color px-3" icon={faPhone}></FontAwesomeIcon></div>
                        <div>
                        <p className="fs-5 m-0 py-1">Contact</p>
                        <Link  className="text-decoration-none map"to="tel:7300841851">7300841851</Link>
                        </div>
                    </div>
                    <div className="d-flex py-3">
                    <div><FontAwesomeIcon className="color px-3" icon={faLocationDot}></FontAwesomeIcon></div>
                    <div>
                    <p className="fs-5 m-0 py-1">Address</p>
                    <Link className=" text-decoration-none map" to ="https://goo.gl/maps/VbffeMa4VXqMfC1m6" target="_blank">JIIT  Noida , Uttar Pradesh</Link>
                    </div>
                    </div>
                    <div className="d-flex py-3">
                    <div><FontAwesomeIcon className="color px-3" icon={faEnvelope}></FontAwesomeIcon></div>
                    <div>
                    <p className="fs-5 m-0 py-1">E-mail</p>
                    <Link className="text-decoration-none map" to='javascript:void(0)' target="_blank" onClick={() => window.location = 'mailto:kriti101202@gmail.com'}>
                    kriti101202@gmail.com
                    </Link>
                    </div>                    
                    </div>
                    </Col>
                    <Col xs={12} md={4} className="py-5">
                    <div><p className="text-bold fs-4">Feedback</p></div>
                    <div>
                        
                        <Form.Group className="mb-3 py-1" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Full Name"/>
                        </Form.Group>
                        <Form.Group className="mb-3 py-1" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="E-mail Address" />
                        </Form.Group>  
                        <Form.Group className="mb-3 py-1" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Phone no."/>
                        </Form.Group>     
                        <Button variant="outline-primary detail rounded-pill px-3 text-white py-2 ">Send Message</Button>{' '}
                        </div>
                    </Col>
                    <Col xs={12} md={4} className="py-5 mt-2">
                        <div className="py-5">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={6}  placeholder="Message"/>
                        </Form.Group>
                        </div>
                    </Col>
                </Row>
                </Form>
            </Container>
        </section>
    );
}
export default Details;
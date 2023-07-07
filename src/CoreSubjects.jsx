import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faStopwatch, faStar, faCoffee} from "@fortawesome/free-solid-svg-icons";
import "./style.css"

import "./style.css";
function CoreSubjects(){
    return (
    <section className="px-5 py-5">
        <Container>
            <Row>
                <Col xs={12} sm={12} className="text-bold fs-4"><p>Core Subjects</p></Col>
            </Row>
            <Row className="py-3">
                
                <Col xs={12} sm={3} className="text-bold">
                <div className="cardel text-center">
                <FontAwesomeIcon className="color py-3" icon={faHeart}></FontAwesomeIcon>
                <p>CN</p>
                
                </div>
                </Col>

                <Col xs={12} sm={3}>
                <div className="cardel text-center">
                <FontAwesomeIcon  className="color py-3"icon={faStopwatch}></FontAwesomeIcon>
                <p>OSSP</p>
                
                </div>
                </Col>
                
                <Col xs={12} sm={3} >
                <div className="cardel text-center">
                <FontAwesomeIcon className="color py-3" icon={faStar}></FontAwesomeIcon>
                <p>DBMS</p>
                </div>
                </Col>
                               
                <Col xs={12} sm={3}>
                <div className="cardel text-center">
                <FontAwesomeIcon  className="color py-3" icon={faCoffee}></FontAwesomeIcon>
                <p>OOPS</p>
                </div>
                </Col>
                
            </Row>
        </Container>
    </section>

    );
}
export default CoreSubjects;
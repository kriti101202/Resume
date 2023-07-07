import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./style.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer(){
    return (
<section className="sitefooter py-3">
    <Container>
        <Row>
        <Col xs={12} sm={12} md={3}>
         </Col>
        <Col xs={12} sm={12} md={6} className="text-center">
            <div>
                <a  className="link" href="https://github.com/kriti101202" target="_blank" rel="noreferrer">Github</a>
                <a  className="link" href="https://www.linkedin.com/in/kritika-agrawal-09999b223/" target="_blank" rel="noreferrer" >LinkedIn</a>
                <a  className="link" href="https://www.instagram.com/kriti.__.ag/" target="_blank" rel="noreferrer">Instagram</a>
            </div>
            </Col> 
            <Col xs={12} sm={12} md={3} className="text-center">
            <p className="tag px-5">Made with <FontAwesomeIcon className="heart" icon={faHeart}></FontAwesomeIcon> by Kritika Agrawal</p>
            </Col>       
        </Row>
    </Container>
</section>
    );
}
export default Footer;
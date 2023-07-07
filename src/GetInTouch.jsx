import React from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import "./style.css";
function GetInTouch(){
    return (
        <section className="getintouch">
            <Container>
                <Row>
                    <p className=" text-bold fs-1">Contact</p> 
                </Row>
            </Container>
        </section>
    );

}
export default GetInTouch;
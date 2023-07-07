import BasicExample from "./Navbar";
import Whatido from "./WhatIDo";
import Container from 'react-bootstrap/Container';
import "./style.css";
import Footer from "./Footer";
import CoreSubjects from "./CoreSubjects";
import Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Description from "./Description";

function Home() {
  return (
    <section className="py-5">
    <Container className="nav-border text-bg-dark">
      <Row>
        <Col>
      <BasicExample/>
      <Description/>
      <Whatido/>
      <CoreSubjects/>
      <Footer/>
        </Col>
      </Row>
    </Container>
    </section>
  );
}

export default Home;
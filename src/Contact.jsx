import BasicExample from "./Navbar";
import Container from 'react-bootstrap/Container';
import React from "react";
import "./style.css";
import GetInTouch from "./GetInTouch";
import Footer from "./Footer";
import Details from "./Details";
function Contact() {
    return(
    <section className="py-5">
    <Container className="nav-border text-bg-dark">
    <BasicExample/>
    <GetInTouch/>
    <Details/>
    <Footer/>
    </Container>
    </section>
    );
}
export default Contact;
import BasicExample from "./Navbar";
import Container from 'react-bootstrap/Container';
import React from "react";
import "./style.css";
import Exp from "./Exp";
import Education from "./Education";
import Footer from "./Footer";
import Certificate from "./Certificate";
import Skills from "./Skills";

function Resume(){
    return(
    <section className="py-5">
    <Container className="nav-border text-bg-dark">
    <BasicExample/>
    <Exp/>
    <Education/>
    <Certificate/>
    <Skills/>
    <Footer/>
    </Container>
    </section>
    );
}
export default Resume;